import prisma from '$lib/prisma';
import { error, fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ request, cookies }) {
    let user_id = await cookies.get('userId');
    let username = await cookies.get('user')
    if (!username) {
        return redirect(302, "/login");
    }

    var results = await prisma.$queryRaw`SELECT products.name, products.price, carts.pcolor, carts.quantity, products.img, carts.pid FROM carts INNER JOIN products ON carts.pid = products.id WHERE carts.id = ${user_id}`
    return { resultArray: results }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        let pro_id1 = parseInt(data.get('pid'));
        let pcolor1 = data.get('pcolor');
        let user_id = await cookies.get('userId');
    
        const results = await prisma.$queryRaw`SELECT quantity FROM carts WHERE id = ${user_id} AND pid = ${pro_id1} AND pcolor = ${pcolor1}`
        let quantity = results[0].quantity;
        if (quantity > 1) {

            const deletion = await prisma.$queryRaw`UPDATE carts SET quantity = quantity - 1 WHERE id = ${user_id} AND pid = ${pro_id1} AND pcolor = ${pcolor1}`
            if (deletion) {
                try{
                    const deleting = await prisma.$queryRaw`UPDATE products AS p INNER JOIN carts AS c ON p.id = c.pid SET p.stock = p.stock + 1 WHERE c.id = ${user_id} AND c.pid = ${pro_id1} AND c.pcolor = ${pcolor1}`
                } catch (e) {
                    const deleting = await prisma.$queryRaw`UPDATE products AS p SET stock = p.stock + 1 FROM carts AS c WHERE p.id = c.pid AND c.id = ${user_id} AND c.pid = ${pro_id1} AND c.pcolor = ${pcolor1}`
                }
                return redirect(302, "/cart");
            } else {
                return fail(400, {
                    error: "Something went wrong"
                })
            }
        }
        if (quantity == 1) {

            const deletion = await prisma.$queryRaw`DELETE FROM carts WHERE id = ${user_id} AND pid = ${pro_id1} AND pcolor = ${pcolor1}`
            if (deletion) {
                try {
                    const deleting = await prisma.$queryRaw`UPDATE products AS p INNER JOIN carts AS c ON p.id = c.pid SET p.stock = p.stock + 1 WHERE c.id = ${user_id} AND c.pid = ${pro_id1} AND c.pcolor = ${pcolor1}`
                } catch (e) {
                    const deleting = await prisma.$queryRaw`UPDATE products AS p SET stock = p.stock + 1 FROM carts AS c WHERE p.id = c.pid AND c.id = ${user_id} AND c.pid = ${pro_id1} AND c.pcolor = ${pcolor1}`
                }
                return redirect(302, "/cart");
            } else {
                return fail(400, {
                    error: "Something went wrong"
                })
            }
        }
    }
}