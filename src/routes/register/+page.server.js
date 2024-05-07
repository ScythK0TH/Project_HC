import prisma from '$lib/prisma';
import { fail, redirect } from "@sveltejs/kit";
import md5 from "md5";
import { randomUUID } from 'crypto';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    let password = await data.get('password').trim();
    let c_password = await data.get('c_password').trim();
    let username1 = data.get('username').trim();

    if (typeof username1 !== "string" || username1.length < 6 || username1.length > 31 || !/^[a-zA-Z0-9]+$/i.test(username1)) {
      return fail(400, {
        error: true,
        message: "Username can only contain letters, numbers, and must be between 6 and 30 characters long"
      });
    }
    if (typeof password !== "string" || password.length < 6 || password.length > 50) {
      return fail(400, {
        error: true,
        message: "Invalid password, and must be between 6 and 50 characters long."
      });
    }
    if (password != c_password) {
      return fail(400, {
        error: true,
        message: "Password are not match"
      });
    }

    let password1 = md5(password);
    const existingUser = await prisma.$queryRaw`SELECT * FROM users WHERE username = ${username1}`;
    if (existingUser.length > 0) {
      return fail(400, { error: true, message: "This username is already used" });
    }
    let uid = randomUUID();
    await prisma.$queryRaw`INSERT INTO users (id, username, password) VALUES (${uid}, ${username1}, ${password1})`;
    redirect(302, "/login");
  }
}
