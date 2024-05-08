import {SidebarItem} from "@/app/Sidebar/SidebarItem";
import {Link, Outlet} from "react-router-dom";
import {Dispatch, SetStateAction, useState} from "react";
import "./sidebar.css";

interface Properties {
    collapsed?: boolean
    setCollapsed?: Dispatch<SetStateAction<boolean>>
}

export function Sidebar({setCollapsed, collapsed}: Properties) {

    return (
        <>
            <div
                className={"SidebarRoot " + (collapsed ? "" : "min-w-fit m-4")}>
                <div className="rounded-t-[0.5rem]">
                    <Link to="/home">
                        <h1 className="p-6 font-bold text-2xl">Portfolio</h1>
                    </Link>
                </div>
                <div className="px-6 overflow-y-scroll rounded-[0.5rem]">
                    <SidebarItem link="home">Home</SidebarItem>
                    <SidebarItem link="network">Network</SidebarItem>
                </div>
            </div>

            <Outlet/>
        </>
    )
}