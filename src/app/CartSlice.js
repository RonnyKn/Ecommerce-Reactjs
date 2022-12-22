import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartState: false,
}

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (action, state) => {},
    setClosecart: (action, state) => {},
  },
})

export const { setOpenCart, setClosecart } = CartSlice.actions

export default CartSlice.reducer
