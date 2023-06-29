/**
 * The function generates a random alphanumeric ID.
 */
export const generateId = () =>
	Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
