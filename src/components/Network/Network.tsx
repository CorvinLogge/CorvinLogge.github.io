'use client'
import Canvas from "@/components/Network/Canvas";
import GuessButton from "@/components/Network/GuessButton";
import ClearButton from "@/components/Network/ClearButton";
import Result from "@/components/Network/Result";
import {useState} from "react";
import style from "./network.module.css"

export default function Network() {

    const [guess, setGuess] = useState(-1)

    return (
        <div>
            <div className={style.CanvasContainer}>
                <Canvas className={style.Canvas} width={600} height={600}/>
                <div className={style.ButtonContainer}>
                    <GuessButton className={style.Button} setResult={setGuess}/>
                    <Result guess={guess}/>
                    <ClearButton className={style.Button}/>
                </div>
            </div>
        </div>
    )
}