import Image from 'next/image'
import Header from './components/Header/Header'
import CreateRecipe from './components/CreateRecipe/CreateRecipe'
import { prisma } from './db'
import Recipes from './components/Recipes/Recipes'


const navItems = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "Recipes",
        url: "/recipes"
    }
]

export default async function Home() {
    const recipes = await prisma.recipe.findMany();

    return (
        <div>
            <Header brand={"Redux Recipe App"} navItems={navItems} />
            <div className="container">
                <div className='row mt-4'>
                    <div className='col-lg-9'>
                        <Recipes recipes={recipes} />
                    </div>

                    <div className="col-lg-3">
                        <CreateRecipe />
                    </div>
                </div>
            </div>
        </div>
    )
}
