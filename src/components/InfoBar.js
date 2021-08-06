import React from 'react'

export default function InfoBar(props) {
    return (
        <React.Fragment>

        <div className='InfoBar1'>
            Avg. Score:&nbsp;
            {props.score}
        </div>

        <div clasName='InfoBar2'>
            
            {props.numEps}

        </div>
        </React.Fragment >
    )
}
