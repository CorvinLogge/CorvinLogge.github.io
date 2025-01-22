import React from "react";
import style from "@/app/en/projects/projectpage.module.css";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={style.ProjectPageContainer}>
            <div className={style.ProjectPageRoot}>
                {children}
            </div>
        </div>
    )
}