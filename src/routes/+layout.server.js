/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const user = cookies.get('user');

	return {
		user: user
	};
}