import { Button } from '~/components'

import './style.scss'

const SubscribeCard = () => {
	return (
		<div className='subscribe-card'>
			<div className='subscribe-card__left'>
				<h3>Subscribe now for get special features!</h3>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
			<Button
				size='lg'
				className='subscribe-button'
			>
				Subscribe now
			</Button>
		</div>
	)
}

export default SubscribeCard
