import { Button } from './components'

const App = () => {
	return (
		<div>
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
	)
}

export default App
