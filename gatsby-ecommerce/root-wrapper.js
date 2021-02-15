import React from "react"

import { ProductsProvider } from "./src/context/products_context";

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <ProductsProvider>{element}</ProductsProvider>
    </>
  )
}
