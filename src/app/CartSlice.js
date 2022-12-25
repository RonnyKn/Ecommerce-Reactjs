import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [], //cek ke localstorage dgn key cart? if true then json string convert to JS object : else leave it empty array.
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
          `${action.payload.title} Quantity increase by ${state.cartItems[itemIndex].cartQuantity}`
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
        (item) => item.id !== action.payload.id
      )
      state.cartItems = removeItem
      localStorage.setItem("cart", JSON.stringify(state.cartItems))

      toast.success(`${action.payload.title} removed from cart`)
    },
  },
})

export const { setOpenCart, setClosecart, setAddItems, setRemoveItems } =
  CartSlice.actions

export const selectCartState = (state) => state.cart.cartState

export const selectCartItems = (state) => state.cart.cartItems

export default CartSlice.reducer
