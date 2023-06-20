import { useState } from "react"
import { ShoppingCartContext } from "./context/ShoppingCartContext"
import ProductList from "./components/ProductList"
import ShowCart from "./components/ShowCart"

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>([])

  return (
    <ShoppingCartContext.Provider value={[shoppingCart, setShoppingCart]}>
      <ProductList />
      <ShowCart />
    </ShoppingCartContext.Provider>
  )
}

export default App
