import prisma from '$lib/prisma';
import { fail, redirect } from "@sveltejs/kit";
import md5 from "md5";

let expirationDays = 7;

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
  const data = await request.formData();
    let password1 = await md5(data.get('password').trim());
    let username1 = data.get('username').trim();

    const expiresdate = new Date();
    expiresdate.setDate(expiresdate.getDate() + expirationDays);
    const user = await prisma.$queryRaw`SELECT id FROM users WHERE username = ${username1}`
    const userId = user[0]?.id ?? "NULL";
    const results = await prisma.$queryRaw`SELECT * FROM users WHERE username = ${username1} AND password = ${password1}`
    if (Object.keys(results).length > 0) {
      cookies.set('userId', userId, { path: '/', expires: expiresdate });
      cookies.set('user', username1, { path: '/', expires: expiresdate });
      redirect(302, "/");
    } else {
      return fail(400, {error: true, message: "Incorrect username or password"});
    }

  }

};