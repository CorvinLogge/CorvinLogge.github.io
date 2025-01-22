import {Player} from "@/components/TicTacToe/player";

interface Properties {
    player: Player
}

export default function FieldContent({player}: Properties) {
    if (player == Player.O) {
        return (
            <>
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="4"/>
                </svg>
            </>
        )
    } else if (player == Player.X) {
        return (
            <>
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="4"/>
                </svg>
            </>
        )
    } else return (
        <>
        </>
    )
}