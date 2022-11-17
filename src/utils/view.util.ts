export const checkIfOnView = (input: string): void => {
	const element = document.getElementById(input)
	if (!element) {
		console.error('Element not found: ' + input)
		return
	}
	const bounding = element.getBoundingClientRect()

	if (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	) {
		return
	}
}
