import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "../views/home";
import React from "react"
import DashboardNavbar from "../components/dash-nav-bar";
import ProfilePage from "../views/profile";
import { Box, BoxProps } from "@mui/material";

export default function AppRouter(){
    const boxProps:BoxProps = {display: 'flex', flexDirection: 'column', height: '100vh', maxHeight: '100vh'}
    return (
        <BrowserRouter>
            <Box {...boxProps}>
            <DashboardNavbar/>
                <Routes>
                    <Route path="/" element={<DashboardHome/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                </Routes>
            <footer>
                <Box sx={{textAlign:'center'}}>
                    Copyright Ligate llc
                </Box>
                
            </footer>
            </Box>
           
            
        </BrowserRouter>
    )
}