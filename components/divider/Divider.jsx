import React from 'react';

import './Divider.scss';

const Divider = (props) => {
	return (
		<div className='divider'><span className={`divider__${props.color}`}></span></div>
	)
}

export default Divider;
