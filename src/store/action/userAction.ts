import { createAsyncThunk } from "@reduxjs/toolkit";
import usersService from "../../services/users"
import { ParamsUser, User } from "../../types/users";

export const getAllUserAction = createAsyncThunk('users/getAllUserAction', async () => {    
    const res = await usersService.getAllUser();    
    return res.data
});

export const addUserAction = createAsyncThunk('users/addUserAction', async(params: ParamsUser)=>{
    await usersService.addUser(params)
})

export const deleteUserAction = createAsyncThunk('users/deleteUserAction', async(id:number)=>{
    await usersService.deleteUser(id)
})

export const updateUserAction = createAsyncThunk('users/updateUserAction', async(params: User)=>{
    await usersService.updateUser(params)
})