import clsx from 'clsx'

import './style.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'filled' | 'outlined' | 'transparent'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Button = ({
	className,
	variant = 'filled',
	size = 'md',
	...restProps
}: ButtonProps) => {
	const _className = clsx(
		'button',
		`button--${size}`,
		`button--${variant}`,
		className
	)

	return (
		<button
			className={_className}
			{...restProps}
		></button>
	)
}

export default Button
