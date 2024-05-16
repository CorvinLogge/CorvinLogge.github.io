import React from "react";
import {Sidebar} from "@/components/Sidebar/Sidebar";
import "github-markdown-css/github-markdown-light.css"
import "highlight.js/styles/github.css"
import "@/global.css"
import {Raleway} from "next/font/google"

const inter = Raleway({subsets: ["latin"]})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={inter.className}>
        <head>
            <title>Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
        <div>
        <Sidebar/>
            {children}
        </div>
        </body>
        </html>
    )
}