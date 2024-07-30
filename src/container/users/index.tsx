import React, { useCallback, useEffect, useState } from "react";
import UserComponent from "../../component/users";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addUserAction, getAllUserAction } from "../../store/action/userAction";
import { userSelector } from "../../store/selector";

export default function UserContainer(){
    const dispatch = useDispatch<AppDispatch>();
    const {error,loading,users} = useSelector(userSelector);

    
    useEffect(()=>{
        dispatch(getAllUserAction());
    },[dispatch])


    return (
        <div>
            <UserComponent
            users={users}
            error={error}
            loading = {loading}
            />
        </div>
    )
}