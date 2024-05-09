import prisma from '$lib/prisma';
import { Prisma } from '@prisma/client';
import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const user = cookies.get('user');
	const userId = cookies.get('userId');
	let historyArray;
	try {
		historyArray = await prisma.$queryRaw`SELECT products.name, history.pcolor, history.quantity, history.price, history."BuyAt" FROM ((history INNER JOIN users ON history.uid = users.id) INNER JOIN products ON history.pid = products.id) WHERE history.uid = ${userId} ORDER BY history."BuyAt" DESC LIMIT 7`
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			if (e.code === "P2010"){
				historyArray = await prisma.$queryRaw`SELECT products.name, history.pcolor, history.quantity, history.price, history.BuyAt FROM ((history INNER JOIN users ON history.uid = users.id) INNER JOIN products ON history.pid = products.id) WHERE history.uid = ${userId} ORDER BY history.BuyAt DESC LIMIT 7`
			}
		}
	}
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