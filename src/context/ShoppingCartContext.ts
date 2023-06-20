import { Dispatch, SetStateAction, createContext } from "react"

type ShoppingCartContextType = [
  ShoppingCart, //estado
  Dispatch<SetStateAction<ShoppingCart>> // função que modifica o estado
]

export const ShoppingCartContext = createContext<ShoppingCartContextType>([
  [],
  () => ({}),
])
