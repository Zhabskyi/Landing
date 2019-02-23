import React from 'react';

import './CountedBlock.scss';

const cointedDlock = (props) => {
	return (
		<div className={`${props.classes} counted-block`}>
			<h2 className='counted-block__number'>{props.number}</h2>
			<div className='counted-block__content'>
				<h4 className='counted-block__title'>{props.title}</h4>
				<p>{props.children}</p>
			</div>
		</div>
	)
}

export default cointedDlock;
