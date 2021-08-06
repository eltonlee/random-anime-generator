import React from 'react'

export default function Title(props) {
    return (
        <div>
            <h1
                className='title'>
                <u>{props.name}</u>
            </h1>
        </div>
    )
}
