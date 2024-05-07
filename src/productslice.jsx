import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    items: [],
    paginate: {
        firstItemId: 1,
        lastItemId: 10,
    },
    category: "all",
    showModal: false
}

const productSlice = createSlice({

    initialState: initialState,
    name: "ecom",
    reducers: {
        addItems(state, action){
            state.items = action.payload.products
        },
        paginateIncrease(state){

            if(state.paginate.lastItemId < state.items.length - 10){

                const firstItemId = state.paginate.firstItemId + 10
                const lastItemId = state.paginate.lastItemId+ 10
    
                state.paginate = {firstItemId: firstItemId, lastItemId: lastItemId}
    
            }

 
        },
        paginateDecrease(state){

            if(state.paginate.firstItemId >10){
                const firstItemId = state.paginate.firstItemId - 10
                const lastItemId = state.paginate.lastItemId - 10
                state.paginate = {firstItemId: firstItemId, lastItemId: lastItemId}
            }


            
        },
        addCategory(state,action){
            state.category = action.payload.category
        },
        showModal(state, action){
            state.showModal = action.payload.status
        }

    }   

}
)

export default productSlice

export const productActions = productSlice.actions