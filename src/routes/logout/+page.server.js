import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies }) => {
    let expiresdate = new Date();
    expiresdate.setDate(expiresdate.getDate() - 10000); // Set expiration date to the past to clear the cookie
    cookies.set('user', '', { path: '/', expires: expiresdate });
    cookies.set('userId', '', { path: '/', expires: expiresdate });

    redirect(302, "/");
  }
};