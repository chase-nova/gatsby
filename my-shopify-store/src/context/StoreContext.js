import React, { createContext, useEffect, useState } from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
  language: `${process.env.LANGUAGE}`,
})

const defaultStoreContext = {
  client,
  adding: false,
  checkout: {
    lineItems: [],
  },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
}

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [state, setState] = useState({
    ...defaultStoreContext,
    addVariantToCart: (newState, variantId, quantity) => {
      console.log('addVariantToCart state=', state)
      console.log('addVariantToCart newState=', newState)
      console.log('addVariantToCart variantId=', variantId)
      console.log('addVariantToCart quantity=', quantity)
      return new Promise((resolve, reject) => {
        if (variantId === '' || !quantity) {
          console.error('Both a size and quantity are required.')
          resolve()
        }
        setState({ ...newState, adding: true })

        const { checkout, client } = newState
        const checkoutId = checkout.id
        const lineItemsToUpdate = [
          { variantId, quantity: parseInt(quantity, 10) },
        ]
        console.log('addVariantToCart checkout=', checkout)
        console.log('addVariantToCart lineItemsToUpdate=', lineItemsToUpdate)

        client.checkout
          .addLineItems(checkoutId, lineItemsToUpdate)
          .then(checkout => {
            console.log('addVariantToCart addLineItems checkout=', checkout)
            setState({
              ...newState,
              checkout,
              adding: false,
            })
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    removeLineItem: (client, checkoutID, lineItemID) => {
      console.log("removeLineItem state=",state)
      return client.checkout
        .removeLineItems(checkoutID, [lineItemID])
        .then(res => {
          setState({
            ...state,
            checkout: res,
          })
        })
    },
    updateLineItem: (client, checkoutID, lineItemID, quantity) => {
      console.log("updateLineItem state=",state)
      const lineItemsToUpdate = [
        { id: lineItemID, quantity: parseInt(quantity, 10) },
      ]

      return client.checkout
        .updateLineItems(checkoutID, lineItemsToUpdate)
        .then(res => {
          setState({
            ...state,
            checkout: res,
          })
        })
    },
  })

  /*
  function addVariantToCart(variantId, quantity) {
    console.log('addVariantToCart productVariant=', variantId)
    console.log('addVariantToCart quantity=', quantity)
    return new Promise((resolve, reject) => {
      if (variantId === '' || !quantity) {
        console.error('Both a size and quantity are required.')
        resolve()
      }
      setState({ ...state, adding: true })

      const { checkout, client } = state
      const checkoutId = checkout.id
      const lineItemsToUpdate = [
        { variantId, quantity: parseInt(quantity, 10) },
      ]
      console.log('addVariantToCart lineItemsToUpdate=', lineItemsToUpdate)

      client.checkout
        .addLineItems(checkoutId, lineItemsToUpdate)
        .then(checkout => {
          console.log('addVariantToCart addLineItems checkout=', checkout)
          setState({
            ...state,
            checkout,
            adding: false,
          })
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  function removeLineItem(client, checkoutID, lineItemID) {
    return client.checkout
      .removeLineItems(checkoutID, [lineItemID])
      .then(res => {
        setState({
          ...state,
          checkout: res,
        })
      })
  }
  function updateLineItem(client, checkoutID, lineItemID, quantity) {
    return client.checkout
      .removeLineItems(checkoutID, [lineItemID])
      .then(res => {
        setState({
          ...state,
          checkout: res,
        })
      })
  }
*/
  useEffect(() => {
    console.log('StoreProvider useEffect state=', state)

    initializeCheckout()
  }, [state.client.checkout])

  async function initializeCheckout() {
    // Check for an existing cart.
    console.log('initializeCheckout')
    const isBrowser = typeof window !== 'undefined'
    const existingCheckoutID = isBrowser
      ? localStorage.getItem('shopify_checkout_id')
      : null

    const setCheckoutInState = checkout => {
      if (isBrowser) {
        localStorage.setItem('shopify_checkout_id', checkout.id)
      }

      setState({
        ...state,
        checkout,
      })
    }

    const createNewCheckout = () => state.client.checkout.create()
    const fetchCheckout = id => state.client.checkout.fetch(id)

    if (existingCheckoutID) {
      try {
        const checkout = await fetchCheckout(existingCheckoutID)
        console.log("StoreContext initializeCheckout fetchCheckout checkout=",checkout)
        // Make sure this cart hasn’t already been purchased.
        if (!checkout.completedAt) {
          setCheckoutInState(checkout)
          return
        }
      } catch (e) {
        localStorage.setItem('shopify_checkout_id', null)
      }
    }

    const newCheckout = await createNewCheckout()
    setCheckoutInState(newCheckout)
  }

  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  )
}
