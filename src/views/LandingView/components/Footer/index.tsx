import { Icon, Logo } from '~/components'

import './style.scss'

const navSections = [
	{
		title: 'Product',
		links: [
			{
				label: 'Download',
				href: '#download'
			},
			{
				label: 'Pricing',
				href: '#pricing'
			},
			{
				label: 'Locations',
				href: '#locations'
			},
			{
				label: 'Server',
				href: '#server'
			},
			{
				label: 'Countries',
				href: '#countries'
			},
			{
				label: 'Blog',
				href: '#blog'
			}
		]
	},
	{
		title: 'Engage',
		links: [
			{
				label: 'LaslesVPN?',
				href: '#laslesvpn'
			},
			{
				label: 'FAQ',
				href: '#faq'
			},
			{
				label: 'Tutorials',
				href: '#tutorials'
			},
			{
				label: 'About us',
				href: '#about-us'
			},
			{
				label: 'Privacy policy',
				href: '#privacy-policy'
			},
			{
				label: 'Terms of service',
				href: '#terms-of-service'
			}
		]
	},
	{
		title: 'Earn money',
		links: [
			{
				label: 'Become a partner',
				href: '#become-a-partner'
			},
			{
				label: 'Affiliate',
				href: '#affiliate'
			}
		]
	}
] as const

const socialLinks = [
	{
		name: 'facebook',
		href: '#facebook'
	},
	{
		name: 'whatsapp',
		href: '#whatsapp'
	},
	{
		name: 'youtube',
		href: '#youtube'
	}
] as const

const Footer = () => (
	<footer className='footer'>
		<div className='footer__content'>
			<div className='footer__content__contact footer__content__contact--desktop'>
				<Logo />
				<p>
					Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
					id purus ullamcorper. Vel vel erat semper augue.
				</p>
				<div className='social-links'>
					{socialLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
						>
							<Icon name={link.name} />
						</a>
					))}
				</div>
			</div>
			<nav className='footer__content__navigation'>
				{navSections.map((section, index) => (
					<div key={index}>
						<h4>{section.title}</h4>
						<ul>
							{section.links.map((link, subIndex) => (
								<li key={subIndex}>
									<a href={link.href}>{link.label}</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</nav>
			<div className='footer__content__contact footer__content__contact--mobile'>
				<Logo />
				<p>
					Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
					id purus ullamcorper. Vel vel erat semper augue.
				</p>
				<div className='social-links'>
					{socialLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
						>
							<Icon name={link.name} />
						</a>
					))}
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
