'use server'

import { prisma } from "./db"

export const createRecipe = async (title, ingredients) => {
    const recipe = await prisma.recipe.create({
        data: {
            title,
            ingredients: ingredients.join(',')
        }
    });
    return recipe;
}