import AppBar from "@mui/material/AppBar";
import React, { PropsWithChildren } from "react";

export interface Props {}

export default function AppBarComponent (props : PropsWithChildren<Props>){
    const {children} = props;
    return(
        <AppBar>
            {children}
        </AppBar>
    )

}