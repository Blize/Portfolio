import { formatDate } from '../utils/date.util.ts'

// eslint-disable-next-line no-unused-vars
export async function getLastCommit() {
	const response = await fetch('https://api.github.com/repos/Blize/Portfolio/commits/main', {
		method: 'GET',
	})

	const data = await response.json()
	return formatDate(data.commit.committer.date)
}
