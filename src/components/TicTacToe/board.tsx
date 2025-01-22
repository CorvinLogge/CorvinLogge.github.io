import {Player} from "./player"
import Field from "./field"

interface Properties {
    player: Player
}

export default function Board({player}: Properties) {

    return (
        <>
            <Field _player={player}/>
        </>
    )
}