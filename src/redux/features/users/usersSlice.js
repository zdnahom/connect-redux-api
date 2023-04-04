import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[{id:'1',firstName:'nahom',lastName:'zerihun'},{id:'2',firstName:'yordanos',lastName:'zerihun'}],
    isLoading:false,
    error:null
}

const usersSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:{

    }
})
export default usersSlice.reducer