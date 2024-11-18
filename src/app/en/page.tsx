import style from "@/app/en/projects/projectpage.module.css"
import AboutMe from "@/articles/en/about.mdx"

export default function HomePage() {
    return (
        <div className={style.Article + " markdown-body"}>
            <AboutMe/>
        </div>
    )
}