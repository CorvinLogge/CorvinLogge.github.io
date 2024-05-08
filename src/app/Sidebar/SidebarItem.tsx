import React from "react";
import {Link} from "react-router-dom";

interface Properties {
    link?: string
    className?: string
    children: React.ReactNode
}

export function SidebarItem({link = "", className = "", children}: Properties) {
    return (
        <Link to={link}>
            <div className="SidebarItem">
                {children}
            </div>
        </Link>
    )
}