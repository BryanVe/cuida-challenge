import { Button, Icon, Logo } from '~/components'

import './style.scss'

const navbarItems = [
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

const Header = () => {
	return (
		<div className='container'>
			<header className='landing-view__header'>
				<div className='landing-view__header__left'>
					<a href='#'>
						<Logo />
					</a>
					<nav className='navbar'>
						<ul>
							{navbarItems.map(({ href, label }) => (
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
				<div className='landing-view__header__right'>
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
			</header>
		</div>
	)
}

export default Header
