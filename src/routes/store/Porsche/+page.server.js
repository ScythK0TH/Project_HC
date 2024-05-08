import prisma from '$lib/prisma';
import { fail, error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    let pro_id1 = parseInt(data.get('pid'));
    let pcolor1 = data.get('pcolor');
    let manufact1 = "Porsche";
    let quantity = 1;
    let user_id = await cookies.get('userId');
    let username = await cookies.get('user')
    const check_login = await prisma.$queryRaw`SELECT * FROM users WHERE id = ${user_id}`
    if (!username) {
      return redirect(302, "/login");
    }
    if (Object.keys(check_login).length <= 0) {
      let expiresdate = new Date();
      expiresdate.setDate(expiresdate.getDate() - 10000);
      cookies.set('user', '', { path: '/', expires: expiresdate });
      cookies.set('userId', '', { path: '/', expires: expiresdate });

      return redirect(302, "/login");
    }
    const check_catalog = await prisma.$queryRaw`SELECT stock FROM products WHERE manufact = ${manufact1} AND id = ${pro_id1} ORDER BY id;`

    if (check_catalog[0].stock <= 0) {
      return fail(400, { error: true, message: "Sorry, this car is out of stock" });
    }

    const results = await prisma.$queryRaw`SELECT * FROM carts WHERE id = ${user_id} AND pid = ${pro_id1} AND pcolor = ${pcolor1} ORDER BY cid;`

    if (Object.keys(results).length > 0) {

      const add_cart = await prisma.$queryRaw`UPDATE carts SET quantity = quantity + 1 WHERE id = ${user_id} AND pid = ${pro_id1} AND pcolor = ${pcolor1}`

    } else if (Object.keys(results).length == 0) {
      
      const add_cart = await prisma.$queryRaw`INSERT INTO carts (id, pid, pcolor, quantity) VALUES (${user_id}, ${pro_id1}, ${pcolor1}, ${quantity})`

    } else {
      const check_catalog = await prisma.$queryRaw`SELECT * FROM products ORDER BY id;`
      console.log(check_catalog);
    }
  }
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  let manufact1 = "Porsche";
  const results = await prisma.$queryRaw`SELECT * FROM products WHERE manufact = ${manufact1} ORDER BY id;`
  if (Object.keys(results).length <= 0) {
    return error(404, "Nothing Here");
  }
  return { resultArray: results }
}




