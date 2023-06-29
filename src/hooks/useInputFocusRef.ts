import {useEffect, useRef} from 'react'

/**
 * This is a custom hook in TypeScript that sets focus on an input element when it mounts.
 * @returns The `useInputFocus` function returns a `ref` object that can be attached to an input
 * element in a React component. This `ref` object is used to focus the input element when the
 * component mounts.
 */
export function useInputFocusRef() {
	const inputRef = useRef<HTMLInputElement>(null)
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [])
	return inputRef
}
