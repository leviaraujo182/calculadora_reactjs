import React from 'react'
import './Button.css'

interface AppProps {
    func: React.MouseEventHandler<HTMLButtonElement>
}

function Button(props: AppProps) {
    return (
        <div>
            <button onClick={props.func}>+</button>
        </div>
    )
}

export default Button
