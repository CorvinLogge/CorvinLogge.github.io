import style from "./coupons.module.css"

export default function Coupons() {
    return (
        <>
            <div>
                <label>Number of codes to generate</label><br/>
                <input id="num_codes" className={style.Textbox}></input><br/>

                <label>Length</label><br/>
                <input id="length" className={style.Textbox}></input><br/>

                <label>Alphabet</label><br/>
                <input id="alphabet" className={style.Textbox}></input><br/>

                <button>Generate</button><br/>
                <label>Your ID:</label><br/>
                <text id="id.id"></text>
            </div>
        </>
    );
}