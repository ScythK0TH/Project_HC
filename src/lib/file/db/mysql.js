import mysql from "mysql2/promise";

let mysqlconn = null;

export function mysqlconnFn() {
  if (!mysqlconn) {
    // used for development with MAMP
    // mysqlconn = mysql.createConnection({
    //   host: "localhost",
    //   user: "root",
    //   password: "",
    //   database: "auth_system",
    // });
    mysqlconn = mysql.createConnection({
      host: "monorail.proxy.rlwy.net",
      user: "root",
      password: "iaXlXybypJksPnGUJyncdEazKbPnkrJA",
      database: "auth_system",
    });
  }

  return mysqlconn;
}