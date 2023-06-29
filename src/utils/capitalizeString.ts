/**
 * The function `capitalizeString` takes a string as input and returns the same string with the first
 * letter capitalized.
 * @param {string} string - The parameter "string" is a string value that represents the input string
 * that needs to be capitalized.
 * @returns a capitalized version of the input string.
 */
export function capitalizeString(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
