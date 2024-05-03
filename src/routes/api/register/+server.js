import { json } from "@sveltejs/kit";
import { mysqlconnFn } from "$lib/file/db/mysql.js";
import md5 from "md5";

let expirationDays = 7;

export async function POST({ cookies, request }) {
  const { username, password } = await request.json();
  let password1 = await md5(password.trim());
  let username1 = username.trim();
  let mysqlconn = await mysqlconnFn();
  const expiresdate = new Date();
  expiresdate.setDate(expiresdate.getDate() + expirationDays);
  let results = await mysqlconn
    .query("INSERT INTO users (username, password) VALUES ('" + username1 +"', '" + password1 + "')")
    .then(function ([rows, fields, err]) {
      if (err) {
        console.log(err);
        return err;
      } else {
        console.log(rows);
        return rows;
      }
    });

  return json(results);
}