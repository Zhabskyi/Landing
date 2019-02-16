import React, { Component } from 'react'


export class Label extends Component {

	
	render() {
		let myClass;
		if (!this.props.content) {
			myClass='Content';
		}
		return (
			<div className='Container'>
				<span>
					{this.props.head}
				</span>
				<div className={myClass}>
					<span>
						{this.props.content}
					</span>
				</div>

				<style jsx>{`
					div > * {
						margin: 0 15px;
					}
					.Container {
						width: 200px;
						height: 200px;
						border-radius: 50%;
						position: relative;
						z-index: 3;
						box-shadow: 0px 11px 85px rgba(0, 0, 0, 0.5);
						background-color: #f08663;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						text-align: center;
						color: white;
						font-weight: 700;
						font-family: 'Bebas', sans-serif;
						letter-spacing: 0.24px;
					}
					div:first-child {
						font-size: 2.111em;
						font-family: 'Bebas', sans-serif;
						font-weight: bold;
					}
					.Content {
						display: none;
					}
				`}</style>
			</div>
		)
	}
}

export default Label;