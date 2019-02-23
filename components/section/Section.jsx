import React from 'react';

import './Section.scss';

const Section = (props) => {
	return (
		<React.Fragment>
			<section id={props.id} className={`${props.classes} section`}>
				<div className='section__wrapper'>
					<div className='section__content'>
						{props.children}
					</div>
				</div>
				{props.block}
			</section>
		</React.Fragment>
	)
}

export default Section;
