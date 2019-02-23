import React, { Component } from 'react'
import './ExpandBlock.scss';


class ExpandBlock extends Component {
	constructor (props) {
		super(props);
		this.divElement = React.createRef();
		this.state = {
			isExpanded: false,
			contentHeight: 0
		};
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateContentHeightHandler);
		this.updateContentHeightHandler();
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateContentHeightHandler);
	}

	ExpandToggleHandler = () => {
		this.setState((prevState) => {
			return {isExpanded: !prevState.isExpanded};
		});
	}

	updateContentHeightHandler = () => {
		const contentHeight = this.divElement.current.offsetHeight;
		this.setState(() => {
			return { contentHeight:  contentHeight + 32};
		});
	}

		render() {

			let classNames = 'expend-block';
			let height = 0;

			if (this.state.isExpanded) {
				classNames += ' expend-block_expended';
				height = this.state.contentHeight;
			}

			return (
				<div className={classNames}>
					<div 
						className='expend-block__title'
						onClick={this.ExpandToggleHandler}
					>
						{this.props.title}
					</div>
					<div 
						className='expend-block__content' 
						style={{height: `${height}px`}}	
					>
						<div ref={this.divElement} className='expend-block__content__wrapper'>
							{this.props.children}
						</div>
					</div>
				</div>
			)
		}
	}

export default ExpandBlock;
