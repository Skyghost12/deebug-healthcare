import { createContext, useContext, useState } from "react";

const CartContext = createContext(null)

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    function addToCart(product) {
        setCartItems((prev) => {

            const existing = prev.find((item) => item.id === product.id)

            if (existing){
                return prev.map((item) => 
                item.id === product.id
                ? { ...item, quantity: item.quantity + 1}
                : item
                )
            }


            return [...prev, { ...product, quantity: 1}]
        })
    }

    function removeFromCart(productId) {
        setCartItems((prev) => prev.filter((item) => item.id !== productId))
    }

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  )

}

export function useCart() {
  return useContext(CartContext)
}