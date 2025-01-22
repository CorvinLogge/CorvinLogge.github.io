'use client'

import {Player} from "@/components/TicTacToe/player";
import {useState} from "react";
import FieldContent from "./field_content"
import styles from "./tic_tac_toe.module.css"

interface Properties {
    _player: Player
}

export default function Field({_player}: Properties) {
    const [player, setPlayer] = useState(Player.None);

    function click() {
        setPlayer(_player)
    }

    return (
        <>
            <button className={styles.TTTField} onClick={click}>
                <FieldContent player={player}/>
            </button>
        </>
    )
}

