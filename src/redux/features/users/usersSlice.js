import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const URL = 'https://randomuser.me/api/'

const initialState = {
    users:[{id:'1',firstName:'nahom',lastName:'zerihun'},{id:'2',firstName:'yordanos',lastName:'zerihun'}],
    isLoading:false,
    error:null
}
export const getUsers = createAsyncThunk("users/getUsers",async(_,thunkAPI)=>{
    try {
        const res = await axios.get(URL)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error); 
    }
    
})

const usersSlice = createSlice({
    name:'users',
    initialState,
    // extraReducers:{
    //     [getUsers.pending]:(state)=>{
    //         state.isLoading = true
    //     },
    //     [getUsers.fulfilled]:(state,action)=>{
    //         state.isLoading = false
    //         state.users = action.payload.results
    //     },
    //     [getUsers.rejected]:(state,action)=>{
    //         console.log(action)
    //         state.isLoading = false
    //         state.error = action.payload
    //     },
        
    // }
    extraReducers:(builder)=>{
        builder
        .addCase(getUsers.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getUsers.fulfilled,(state,action)=>{
            state.isLoading = false
            state.users = action.payload.results
        })
        .addCase(getUsers.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })

    }

})
export default usersSlice.reducer