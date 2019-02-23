import React from 'react';
import './Button.scss';

const Button = (props) => (
	<button
	 	disabled={props.disabled}
		className="button"
		onClick={props.onClick}>
		<span>{props.children}</span>
	</button>
);

export default Button;
