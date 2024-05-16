import style from "@/app/projects/projectpage.module.css";
import Article from "@/articles/portfolio.mdx";

export default function PortfolioPage () {
    return (
        <>
            <div className={style.Article + " markdown-body"}>
                <Article/>
            </div>

            <div className={style.Preview}>
                <p> The demonstration is not necessary since this is that website </p>
            </div>
        </>
    )
}