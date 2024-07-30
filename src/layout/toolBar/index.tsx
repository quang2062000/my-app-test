import React, { PropsWithChildren } from "react";
import { Toolbar } from "@mui/material";
import { styles } from "./styles";

export interface Props {
    openDrawer : ()=> void;
}

export default function ManagerToolbar (props: PropsWithChildren<Props>){
    const {openDrawer}= props;
    const classes = styles();
    return(
        <Toolbar>
            <div style={{display:"flex",justifyContent:"space-between",}}>
                <div style={{color: "blue",width:"100px"}}>Toolbar</div>
                <div style={{color: "blue",width:"100px"}}>Toolbar</div>
                <div style={{color: "blue",width:"100px"}}>Toolbar</div>
                <div style={{color: "blue",width:"100px"}}>Toolbar</div>
            </div>
        </Toolbar>
    )
}