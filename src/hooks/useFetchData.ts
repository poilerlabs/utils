/**
 * The `useFetchData` function is a custom hook in TypeScript that fetches data from an API, handles
 * loading and error states, and returns the data, loading state, and error object.
 * @param {string} url - The `url` parameter is a string that represents the URL of the API endpoint
 * from which you want to fetch data.
 * @returns The `useFetchData` hook returns an object with three properties: `data`, `loading`, and
 * `error`.
 */
import {useState, useEffect} from 'react'

type ErrorType = {
	message: string
}

export const useFetchData = (url: string) => {
	const [data, setData] = useState<any | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<ErrorType | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await fetch(url)
				if (!response.ok) {
					throw new Error('Request failed')
				}
				const jsonData = await response.json()
				setData(jsonData)
				setError(null)
			} catch (error: any) {
				setError({message: error.message})
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	return {data, loading, error}
}
