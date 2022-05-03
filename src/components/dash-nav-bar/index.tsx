import { ButtonBase, Toolbar, ToolbarProps } from "@mui/material";
import React from "react";
import Logo from "./logo";
export default function DashboardNavbar(){
    const tProps:ToolbarProps = {sx:{bgcolor: 'gray', justifyContent: 'space-between'}}
    return (
        <Toolbar {...tProps}>
            <Logo/>
            <ButtonBase>
                hi
            </ButtonBase>
            <ButtonBase>
                Hi
            </ButtonBase>
        </Toolbar>
    )
}