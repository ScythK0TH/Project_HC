import prisma from '$lib/prisma';
import { Prisma } from '@prisma/client'
import { error, fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
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
    deletion: async ({ request, cookies }) => {
        const data = await request.formData();
        let pro_id1 = parseInt(data.get('pid'));
        let pcolor1 = data.get('pcolor');
        let user_id = await cookies.get('userId');

        const results = await prisma.$queryRaw`SELECT quantity FROM carts WHERE id = ${user_id} AND pid = ${pro_id1} AND pcolor = ${pcolor1}`
        let quantity = results[0].quantity;
        if (quantity > 1) {
            const deletion = await prisma.$queryRaw`UPDATE carts SET quantity = quantity - 1 WHERE id = ${user_id} AND pid = ${pro_id1} AND pcolor = ${pcolor1}`
            return redirect(302, "/cart");
        }
        if (quantity == 1) {
            const deletion = await prisma.$queryRaw`DELETE FROM carts WHERE id = ${user_id} AND pid = ${pro_id1} AND pcolor = ${pcolor1}`
            return redirect(302, "/cart");
        }
    },
    OnBuy: async ({ cookies }) => {
        let user_id = await cookies.get('userId');
        const results = await prisma.$queryRaw`SELECT * FROM carts WHERE id = ${user_id}`
        if (Object.keys(results).length > 0) {
            for (let i = 0; i < results.length; i++) {
                let uid1 = results[i].id;
                let pid1 = results[i].pid;
                let pcolor1 = results[i].pcolor;
                let quantity1 = results[i].quantity;

                const product = await prisma.$queryRaw`SELECT * FROM products WHERE id = ${pid1}`
                let price1 = product[0].price;
                if (product[0].stock < quantity1){
                    const deletion = await prisma.$queryRaw`DELETE FROM carts WHERE id = ${user_id} AND pid = ${pid1} AND pcolor = ${pcolor1}`
                } else if (product[0].stock >= quantity1){
                    try {
                        const update = await prisma.$queryRaw`UPDATE products AS p INNER JOIN carts AS c ON p.id = c.pid SET p.stock = p.stock - ${quantity1} WHERE c.id = ${user_id} AND c.pid = ${pid1} AND c.pcolor = ${pcolor1}`
                        const inserting = await prisma.$queryRaw`INSERT INTO history (uid, pid, pcolor, quantity, price) VALUES (${uid1}, ${pid1}, ${pcolor1}, ${quantity1}, ${price2 * quantity1})`
                    } catch (e) {
                        if (e instanceof Prisma.PrismaClientKnownRequestError) {
                            if (e.code === 'P2010') {
                                const update = await prisma.$queryRaw`UPDATE products AS p SET stock = p.stock - ${quantity1} FROM carts AS c WHERE p.id = c.pid AND c.id = ${user_id} AND c.pid = ${pid1} AND c.pcolor = ${pcolor1}`
                                const inserting = await prisma.$queryRaw`INSERT INTO history (uid, pid, pcolor, quantity, price) VALUES (${uid1}, ${pid1}, ${pcolor1}, ${quantity1}, ${price1 * quantity1})`
                            } else {
                                const deletion = await prisma.$queryRaw`DELETE FROM carts WHERE id = ${user_id} AND pid = ${pid1} AND pcolor = ${pcolor1}`
                            }
                        }
                    }
                }
            }
            const deletion = await prisma.$queryRaw`DELETE FROM carts WHERE id = ${user_id}`
            return redirect(302, "/cart");
        } else {
            return fail(400, {
                error: "Something went wrong"
            })
        }
    }
}