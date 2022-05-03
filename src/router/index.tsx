import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "../views/home";
import React from "react"

export default function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardHome/>}/>
            </Routes>
        </BrowserRouter>
    )
}