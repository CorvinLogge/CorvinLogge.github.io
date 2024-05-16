import React from "react";

interface Properties {
    className?: string
    guess?: number
}

export default function Result({className = "", guess}: Properties) {

    return (
        <div className={className}>
            <p> Result: {guess?.toString()}</p>
        </div>
    )
}