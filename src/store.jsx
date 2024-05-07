import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./productslice"
const store = configureStore({
    reducer: {
        "ecom": productSlice.reducer
    }
})

export default store