import { prisma } from "@/app/db";

export async function GET(Request) {
    const data = await prisma.recipe.findMany();
    console.dir(data)
    return new Response(data)
}