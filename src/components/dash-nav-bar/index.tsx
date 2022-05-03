import { Box, ButtonBase, Paper, PaperProps, Toolbar, ToolbarProps } from "@mui/material";
import { BoxProps } from "@mui/system";
import React from "react";
import Logo from "./logo";
import NavLinks from "./nav-links";
export default function DashboardNavbar(){
    // const tProps:ToolbarProps = {sx:{bgcolor: 'gray', justifyContent: 'space-between'}}
    const pProps:BoxProps = {sx: {px: 5, minHeight: "64px", display: 'flex', bgcolor: 'lightgray', justifyContent: 'space-between', alignItems: 'center'}}
    return (
        <Box {...pProps}>
            <Logo/>
            <NavLinks/>
            <ButtonBase>
                Hi
            </ButtonBase>
        </Box>
    )
}