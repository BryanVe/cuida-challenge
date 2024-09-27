import profileImage1 from 'assets/images/profile-image-1.webp'
import profileImage2 from 'assets/images/profile-image-2.webp'
import profileImage3 from 'assets/images/profile-image-3.webp'

import { Icon } from '~/components'

import './style.scss'

const testimonials = [
	{
		id: 1,
		rating: 4.5,
		name: 'Brooklyn Simmons',
		country: 'Warsaw,pland',
		description: `
      “wow...iam very happy to use this vpn,it
      turned out to be more than my expectations
      and so far there have been no problems.
      laslesvpn always the best”.
    `,
		profileImage: profileImage1
	},
	{
		id: 2,
		rating: 4.5,
		name: 'Darlene Robertson',
		country: 'Warsaw,pland',
		description: `
      “wow...iam very happy to use this vpn,it
      turned out to be more than my expectations
      and so far there have been no problems.
      laslesvpn always the best”.
    `,
		profileImage: profileImage2
	},
	{
		id: 3,
		rating: 4.5,
		name: 'Darrell Steward',
		country: 'Warsaw,pland',
		description: `
      “wow...iam very happy to use this vpn,it
      turned out to be more than my expectations
      and so far there have been no problems.
      laslesvpn always the best”.
    `,
		profileImage: profileImage3
	},
	{
		id: 4,
		rating: 4.5,
		name: 'Brooklyn Simmons',
		country: 'Warsaw,pland',
		description: `
      “wow...iam very happy to use this vpn,it
      turned out to be more than my expectations
      and so far there have been no problems.
      laslesvpn always the best”.
    `,
		profileImage: profileImage1
	}
] as const

const TestimonialSection = () => {
	return (
		<section
			id='testimonial'
			className='testimonial-section'
		>
			<div className='testimonial-section__content'>
				<div className='testimonial-section__content__header'>
					<h2>Trusted by thousands of happy customer</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
						arcu id purus ullamcorper. Vel vel erat semper augue.
					</p>
				</div>
				<div className='testimonials'>
					<div className='testimonials__content'>
						{testimonials.map(
							({ country, description, id, name, profileImage, rating }) => (
								<div
									key={id}
									className='testimonial-card'
								>
									<div className='testimonial-card__header'>
										<div className='testimonial-card__header__left'>
											<img
												alt={`${name} profile image`}
												src={profileImage}
											/>
										</div>
										<div className='testimonial-card__header__right'>
											<div className='user'>
												<div className='user__name'>{name}</div>
												<div className='user__country'>{country}</div>
											</div>
											<div className='rating'>
												{rating}
												<Icon name='star' />
											</div>
										</div>
									</div>
									<div className='testimonial-card__description'>
										{description}
									</div>
								</div>
							)
						)}
					</div>
					<div className='testimonials__paginator'>
						<div className='testimonials__paginator__left'>
							<div className='dot dot--active'></div>
							<div className='dot'></div>
							<div className='dot'></div>
							<div className='dot'></div>
						</div>
						<div className='testimonials__paginator__right'>
							<button>
								<Icon name='arrowCircleLeft' />
							</button>
							<button className='active'>
								<Icon name='arrowCircleRight' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TestimonialSection
