import React from 'react';
import Link from 'next/link';


const links_left = [
	{ href: '/#howItsWorks', label: 'So funktioniert\'s' },
	{ href: '/#productRange', label: 'Unser Sortiment'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const links_right = [
	{ href: '/#ourApp', label: 'Unsere App'},
	{ href: '/#faq', label: 'Häufige Fragen'}

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
		<ul>
			{links_left.map(({ key, href, label }) => (
				<li key={key}>
					<Link href={href}>
						<a>{label}</a>
					</Link>
				</li>
			))}
			<li>
				<Link href={'/'}>
					<a>
						<span className='Logo'>
							<img src="/static/images/MIACAR_Logo_orange_208_2x.png" alt="Logo"/>
						</span>
					</a>
				</Link>
			</li>
			{links_right.map(({ key, href, label }) => (
				<li key={key}>
					<Link href={href}>
						<a>{label}</a>
					</Link>
				</li>
			))}
		</ul>

    <style jsx>{`
		
			:global(a) {
				text-decoration: none;
				cursor: pointer;
			}
			nav {
				background-color: white;
				display: flex;
				position: relative;
				justify-content: center;
				width: 100%;
				height: 60px;
				font-family: 'bariol', 'Quicksand', sans-serif;
			}
      ul {
        display: flex;
				padding: 0;
				margin: 0;
				justify-content: space-around;
				max-width: 1024px;
				height: 100%;
				width: 70%;
      }
      ul > * {
				flex: 20% 1 1;
			}
			ul:nth-child(3n) {
				min-height: 90px;
			}
      li {
        display: flex;
    		justify-content: center;
			}
			img {
				width: 100%;
			}
			
      a {
				min-width: 60px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #15484c;
				font-weight: bold;
				background-color: transparent;
				transition: color 0.2s linear;
			}
			.Logo {
				width: 90px;
				height: 100px;
				padding: 20px;
				margin-top: 9px;
				background-color: white;
				position: relative;
				z-index: 1;
			}
    `}</style>
  </nav>
)

export default Nav;
