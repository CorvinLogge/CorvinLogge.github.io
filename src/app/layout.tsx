"use client";
import "./globals.css";
import React, {useState} from "react";
import {Sidebar} from "./Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@/app/Home/Home";
import Network from "@/app/NeuralNetwork/Network";
import ContentContainer from "@/app/ContentContainer/ContentContainer";

function RootLayout({
                        children,
                    }: Readonly<{
    children: React.ReactNode;
}>) {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <html lang="en">
        <body>
        <div className="h-screen flex flex-row justify-between">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Sidebar setCollapsed={setCollapsed} collapsed={collapsed}/>}>
                        <Route path="home" element={<Home/>}/>
                        <Route path="network" element={<Network setCollapsed={setCollapsed} collapsed={collapsed}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
        </body>
        </html>
    );
}

export default RootLayout;