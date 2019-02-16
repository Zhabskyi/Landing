import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import MainSection from '../components/sections/MainSection';

const Home = () => (
  <div className='Container'>
    <Head title="MIACAR – Dein rollender Supermarkt" />
    <header>
			<Nav />
		</header>
		<MainSection />

    

		<style jsx>{`
			@font-face {
				font-family: 'bariol';
				src: url("/static/fonts/bariol_serif_bold-webfont.woff2") format("woff2");
				font-weight: 700;
			}
			@font-face {
				font-family: 'bariol';
				src: url("/static/fonts/bariol_serif_regular-webfont.woff2") format("woff2");
				font-weight: 400;
			}
			@font-face {
				font-family: 'bebas';
				src: url("/static/fonts/bebasneuebold.woff2") format("woff2");
			}
			:global(*) {
				margin: 0;
				box-sizing: border-box;
				text-decoration: none;
			}
			:global(html) {
				font-size: 16px;
				font-family: 'Bariol', sans-serif;
				color: #15484c;
			}
      :global(h1, h2, h3, h4) {
				font-family: 'bebas', 'Quicksand', sans-serif;
				letter-spacing: 0.1px;
			}
			:global(p) {
					display: block;
					margin-block-start: 1em;
					margin-block-end: 1em;
					margin-inline-start: 0px;
					margin-inline-end: 0px;
			}
			header{
				height: 60px;
				position: fixed;
				top: 0;
				left: 0;
				z-index: 5;
				width: 100%;
			}
			.Container {
				width: 100%;
				flex: 1;
				flex-direction: column;
				padding-top: 60px;
				min-height: 100vh;
				position: relative;
			}
    `}</style>
  </div>
)

export default Home
