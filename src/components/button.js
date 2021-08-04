import React from 'react'

export default function Button(props) {
    return (
        <div className='btn'>
            <button 
                className='btn'
                onClick={props.func}
                >Randomize
            </button>
        </div>
    )
}
