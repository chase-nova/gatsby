// import axios from "axios"
// import tag from "graphql-tag"
// import fs from "fs"
// import downloadImage from "./utils/downloadImage"
//import Amplify, { API, graphqlOperation } from "aws-amplify"
const Amplify = require("aws-amplify").Amplify
const API = require("aws-amplify").API
const graphqlOperation = require("aws-amplify").graphqlOperation
//import getInventory from "./providers/inventoryProvider.js"
//import { slugify } from "./utils/helpers"

//import config from "./src/aws-exports"
const config = require("./aws-exports")
console.log(config)
console.log("Amplify.configure=",Amplify.configure)
Amplify.configure(config)

async function fetchInventory() {
  /* new */
  const listProductsQuery = `
    query listProducts {
      listProducts(limit: 500) {
        items {
          id
          categories
          price
          name
          image
          description
          currentInventory
          brand
        }
      }
    }
  `
  const gqlData = await API.graphql(graphqlOperation(listProductsQuery))
  console.log(gqlData)
  //let inventory = gqlData.data.data.listProducts.items

  // if (!fs.existsSync(`${__dirname}/public/downloads`)) {
  //   fs.mkdirSync(`${__dirname}/public/downloads`)
  // }

  // await Promise.all(
  //   inventory.map(async (item, index) => {
  //     try {
  //       const relativeUrl = `../downloads/${item.image}`
  //       if (!fs.existsSync(`${__dirname}/public/downloads/${item.image}`)) {
  //         const image = await Storage.get(item.image)
  //         await downloadImage(image)
  //       }
  //       inventory[index].image = relativeUrl
  //     } catch (err) {
  //       console.log("error downloading image: ", err)
  //     }
  //   })
  // )
  return gqlData
}
fetchInventory()
