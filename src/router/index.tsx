import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "../views/home";
import React from "react"
import DashboardNavbar from "../components/dash-nav-bar";

export default function AppRouter(){
    return (
        <BrowserRouter>
            <DashboardNavbar/>
            <Routes>
                <Route path="/" element={<DashboardHome/>}/>
            </Routes>
        </BrowserRouter>
    )
}