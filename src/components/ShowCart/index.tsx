import { useContext } from "react"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"

const ShowCart = () => {
  const [shoppingCart] = useContext(ShoppingCartContext)

  return (
    <div>
      <p>Seu carrinho: </p>
      {shoppingCart.map(({ name }) => (
        <div>
          <p>{name}</p>
        </div>
      ))}
    </div>
  )
}

export default ShowCart
