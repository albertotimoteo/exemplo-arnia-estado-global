import { useContext } from "react"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"

const products: Array<ShoppingItem> = [
  { name: "Camiseta", price: 29.99, quantity: 5 },
  { name: "Calça Jeans", price: 79.99, quantity: 3 },
  { name: "Tênis", price: 99.99, quantity: 10 },
  { name: "Óculos de Sol", price: 49.99, quantity: 2 },
  { name: "Bolsa", price: 39.99, quantity: 7 },
  { name: "Relógio", price: 149.99, quantity: 1 },
  { name: "Cinto", price: 19.99, quantity: 4 },
  { name: "Boné", price: 24.99, quantity: 6 },
  { name: "Pulseira", price: 9.99, quantity: 9 },
  { name: "Chapéu", price: 34.99, quantity: 8 },
]

const ProductList = () => {
  const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext)

  return (
    <div>
      {products.map((product) => (
        <div>
          <p>
            {product.name} - R${product.price}
            Disponível: {product.quantity}
            <button onClick={() => setShoppingCart([...shoppingCart, product])}>
              Adicionar ao carrinho
            </button>
          </p>
        </div>
      ))}
    </div>
  )
}

export default ProductList
