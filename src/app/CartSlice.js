import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartState: false,
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
  },
})

export const { setOpenCart, setClosecart } = CartSlice.actions

export default CartSlice.reducer