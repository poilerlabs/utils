/**
 * The function randomNumber generates a random number between a specified minimum and maximum value.
 * @param {number} [min=0] - The minimum value that the random number can be. If no value is provided,
 * the default minimum value is 0.
 * @param {number} [max=99999] - The `max` parameter is the maximum value that the random number can
 * be. By default, it is set to 99999.
 * @returns a random number between the specified minimum and maximum values.
 */
export function randomNumber(min: number = 0, max: number = 99999) {
	return Math.round(Number(Math.random() * (max - min) + min))
}
