'use client'
import style from "@/app/en/projects/projectpage.module.css"
import Network from "@/components/Network/Network"
import NetworkArticle from "@/articles/en/network.mdx"

export default function Page() {
    return (
        <>
            <div className={style.Article + " markdown-body"}>
                <NetworkArticle/>
            </div>

            <div className={style.Preview}>
                <Network/>
            </div>
        </>
    )
}