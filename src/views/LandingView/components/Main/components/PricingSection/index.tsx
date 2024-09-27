import planImage from '~/assets/images/plan-image.webp'
import { Button, Icon } from '~/components'

import './style.scss'

const plans = [
	{
		title: 'Free',
		details: [
			'Unlimited bandwidth',
			'Encrypted connection',
			'Yes traffic logs'
		],
		price: 0
	},
	{
		title: 'Standard plan',
		details: [
			'Unlimited bandwidth',
			'Encrypted connection',
			'Yes traffic logs',
			'Works on all devices',
			'Connect anyware'
		],
		price: 9
	},
	{
		title: 'Premium plan',
		details: [
			'Unlimited bandwidth',
			'Encrypted connection',
			'Yes traffic logs',
			'Works on all devices',
			'Connect anyware',
			'Get new features'
		],
		price: 12
	}
]

const PricingSection = () => {
	return (
		<section
			id='pricing'
			className='pricing-section'
		>
			<div className='pricing-section__content'>
				<div className='pricing-section__content__header'>
					<h2>Choose your plan</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
						arcu id purus ullamcorper. Vel vel erat semper augue.
					</p>
				</div>
				<div className='plans'>
					<div className='plans__content'>
						{plans.map(({ details, price, title }) => {
							const isFree = price === 0

							return (
								<div
									key={title}
									className={'plan-card'}
								>
									<div className='plan-card__image'>
										<img
											src={planImage}
											alt='Plan image'
										/>
									</div>
									<h3>{title}</h3>
									<div className='plan-card__details'>
										<ul>
											{details.map(detail => (
												<li key={detail}>
													<Icon name='circleCheck' />
													{detail}
												</li>
											))}
										</ul>
									</div>
									<div className='plan-card__price'>
										<span>{isFree ? 'Free' : `$ ${price}`}</span>
										{!isFree && (
											<>
												<span className='plan-card__price__divider'> / </span>
												<span className='plan-card__price__period'>mo</span>
											</>
										)}
									</div>
									<Button className='plan-card__select-button'>Select</Button>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default PricingSection
