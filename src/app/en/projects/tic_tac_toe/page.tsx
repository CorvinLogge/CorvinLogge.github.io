'use client'

import style from "@/app/en/projects/projectpage.module.css"
import Board from "@/components/TicTacToe/board"
import TicTacToeArticle from "@/articles/en/tic_tac_toe.mdx"
import {Player} from "@/components/TicTacToe/player";
import {useState} from "react";

export default function Page() {
    const [player, setPlayer] = useState(Player.O)

    return (
        <>
            <div className={style.Article + " markdown-body"}>
                <TicTacToeArticle/>
            </div>

            <div className={style.Preview}>
                <Board player={player}/>
            </div>
        </>
    )
}