import React from 'react';
import './Button.scss';

const Button = (props) => (
	<button
	 	disabled={props.disabled}
		className="button"
		onClick={props.onClick}>
		{props.children}
	</button>
);

export default Button;
