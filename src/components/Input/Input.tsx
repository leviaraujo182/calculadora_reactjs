import React from 'react'
import './Input.css'

interface AppPropsInput {
    id: string
}

function Input(props: AppPropsInput) {
    return (
        <div>
            <input type="number" id={props.id}/>
        </div>
    )
}

export default Input
