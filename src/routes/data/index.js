/** @type {import('./__types/items').RequestHandler} */
export async function get() {
	return {
		body: { test: 'test' }
	};
}
