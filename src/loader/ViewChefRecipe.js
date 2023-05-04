
const viewChefRecipe = async ({params}) => {
    const id = params.id;
    const recipeData = await fetch(`https://chef-recipe-hunter-server-side-sepia.vercel.app/chef/${id}`);
    const chefRecipeData = await recipeData.json();
    return chefRecipeData;
}

export default viewChefRecipe;