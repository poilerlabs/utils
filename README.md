# Hooks

## 📋 useClipboard

The `useClipboard` function is a custom hook in TypeScript that allows you to copy text to the

The `useClipboard` function returns an object with three properties: `copied`, `error`, and
`copyToClipboard`.

- `copyToClipboard` is a function and you have to pass value that you want to copy

- `copied` will be boolean and it will return back to false after 2 seconds

- `error` will throw if there's any

### Usage

```typescript
import {useClipboard} from 'nn-uttls'

export default function App() {
	const {copied, copyToClipboard, error} = useClipboard()

	return (
		<>
			{copied && 'Coppied to clipboard ✅'}
			{error && 'Something went wrong ❌'}

			<button
				onClick={() => {
					copyToClipboard('Content that you want to copy')
				}}>
				Copy text
			</button>
		</>
	)
}
```

## ⌚ useDebounce

The `useDebounce` hook returns a debounced version of the original function.

### Parameters

`func:` A function that you want to debounce.

`delay:` delay in milliseconds to debounced function run

### Usage

```typescript
import {useDebounce} from 'nn-uttls'
import {ChangeEvent} from 'react'

export default function App() {
	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		debouncedOpration(e.target.value)
	}

	async function handleSearch(query: string) {
		await fetch(`https://example.com/api?search=${query}`)
	}

	const debouncedOpration = useDebounce(handleSearch, 500)

	return (
		<>
			<input onChange={handleChange} type='text' />
		</>
	)
}
```

## ⏬ useScrollPosition

The `useScrollPosition` hook returns the current scroll position of the window.

### Usage

```typescript
import {useScrollPosition} from 'nn-uttls'

export default function App() {
	const scrolledPosition = useScrollPosition()

	return <>{scrolledPosition > 100 ? <StickeyNav /> : <NormalNav />}</>
}
```

## ⌨️ useKeyPress

### Parameters

The useKeyPress hook accepts the following parameters:

`key` : A string representing a single key or an array of strings representing multiple keys to listen for. The available key values can be found in the `KeyboardEventKey` interface.

`callback` : A function to be executed when the key press criteria are met.

`modifiers` : (optional) An object specifying additional modifier keys to be pressed along with the specified key. The available modifier keys are:

- `altKey (default: undefined)`: Set to true to require the Alt key to be pressed.

- `ctrlKey (default: undefined)`: Set to true to require the Ctrl key to be pressed.

- `metaKey (default: undefined)`: Set to true to require the Meta/Command key to be pressed.

- `shiftKey (default: undefined)`: Set to true to require the Shift key to be pressed.

### Usage

```typescript
import {useKeyPress} from 'nn-uttls'
import {useState} from 'react'

export default function App() {
	const [showPopup, setShowPopup] = useState(false)

	useKeyPress('Escape', () => {
		setShowPopup(false)
	})

	return <>{showPopup && <Popup />}</>
}
```

## 👁️ useInputFocusRef

This is a custom hook in TypeScript that sets focus on an input element when it mounts.

```typescript
import {useInputFocusRef} from 'nn-uttls'

export default function App() {
	const focusedInput = useInputFocusRef()

	return (
		<>
			<input ref={focesedInput} type='text' />
		</>
	)
}
```

## 🪟 useWindowClick

The `useWindowClick` hook allows you to execute a callback function when a click event occurs outside of a specific component.

- Make sure to `stopPropagation()` on child component to avoid side Effects

```typescript
import {useWindowClick} from 'nn-uttls'
import {useState} from 'react'

export default function App() {
	const [showPopup, setShowPopup] = useState(false)

	useWindowClick(() => {
		setShowPopup(false)
	})

	return <>{showPopup && <Popup />}</>
}
```

## 🌐 useFetchData

The `useFetchData` function is a custom hook in TypeScript that fetches data from an API, handles loading and error states, and returns the data, loading state, and error object.

### Parameters

The useFetchData hook accepts the following parameter:

`url (string)` : The URL from which to fetch the data.

### Result

The useFetchData hook returns an object with the following properties:

`data` : The fetched data from the specified URL. It is initially set to null and gets updated once the data is successfully fetched.

`loading` : A boolean value indicating whether the data is currently being fetched. It is initially set to false and becomes true during the fetch process.

`error` : An object containing an error message if the data fetching encounters an error. It is initially set to null and gets updated with an error object if an error occurs.

### Usage

```typescript
import {useFetchData} from 'nn-uttls'

export default function App() {
	const {data, loading, error} = useFetchData('https://api.example.com/data')

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	return <div>{data}</div>
}
```
