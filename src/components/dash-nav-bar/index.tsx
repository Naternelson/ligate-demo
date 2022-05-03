import { Box} from "@mui/material";
import { BoxProps } from "@mui/system";
import React from "react";
import Logo from "./logo";
import NavLinks from "./nav-links";
import UserBar from "./user-bar";
export default function DashboardNavbar(){
    const pProps:BoxProps = {sx: {px: 5, minHeight: "64px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: 1, borderColor: 'primary.light'}}
    return (
        <Box {...pProps}>
            <Logo/>
            <NavLinks/>
            <UserBar/>
        </Box>
    )
}