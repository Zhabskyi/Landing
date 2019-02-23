import React from 'react';

import './Label.scss';


const Label = (props) => {
		return <div className={`${props.classes} label`}>
				<span className='label__title'>
					{props.title}
				</span>
				{
					props.content ? <div className='label__content'><span>{props.content}</span></div> : null
				}
			</div>
	}

export default Label;