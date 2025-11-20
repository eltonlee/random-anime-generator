import React from 'react'

export default function InfoBar(props) {
    return (
        <React.Fragment>

        <div className='container'>

            <div className='InfoBarAir'>
                Airing:&nbsp;
                {props.airing || 'N/A'}
            </div>

            <div className='InfoBarScore'>
                Avg. Score:&nbsp;
                {props.score || 'N/A'}
            </div>

            <div className='InfoBarEpisode'>
                Episodes:&nbsp;
                {props.numEp || 'N/A'}
            </div>

        </div>

        </React.Fragment >
    )
}
