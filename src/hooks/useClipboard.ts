/**
 * The `useClipboard` function is a custom hook in TypeScript that allows you to copy text to the
 * clipboard and provides the status of the copy operation.
 * @returns The `useClipboard` function returns an object with three properties: `copied`, `error`, and
 * `copyToClipboard`.
 */
import {useState} from 'react'

export function useClipboard() {
	const [copied, setCopied] = useState(false)
	const [error, setError] = useState(null)
	const copyToClipboard = (text: any) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setCopied(true)
				setTimeout(() => {
					setCopied(false)
				}, 1500)
			})
			.catch((error) => {
				setError(error)
			})
	}
	return {copied, error, copyToClipboard}
}
