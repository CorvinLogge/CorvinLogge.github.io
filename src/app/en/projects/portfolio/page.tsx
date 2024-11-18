import style from "@/app/en/projects/projectpage.module.css";
import Article from "@/articles/en/portfolio.mdx";

export default function PortfolioPage () {
    return (
        <>
            <div className={style.Article + " markdown-body"}>
                <Article/>
            </div>
        </>
    )
}