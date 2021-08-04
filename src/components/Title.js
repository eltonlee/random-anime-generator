import React from 'react'

export default function Title(props) {
    return (
        <div>
            <h1
                className='title'>
                {props.name}
            </h1>
        </div>
    )
}
