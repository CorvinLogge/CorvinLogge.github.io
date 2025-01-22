import CouponArticle from "@/articles/en/coupon_codes.mdx"
import Coupons from "@/components/Coupons/Coupons"
import style from "@/app/en/projects/projectpage.module.css"

export default function Page() {
    return (
        <>
            <div className={style.Article + " markdown-body"}>
                <CouponArticle/>
            </div>

            <div className={style.Preview}>
                <Coupons/>
            </div>
        </>
    );
}