import prisma from '$lib/prisma';
import { fail, error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    let pro_id1 = parseInt(data.get('pid'));
    let pcolor1 = data.get('pcolor');
    let manufact1 = "Bugatti";
    let quantity = 1;
    let user_id = await cookies.get('userId');
    let username = await cookies.get('user')
    const check_login = await prisma.$queryRaw`SELECT * FROM users WHERE id = ${user_id}`
    if (!username) {
      return redirect(302, "/login");
    }
    if (Object.keys(check_login).length <= 0){
      let expiresdate = new Date();
      expiresdate.setDate(expiresdate.getDate() - 10000); // Set expiration date to the past to clear the cookie
      cookies.set('user', '', { path: '/', expires: expiresdate });
      cookies.set('userId', '', { path: '/', expires: expiresdate });

      return redirect(302, "/login");
    }
    const check_catalog = await prisma.$queryRaw`SELECT stock FROM products WHERE manufact = ${manufact1} AND id = ${pro_id1} ORDER BY id;`

    if (check_catalog[0].stock <= 0) {
      return fail(400, { error: true, message: "Sorry, this car is out of stock" });
    }

    const results = await prisma.$queryRaw`SELECT * FROM carts WHERE id = ${user_id} AND pid = ${pro_id1} AND pcolor = ${pcolor1} ORDER BY cid;`
    // console.log(results);
    if (Object.keys(results).length > 0) {
      // มีสินค้าอยู่ในตะกร้าแล้ว อัพเดทจำนวนสินค้า
      const add_cart = await prisma.$queryRaw`UPDATE carts SET quantity = quantity + 1 WHERE id = ${user_id} AND pid = ${pro_id1} AND pcolor = ${pcolor1}`
      // ลดค่าในคลังสินค้า (catalog) ตามจำนวนที่เพิ่มในตะกร้า
      if (add_cart) {
        try {
          const update = await prisma.$queryRaw`UPDATE products AS p INNER JOIN carts AS c ON p.id = c.pid SET p.stock = p.stock - 1 WHERE c.id = ${user_id} AND c.pid = ${pro_id1} AND c.pcolor = ${pcolor1}`
        } catch (e) {
          const update = await prisma.$queryRaw`UPDATE products AS p SET stock = p.stock - 1 FROM carts AS c WHERE p.id = c.pid AND c.id = ${user_id} AND c.pid = ${pro_id1} AND c.pcolor = ${pcolor1}`
        }
      } else {
        return fail(400, { error: true, message: "Sorry, this car is out of stock" });
      }

    } else if (Object.keys(results).length == 0) {
      const add_cart = await prisma.$queryRaw`INSERT INTO carts (id, pid, pcolor, quantity) VALUES (${user_id}, ${pro_id1}, ${pcolor1}, ${quantity})`
        // ลดค่าในคลังสินค้า (catalog) ตามจำนวนที่เพิ่มในตะกร้า
      if (add_cart) {
        try {
          const update = await prisma.$queryRaw`UPDATE products AS p INNER JOIN carts AS c ON p.id = c.pid SET p.stock = p.stock - 1 WHERE c.id = ${user_id} AND c.pid = ${pro_id1} AND c.pcolor = ${pcolor1}`
        } catch (e) {
          const update = await prisma.$queryRaw`UPDATE products AS p SET stock = p.stock - 1 FROM carts AS c WHERE p.id = c.pid AND c.id = ${user_id} AND c.pid = ${pro_id1} AND c.pcolor = ${pcolor1}`
        }
      } else {
        return fail(400, { error: true, message: "Sorry, this car is out of stock" });
      }
    } else {
      const check_catalog = await prisma.$queryRaw`SELECT * FROM products ORDER BY id;`
      console.log(check_catalog);
    }
  }
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  let manufact1 = "Bugatti";
  const results = await prisma.$queryRaw`SELECT * FROM products WHERE manufact = ${manufact1} ORDER BY id;`
  if (Object.keys(results).length <= 0) {
    return error(404, "Nothing Here");
  }
  return { resultArray: results }
}




