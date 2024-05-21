import React from "react";
import {Sidebar} from "@/components/Sidebar/Sidebar";
import "github-markdown-css/github-markdown-light.css"
import "highlight.js/styles/github.css"
import "@/global.css"
import {Raleway} from "next/font/google"
import {Metadata, Viewport} from "next";

const inter = Raleway({subsets: ["latin"]})

export const metadata: Metadata = {
    title: 'Portfolio',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={inter.className}>
        <body>
        <div>
            <Sidebar/>
            {children}
        </div>
        </body>
        </html>
    )
}