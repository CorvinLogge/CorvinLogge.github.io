import React from "react";
import style from "@/app/projects/projectpage.module.css";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={style.ProjectPageContainer}>
            <input type="checkbox" id="preview-checkbox" className={style.previewCheckbox} defaultChecked={true}/>
            <label htmlFor="preview-checkbox" className={style.previewButton}/>

            <div className={style.ProjectPageRoot}>
                {children}
            </div>
        </div>
    )
}