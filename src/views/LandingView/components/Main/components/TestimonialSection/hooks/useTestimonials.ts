import { useEffect, useRef, useState } from 'react'

const SCROLL_OFFSET_TOLERANCE = 5

export const useTestimonials = () => {
	const testimonialsContentRef = useRef<HTMLDivElement>(null)
	const [disableLeftButton, setDisableLeftButton] = useState(true)
	const [disableRightButton, setDisableRightButton] = useState(false)

	const updateButtonStates = () => {
		if (testimonialsContentRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } =
				testimonialsContentRef.current

			setDisableLeftButton(scrollLeft <= SCROLL_OFFSET_TOLERANCE)
			setDisableRightButton(
				scrollLeft + clientWidth >= scrollWidth - SCROLL_OFFSET_TOLERANCE
			)
		}
	}

	const scrollToRight = () => {
		if (testimonialsContentRef.current) {
			const { scrollWidth, children } = testimonialsContentRef.current
			testimonialsContentRef.current.scrollBy({
				left: scrollWidth / children.length,
				behavior: 'smooth'
			})
		}
	}

	const scrollToLeft = () => {
		if (testimonialsContentRef.current) {
			const { scrollWidth, children } = testimonialsContentRef.current
			testimonialsContentRef.current.scrollBy({
				left: -(scrollWidth / children.length),
				behavior: 'smooth'
			})
		}
	}

	useEffect(() => {
		const currentRef = testimonialsContentRef.current

		if (currentRef) {
			updateButtonStates()
			currentRef.addEventListener('scroll', updateButtonStates)
			return () => currentRef.removeEventListener('scroll', updateButtonStates)
		}
	}, [])

	return {
		testimonialsContentRef,
		scrollToLeft,
		scrollToRight,
		disableLeftButton,
		disableRightButton
	}
}
