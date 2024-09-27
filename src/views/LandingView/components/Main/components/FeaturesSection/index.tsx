import featuresImage from '~/assets/images/features-image.webp'
import { Icon } from '~/components'

import './style.scss'

const features = [
	'Powerfull online protection',
	'Internet with borders',
	'Supercharged VPN',
	'No specific time limits'
]

const FeaturesSection = () => {
	return (
		<section className='features-section'>
			<div className='features-section__content'>
				<div className='features-section__content__left'>
					<img
						alt='Features image'
						src={featuresImage}
						draggable={false}
					/>
				</div>
				<div className='features-section__content__right'>
					<h2>We provide many features you can use</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
						arcu id purus ullamcorper. Vel vel erat semper augue.
					</p>
					<div className='features-list'>
						<ul>
							{features.map(feature => (
								<li key={feature}>
									<Icon name='circleCheck' />
									{feature}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeaturesSection
