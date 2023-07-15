/**
 * The `delay` function returns a promise that resolves after a specified duration.
 * @param {number} duration - The `duration` parameter is a number that represents the amount of time
 * in milliseconds that the delay should last.
 */
export function delay(duration: number) {
	return new Promise((resolve) => setTimeout(resolve, duration))
}
