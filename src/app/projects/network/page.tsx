'use client'
import style from "@/app/projects/projectpage.module.css"
import Network from "@/components/Network/Network"
import Article from "@/articles/network.mdx"

export default function Page() {
    return (
        <>
            <div className={style.Article + " markdown-body"}>
                <Article/>
            </div>

            <div className={style.Preview}>
                <Network/>
            </div>
        </>
    )
}