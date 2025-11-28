import React from 'react'

export default function Synopsis(props) {
    const synopsis = props.synopsis;

    if (!synopsis) {
        return null;
    }

    return (
        <div className='synopsis-container'>
            <h3 className='synopsis-title'>Synopsis</h3>
            <p className='synopsis-text'>
                {synopsis}
            </p>
        </div>
    )
}
