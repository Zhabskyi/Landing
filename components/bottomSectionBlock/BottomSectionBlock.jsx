import React from 'react';

const BottomSectionBlock = (props) => {
	return (
		<div className="col-4 col-sm-12 row row_align-start">
			<div className='col-3 col-sm-4 offset-sm-4'>
				{props.image}
			</div>
			<div className='col-9 col-sm-12 text-sm-center'>
				<h4>{props.h4Top}<br/>{props.h4Bottom}</h4>
				{props.children}
			</div>
		</div>
	)
}

export default BottomSectionBlock;
