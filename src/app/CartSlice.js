import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartState: false,
  cartItems: [], //db array
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
      } else {
        const temp = { ...action.payload, cartQuantity: 1 } //else semua data + Qty set 1
        state.cartItems.push(temp) //masukan ke array
      }
    },
  },
})

export const { setOpenCart, setClosecart, setAddItems } = CartSlice.actions

export const selectCartState = (state) => state.cart.cartState

export const selectCartItems = (state) => state.cart.cartItems

export default CartSlice.reducer
