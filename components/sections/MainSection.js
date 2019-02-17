import React from 'react';
import Link from 'next/link';

import Button from '../button/Button';
import Label from '../UI/Label';

const label = { head: 'Gratis Lieferung', content: null };

const MainSection = () => (
  <section>
    <div className='Wrapper'>
			<div className='MainSection'>
				<div className='DescriptionContainer'>
					<div className='Description'>
						<h1>Dein rollender Supermarkt</h1>
						<p>MIACAR liefert Dir günstige Lebensmittel gratis und pünktlich mit dem Elektromobil nach Hause.</p>
						<div>
							<Button>Jetzt anmelden</Button>
						</div>
					</div>
				</div>
				<div className='PhotoSection'>
					<img className='PhotoSection_square' src="/static/images/square-green-204x300.png" alt="Square green"/>
					<img className='PhotoSection_phone' src="/static/images/phone_top@2x.png" alt="Product image"/>
				</div>
				<div className='Label'>
					<Label head={label.head}/>
				</div>
			</div>
		</div>
		<div className="CornerPicture">
			<img src="/static/images/stich_berries@2x.png" alt="Berries images should be here"/>
		</div>
  </section>
)

export default MainSection;
