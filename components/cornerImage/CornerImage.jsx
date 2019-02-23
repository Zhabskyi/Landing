import React from 'react';

import './CornerImage.scss'

const CornerImage = (props) => {
	return (
		<div className={`${props.classes} corner-image`}>
			{props.children}
		</div>
	)
}

export default CornerImage;
