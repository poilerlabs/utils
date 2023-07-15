/**
 * The function generates a random alphanumeric ID.
 */
export function generateId() {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
