import React from 'react';
import Link from 'next/link';

import Button from '../UI/Button';
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
					<Label
						head={label.head}
					/>
				</div>
			</div>
		</div>
		<div className="CornerPicture">
			<img src="/static/images/stich_berries@2x.png" alt="Berries images should be here"/>
		</div>

		<style jsx>{`
			section{
				padding: 147px 10px;
				position: relative;
				background-color: #e2eded;
				background-image: url(/static/images/background-empty.jpg);
				background-position: top center;
				background-repeat: no-repeat;
				background-size: cover;
				transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
				height: 900px;
				margin-bottom: 60px;
			}
			.Wrapper {
				max-width: 2300px;
    		margin: 0 auto;
    		width: 100%;
   			height: 100%;
			}

			.CornerPicture {
				right: 0;
				top: 0;
				width: 22%;
				min-width: 230px;
				position: absolute;
				height: auto;
				z-index: 1;
			}

			.CornerPicture > img {
				width: 100%;
				display: block;
			}
			.MainSection {
				max-width: 1300px;
				margin: 0 auto;
				width: 100%;
				height: 100%;
				position: relative;
			}
			.DescriptionContainer {
				width: 50%;
				max-width: 750px;
				position: absolute;
				top: 0;
				font-size: 24px;
				z-index: 1;
				padding-right: 10%;
				margin-top: -12px;
				font-size: 24px;
			}
			.Description {
				position: relative;
				display: flex;
				flex-direction: column;
			}
			h1 {
				font-size: 5rem;
				line-height: 5rem;

			}
			p {
				width: 80%;
			}
			.PhotoSection {
				position: absolute;
				width: 40%;
				top: 0;
				right: 15%;
			}
			.PhotoSection_square {
				width: 275px;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 0;
			}
			.PhotoSection_phone {
				transform: translate(7%, 16%);
				width: 100%;
				right: 0;
				z-index: 1;
				position: relative;
			}
			.Label {
				position: absolute;
				top: 0;
				right: -20px;
				transform: rotate(12deg);
				z-index: 4;
			}
			.Label:before {
				content: '';
				background-color: white;
				width: 23%;
				height: 5px;
				position: absolute;
				top: 30px;
				left: 50%;
				transform: translateX(-50%);
				z-index: 4;
			}
			.Label:after {
				content: '';
				background-color: white;
				width: 23%;
				height: 5px;
				position: absolute;
				bottom: 30px;
				left: 50%;
				transform: translateX(-50%);
				z-index: 4;
			}

			@media screen and (max-width: 1599px) {
				.Wrapper {
					width: 80%;
				}
				.PhotoSection {
					width: 50%;
				}
				.PhotoSection_square {
					transform: translate(0, -10%);
				}
				.PhotoSection_phone {
					transform: translate(7%, 0%);
				}
			}
    `}</style>
  </section>
)

export default MainSection;