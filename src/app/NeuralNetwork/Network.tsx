import Canvas from "@/app/NeuralNetwork/Canvas";
import GuessButton from "@/app/NeuralNetwork/GuessButton";
import ClearButton from "@/app/NeuralNetwork/ClearButton";
import Result from "@/app/NeuralNetwork/Result";
import {Dispatch, SetStateAction, useState} from "react";

interface Properties {
    collapsed?: boolean
    setCollapsed?: Dispatch<SetStateAction<boolean>>
}

export default function Network({setCollapsed, collapsed}: Properties) {

    const [guess, setGuess] = useState(-1)

    return (
        <div className="m-4 w-full bg-gray-200 rounded-[0.5rem] overflow-scroll">

            <div className="w-fit h-fit">
                <button className=""
                        onClick={() => setCollapsed ? (collapsed ? setCollapsed(false) : setCollapsed(true)) : null}>
                    w
                </button>
            </div>

            <div className="relative w-fit left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <Canvas className="bg-black" width={600} height={600}/>
                <div className="flex flex-row justify-between mt-2">
                    <GuessButton setResult={setGuess}/>
                    <Result
                        className="rounded-lg bg-rose-700 font-light text-sm uppercase text-gray-100 shadow-pink-500/20"
                        guess={guess}/>
                    <ClearButton/>
                </div>
            </div>
        </div>
    )
}