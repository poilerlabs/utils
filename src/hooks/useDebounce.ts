import {useRef} from 'react'

export function useDebounce<T extends any[]>(
	func: (...args: T) => void,
	delay: number | undefined
): (...args: T) => void {
	const timeoutRef = useRef<any | undefined>(undefined)

	return (...args: T) => {
		clearTimeout(timeoutRef.current)

		timeoutRef.current = setTimeout(() => {
			func(...args)
		}, delay)
	}
}
