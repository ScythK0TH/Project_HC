import { mysqlconnFn } from "$lib/file/db/mysql.js";
import { fail, redirect } from "@sveltejs/kit";
import md5 from "md5";

let expirationDays = 7;

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
  const data = await request.formData();
    let password1 = await md5(data.get('password').trim());
    let username1 = data.get('username').trim();
    let mysqlconn = await mysqlconnFn();
    const expiresdate = new Date();
    expiresdate.setDate(expiresdate.getDate() + expirationDays);
    let results = await mysqlconn
      .query("SELECT * FROM users WHERE username = '" + username1 + "' AND password = '" + password1 + "'")
      // .query("SELECT * FROM student")
      .then(function ([rows, fields]) {
          console.log(rows);
          return rows;
    });

    if (Object.keys(results).length > 0) {
      cookies.set('result', results, { path: '/', expires: expiresdate });
      cookies.set('user', username1, { path: '/', expires: expiresdate });
      redirect(302, "/");
    } else {
      cookies.set('Fuckyou', "bitch", { path: '/', expires: expiresdate });
      cookies.set('password', password1, { path: '/', expires: expiresdate });
      return fail(400, {error: true, message: "Incorrect username or password"});
    }
  }
};