import { Header } from './components'
import './style.scss'

const LandingView = () => {
	return (
		<div className='landing-view'>
			<Header />
			<main className='landing-view__main'>main</main>
			<footer className='landing-view__footer'>footer</footer>
		</div>
	)
}

export default LandingView
