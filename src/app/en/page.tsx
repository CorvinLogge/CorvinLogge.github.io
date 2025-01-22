import style from "@/app/en/projects/projectpage.module.css"
import AboutMeRight from "@/articles/en/about_right.mdx"
import AboutMeLeft from "@/articles/en/about_left.mdx"

export default function HomePage() {
    return (
        <>
            <div className={style.Article + " markdown-body"}>
                <AboutMeLeft/>
            </div>
            <div className={style.Article + " markdown-body"}>
                <AboutMeRight/>
            </div>
        </>
    )
}