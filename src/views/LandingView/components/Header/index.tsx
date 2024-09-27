import { Button, Icon, Logo } from '~/components'

import './style.scss'

const navbarLinks = [
	{
		label: 'Features',
		href: '#features'
	},
	{
		label: 'Pricing',
		href: '#pricing'
	},
	{
		label: 'Testimonial',
		href: '#testimonial'
	},
	{
		label: 'Help',
		href: '#help'
	}
] as const

const Header = () => (
	<header className='header'>
		<div className='header__content'>
			<div className='header__content__left'>
				<a href='#'>
					<Logo />
				</a>
				<nav className='navbar'>
					<ul>
						{navbarLinks.map(({ href, label }) => (
							<li key={href}>
								<a href={href}>{label}</a>
							</li>
						))}
					</ul>
				</nav>
				<button className='menu-button'>
					<Icon name='menu' />
				</button>
			</div>
			<div className='header__content__right'>
				<Button
					size='sm'
					variant='transparent'
				>
					Sign in
				</Button>
				<Button
					size='sm'
					variant='outlined'
				>
					Sign up
				</Button>
			</div>
		</div>
	</header>
)

export default Header
