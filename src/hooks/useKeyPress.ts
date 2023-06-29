import {useEffect} from 'react'
import {KeyboardEventKey} from './interfaces/keyboadKeys'

interface ModifierKeys {
	altKey?: boolean
	ctrlKey?: boolean
	metaKey?: boolean
	shiftKey?: boolean
}

export function useKeyPress(
	key: KeyboardEventKey | KeyboardEventKey[],
	callback: () => void,
	{altKey, ctrlKey, metaKey, shiftKey}: ModifierKeys = {}
) {
	useEffect(() => {
		function handleKeyPress(event: globalThis.KeyboardEvent) {
			const keys = Array.isArray(key) ? key : [key]

			if (keys.includes(event.key as KeyboardEventKey)) {
				if (
					(typeof altKey === 'undefined' || event.altKey === altKey) &&
					(typeof ctrlKey === 'undefined' || event.ctrlKey === ctrlKey) &&
					(typeof metaKey === 'undefined' || event.metaKey === metaKey) &&
					(typeof shiftKey === 'undefined' || event.shiftKey === shiftKey)
				) {
					event.preventDefault()
					callback()
				}
			}
		}

		window.addEventListener('keydown', handleKeyPress)
		return () => {
			window.removeEventListener('keydown', handleKeyPress)
		}
	}, [key, callback, altKey, ctrlKey, metaKey, shiftKey])
}
