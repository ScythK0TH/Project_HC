import prisma from '$lib/prisma';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const results = await prisma.$queryRaw`SELECT * FROM products ORDER BY stock`
    return { resultArray: results }
}