export const myDate = (input: string): string => {
	const date = new Date(input)
	const year = date.getUTCFullYear()
	const month = date.getUTCMonth() + 1 >= 10 ? date.getUTCMonth() + 1 : `0${date.getUTCMonth() + 1}`
	const day = date.getUTCDate() >= 10 ? date.getUTCDate() : `0${date.getUTCDate()}`

	return `${day}.${month}.${year}`
}
