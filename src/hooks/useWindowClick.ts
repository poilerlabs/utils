/**
 * The `useWindowClick` hook allows you to execute a callback function when a click event occurs
 * outside of a specific component.
 * @param callback - The `callback` parameter is a function that will be called when a window click
 * event occurs.
 */
import {useEffect} from 'react'

export function useWindowClick(callback: () => void) {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			event.stopPropagation()
			event.preventDefault()
			if (event.isTrusted) {
				callback()
			}
		}
		window.addEventListener('click', handleClick)
		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [callback])
}
