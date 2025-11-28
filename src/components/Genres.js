import React from 'react'

export default function Genres(props) {
    const genres = props.genres || [];

    if (genres.length === 0) {
        return null;
    }

    return (
        <div className='genres-container'>
            {genres.map((genre, index) => (
                <span key={index} className='genre-tag'>
                    {genre.name}
                </span>
            ))}
        </div>
    )
}
