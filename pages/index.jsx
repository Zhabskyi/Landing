import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import MainSection from '../components/sections/MainSection';

import './index.scss';

const Home = () => (
  <div className='container'>
    <Head title="MIACAR – Dein rollender Supermarkt" />
    <header>
		<Nav />
	</header>
	<MainSection />
	{/* <Section className="section_secondary">
		<ActionBlock>
			<h1>Hello world</h1>
			<p>asdasdasda</p>
		</ActionBlock>
		<div className="test">
			<img src="" alt=""/>
		</div>
	</Section>
	<Section className="section_white">
		<ActionBlock>
			<img src="" alt=""/>
		</ActionBlock>
		<div className="test">
				<h1></h1>
		</div>
	</Section> */}
  </div>
)

export default Home
