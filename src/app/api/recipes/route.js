import { prisma } from "@/app/db";

export async function GET(Request) {
    const data = await prisma.recipe.findMany();
    return new Response(JSON.stringify(data));
}