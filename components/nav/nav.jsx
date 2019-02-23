import React, { Component } from 'react';
import Link from 'next/link';

import './nav.scss';


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

class Nav extends Component {
	state = {
		showNavBar: false
	}

  componentWillUnmount () {
    document.removeEventListener('click', this.close)
  }

	navBarToggleHandler = () => {
		this.setState((prevState) => {
			return {showNavBar: !prevState.showNavBar};
		});
	}

  close = () => {
    this.setState(() => {
			return {showNavBar: false};
		});
		document.removeEventListener('click', this.close);
  }


	render() {
		let classNames = "navbar ";

    if (this.state.showNavBar) {
			classNames += 'navbar_showed';
			document.addEventListener('click', this.close);
    }
		return(
			<nav className={classNames}>
			<a className='navbar__logo-mobile'>
				<img className='' src="/static/images/MIACAR_Logo_orange_208_2x.png" alt="Logo"/>
			</a>
			<ul className='navbar__menu'>
				{links_left.map(({ key, href, label }) => (
					<li className='navbar__item' key={key}>
						<Link href={href}>
							<a className='navbar__item__link'><span>{label}</span></a>
						</Link>
					</li>
				))}
				<li className='navbar__item'>
					<Link href={'/'}>
						<a className='navbar__item__link'>
							<span className='logo'>
								<img src="/static/images/MIACAR_Logo_orange_208_2x.png" alt="Logo"/>
							</span>
						</a>
					</Link>
				</li>
				{links_right.map(({ key, href, label }) => (
					<li className='navbar__item' key={key}>
						<Link href={href}>
							<a className='navbar__item__link'><span>{label}</span></a>
						</Link>
					</li>
				))}
			</ul>
			<button onClick={this.navBarToggleHandler} className='navbar__toggle'>
				<span></span>
			</button>
		</nav>
		)
	}
}

export default Nav;
