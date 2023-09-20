import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./Reducers/RootReducer"

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
})

export default store