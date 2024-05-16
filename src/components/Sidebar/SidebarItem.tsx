import React from "react";
import Link from "next/link";
import style from "./sidebar.module.css"

interface Properties {
    link?: string
    className?: string
    children: React.ReactNode
}

export function SidebarItem({link = "", className = "", children}: Properties) {
    return (
        <div className={className}>
            <Link href={link}>
                <div className={style.SidebarItem}>
                    {children}
                </div>
            </Link>
        </div>
    )
}