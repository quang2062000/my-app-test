import React, { useCallback, useMemo, useState } from "react";
import { User } from "../../types/users";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addUserAction, deleteUserAction, getAllUserAction, updateUserAction } from "../../store/action/userAction";

export interface UsersContainerProps {
    users: User[];
    loading: boolean;
    error: string | null;
}

export default function UserComponent(props: UsersContainerProps){
    const {users} = props;
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [textSearch,setTextSearch] = useState("");
    const [id,setId] = useState(0);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddUser = useCallback(()=>{
        dispatch(addUserAction({name,email}))
        dispatch(getAllUserAction());
    },[addUserAction,name,email,getAllUserAction,dispatch])

    const handlePush = useCallback((name:string,email:string,id: number)=>{
        setEmail(email);
        setName(name);
        setId(id);
    },[])

    const listUser = useMemo(()=>{
        return users.map((i,key)=>{
            return (
                <div>
                    <ul onClick={()=>setId(i.id)} key={key} style={{listStyle:"none", display:"flex",justifyContent:"center"}}>
                    <li style={{margin:"0 20px"}}>{i.id}</li>
                    <li style={{margin:"0 20px"}}>{i.name}</li>
                    <li style={{margin:"0 20px"}}>{i.email}</li>
                <button onClick={()=>handlePush(i.name,i.email,i.id)}>push</button>
                </ul>
                </div>
            )
        })
    },[users,setId,handlePush])

    const handleUpdate = useCallback(()=>{
        const params = {
            name: name,
            email:email,
            id: id
        }
        dispatch(updateUserAction(params))
    },[dispatch,name,email,id])

    const handleDelete = useCallback((id:number)=>{        
        dispatch(deleteUserAction(id))
        dispatch(getAllUserAction());
    },[id,getAllUserAction,deleteUserAction,dispatch])


    return(
        <div>
            search by name: <input type="text" value={textSearch} onChange={(e)=>{setTextSearch(e.target.value)} }/>
            Name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)} }/>
            Email: <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)} }/>
            {listUser}
            <button onClick={handleAddUser}>add</button>
            <button onClick={()=>handleDelete(id)}>delete</button>
            <button onClick={()=>handleUpdate()}>update</button>
        </div>
    )
}