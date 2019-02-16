import React from 'react';

const button = (props) => (
	<button
	 	disabled={props.disabled}
		className="Button"
		onClick={props.clicked}>{props.children}

	<style jsx>{`
			.Button {
				color: white;
				background-color: #f08663;
				padding: 0;
				font-family: 'bebas', sans-serif;
				font-size: 28px;
				font-weight: 400;
				border-radius: 8px;
				border: 2px solid transparent;
				text-align: center;
				align-items: center;
				justify-content: center;
				padding-top: 12px;
				padding-bottom: 8px;
				padding-left: 50px;
				padding-right: 50px;
				transition: .15s ease-in-out;
			}
			.Button:hover {
				box-shadow: 0px 0px 25px #818a91;
			}
			
		`}</style>

	</button>
);

export default button;