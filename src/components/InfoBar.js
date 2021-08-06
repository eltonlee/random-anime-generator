import React from 'react'

export default function InfoBar(props) {
    return (
        <React.Fragment>

        <div className='container'>

            <div className='InfoBarAir'>
                Airing:&nbsp;
                {props.airing.toString()}
            </div>

            <div className='InfoBarScore'>
                Avg. Score:&nbsp; 
                {props.score}
            </div>

            <div className='InfoBarEpisode'>
                Episodes:&nbsp;
                {props.numEp}
            </div>
            
        </div>

        </React.Fragment >
    )
}
