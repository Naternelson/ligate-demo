import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "../views/home";
import React from "react"
import DashboardNavbar from "../components/dash-nav-bar";
import ProfilePage from "../views/profile";
import { Box, BoxProps } from "@mui/material";
import ReportsView from "../views/reports";
import SplashPage from "../views/splash";

export default function AppRouter(){
    const boxProps:BoxProps = {display: 'flex', flexDirection: 'column', height: '100vh', maxHeight: '100vh'}
    return (
        <BrowserRouter>
            <Box {...boxProps}>
            <DashboardNavbar/>
                <Routes>
                    <Route path="/" element={<DashboardHome/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/reports" element={<ReportsView/>}/>
                    <Route path="/splash" element={<SplashPage/>}/>
                </Routes>
            </Box>
           
            
        </BrowserRouter>
    )
}