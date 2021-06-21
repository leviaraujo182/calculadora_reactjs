import React from 'react'
import './Text.css'

interface AppProps {
    text: string;
    id?: string
}

function Text(props: AppProps) {
    return (
        <div>
            <h2 id={props.id}>{props.text}</h2>
        </div>
    )
}

export default Text
