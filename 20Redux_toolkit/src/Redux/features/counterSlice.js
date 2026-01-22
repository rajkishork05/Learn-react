import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            if(state.value>0){
                state.value -= 1
            }
        },
        reset:(state)=>{
            state.value = 0
        },
        scaleBy:(state, actions)=>{
            state.value += actions.payload 
        }
    }
})

export const {increment, decrement, reset, scaleBy} = counterSlice.actions
export default counterSlice.reducer