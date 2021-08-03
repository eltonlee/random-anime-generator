import React from 'react';
import ReactLoading from 'react-loading';

const LoadingEffect = ({ type, color }) => (

	<ReactLoading className='LoadingEffect' type={'spin'} color={color} height={'10%'} width={'10%'} />
);

export default LoadingEffect;