/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const user = cookies.get('user');
	const userId = cookies.get('userId');
	return {
		user: user,
		userId: userId
	};
}