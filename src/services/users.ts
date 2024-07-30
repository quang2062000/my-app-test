// src/api/userApi.ts

import { ApiRoutesEnum } from "../enum/routers";
import { ParamsUser, User } from "../types/users";
import axios from "./axios";

// Ví dụ về một API endpoint
function getAllUser(){
    return axios.get('/users');
}

function getUserById(id: string){
    return axios.get(`${ApiRoutesEnum.Users}${id}`);
}

function addUser(params: ParamsUser){
    return axios.post(ApiRoutesEnum.Users, params)
}

function deleteUser(id: number){
    return axios.delete(`${ApiRoutesEnum.Users}${id}`)
}

function updateUser(params:User ){
    return axios.put(`${ApiRoutesEnum.Users}${params.id}`, params)
}

const usersService = {
    getAllUser,
    getUserById,
    addUser,
    deleteUser,
    updateUser
}

export default usersService;