import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState:{
        query:"",
        activeTab: "Photos",
        result:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery:(state, action)=>{
            state.query = action.payload
        },
        setActiveTab:(state,action)=>{
            state.activeTab = action.payload
        },
        setResult:(state,action)=>{
            state.result= action.payload
            state.loading =false
        },
        setLoading:(state, action)=>{
            state.loading = true
            state.error = null
        },
        setError:(state, action)=>{
            state.error = action.payload
            state.loading = false
        },
        clearResult:(state)=>{
            state.result = []
        }
    }
})
export const {setQuery,setResult, setActiveTab,setError,setLoading, clearResult} = searchSlice.actions
export default searchSlice.reducer