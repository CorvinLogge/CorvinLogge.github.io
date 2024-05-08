import React, {Fragment, useState} from "react";

interface Properties {
    className?: string
    guess?: number
}

export default function Result({className = "", guess}: Properties) {

    return (
        <div className={className}>
            <p className="text-2xl px-4 relative top-1/2 -translate-y-1/2"> Result: {guess?.toString()}</p>
        </div>
    )
}