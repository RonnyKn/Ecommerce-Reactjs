import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [], //cek ke localstorage dgn key cart? if true then json string convert to JS object : else leave it empty array.
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
}

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState
    },
    setClosecart: (state, action) => {
      state.cartState = action.payload.cartState
    },
    setAddItems: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id //ada yg sama or not
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1 //cek jika ada yg sama Qty jd +1
        toast.success(
          `${action.payload.title} Quantity increase to ${state.cartItems[itemIndex].cartQuantity}`
        )
      } else {
        const temp = { ...action.payload, cartQuantity: 1 } //else semua data + Qty set 1
        state.cartItems.push(temp) //masukan ke array
        toast.success(`${action.payload.title} added to cart`)
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems)) //set localstorage dgn key cart then convert JS ke JSON string
    },
    setRemoveItems: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => action.payload.id !== item.id
      )
      state.cartItems = removeItem
      localStorage.setItem("cart", JSON.stringify(state.cartItems))

      toast.success(`${action.payload.title} removed from cart`)
    },
    setIncreaseQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id //ada yg sama or not
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1 //cek jika ada yg sama Qty jd +1
        toast.success(
          `Quantity increase to ${state.cartItems[itemIndex].cartQuantity}`
        )
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    setDecreaseQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
        toast.success(
          `Quantity decrease to ${state.cartItems[itemIndex].cartQuantity}`
        )
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    setClearCart: (state, action) => {
      state.cartItems = []
      toast.success(`Cart cleared successfully`)
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    setGetTotal: (state, action) => {
      let { totalAmount, totalQty } = state.cartItems.reduce(
        //use reduce to take subTotal from array cartItems
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem //destructure cartItem
          const totalPrice = price * cartQuantity

          cartTotal.totalAmount += totalPrice
          cartTotal.totalQty += cartQuantity

          return cartTotal
        },
        {
          //object ke 2 declare initial  value
          totalAmount: 0,
          totalQty: 0,
        }
        //reduce array method bisa return 2 object
      )
      state.cartTotalAmount = totalAmount
      state.cartTotalQuantity = totalQty
    },
  },
})

export const {
  setOpenCart,
  setClosecart,
  setAddItems,
  setRemoveItems,
  setIncreaseQty,
  setDecreaseQty,
  setClearCart,
  setGetTotal,
} = CartSlice.actions

export const selectCartState = (state) => state.cart.cartState

export const selectCartItems = (state) => state.cart.cartItems

export const selectTotalAmount = (state) => state.cart.cartTotalAmount
export const selectTotalQty = (state) => state.cart.cartTotalQuantity

export default CartSlice.reducer
