import React from 'react'

export default function MetadataBar(props) {
    const type = props.type || 'N/A';
    const year = props.year || 'N/A';
    const rating = props.rating || 'N/A';
    const duration = props.duration || 'N/A';

    return (
        <div className='metadata-container'>
            <div className='metadata-item'>
                <span className='metadata-label'>Type</span>
                <span className='metadata-value'>{type}</span>
            </div>

            <div className='metadata-item'>
                <span className='metadata-label'>Year</span>
                <span className='metadata-value'>{year}</span>
            </div>

            <div className='metadata-item'>
                <span className='metadata-label'>Rating</span>
                <span className='metadata-value'>{rating}</span>
            </div>

            <div className='metadata-item'>
                <span className='metadata-label'>Duration</span>
                <span className='metadata-value'>{duration}</span>
            </div>
        </div>
    )
}
