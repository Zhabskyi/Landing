import React from 'react';
import Link from 'next/link';

import './Footer.scss';

const links = [
	{ href: '/#kontakt', label: 'Kontakt' },
	{ href: '/#impressum', label: 'Impressum'},
	{ href: '/#datenschutzbestimmungen', label: 'Datenschutzbestimmungen'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

const Footer = () => {
	return (
		<footer className='footer'>
			{links.map(({ key, href, label }) => (
					<Link href={href}>
						<a className='footer__link'><span>{label}</span></a>
					</Link>
				))}
		</footer>
	)
}

export default Footer;
