import { Fragment } from 'react'

import heroImage from '~/assets/images/hero-image.webp'
import { Button, Icon } from '~/components'

import './style.scss'

const mockedStats = [
	{
		title: '90+',
		description: 'Users',
		icon: 'user'
	},
	{
		title: '30+',
		description: 'Locations',
		icon: 'location'
	},
	{
		title: '50+',
		description: 'Servers',
		icon: 'server'
	}
] as const

const HeroSection = () => {
	return (
		<section className='hero-section'>
			<div className='hero-section__content'>
				<div className='hero-section__content__left'>
					<h1>
						Want anything to be easy with <b>LaslesVPN</b>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
						arcu id purus ullamcorper. Vel vel erat semper augue.
					</p>
					<Button
						size='lg'
						className='get-started-button'
					>
						Get started
					</Button>
				</div>
				<div className='hero-section__content__right'>
					<img
						alt='LaslesVPN landing image'
						src={heroImage}
						draggable={false}
					/>
				</div>
			</div>
			<div className='stats'>
				{mockedStats.map(({ description, icon, title }, index) => {
					const isLastStat = index === mockedStats.length - 1

					return (
						<Fragment key={`${title}-${description}`}>
							<div className='stats__item'>
								<div className='stats__item__icon'>
									<Icon name={icon} />
								</div>
								<div className='stats__item__info'>
									<h3>{title}</h3>
									<p>{description}</p>
								</div>
							</div>
							{!isLastStat && <div className='stats__divider' />}
						</Fragment>
					)
				})}
			</div>
		</section>
	)
}

export default HeroSection
