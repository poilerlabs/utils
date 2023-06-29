/**
 * The `delay` function returns a promise that resolves after a specified duration.
 * @param {number} duration - The `duration` parameter is a number that represents the amount of time
 * in milliseconds that the delay should last.
 */
export const delay = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration))
