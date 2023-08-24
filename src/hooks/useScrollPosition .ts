/**
 * The `useScrollPosition` hook returns the current scroll position of the window.
 * @returns The `useScrollPosition` custom hook returns the current scroll position as a number.
 */
import {useEffect, useState} from 'react'

export function useScrollPosition(): number {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrollPosition
}
