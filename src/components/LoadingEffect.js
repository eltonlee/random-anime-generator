import React from 'react';
import ReactLoading from 'react-loading';

const LoadingEffect = ({ type, color }) => (
	<div className='LoadingEffect'>
		<ReactLoading type={'spin'} color={'#ffffff'} height={'10%'} width={'10%'} />
	</div>
);

export default LoadingEffect;