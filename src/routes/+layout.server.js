import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const user = cookies.get('user');
	const userId = cookies.get('userId');
	const historyArray = await prisma.$queryRaw`SELECT * FROM ((history INNER JOIN users ON history.uid = users.id) INNER JOIN products ON history.pid = products.id) WHERE history.uid = ${userId} ORDER BY history."BuyAt" DESC LIMIT 7`
	if (!historyArray) {
		let expiresdate = new Date();
		expiresdate.setDate(expiresdate.getDate() - 10000); // Set expiration date to the past to clear the cookie
		cookies.set('user', '', { path: '/', expires: expiresdate });
		cookies.set('userId', '', { path: '/', expires: expiresdate });
		redirect(302, "/");
	}
	return {
		historyArray: historyArray,
		user: user,
		userId: userId
	};
}