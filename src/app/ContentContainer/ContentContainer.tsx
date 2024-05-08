import React from "react";

interface Properties {
    children?: React.ReactNode
}

export default function ContentContainer ({children} : Properties) {
    return(
        <div>
            {children}
        </div>
    )
}