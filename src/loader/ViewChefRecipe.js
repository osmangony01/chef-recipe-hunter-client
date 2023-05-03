
const viewChefRecipe = async ({params}) => {
    const id = params.id;
    const recipeData = await fetch(`http://localhost:5000/chef/${id}`);
    const chefRecipeData = await recipeData.json();
    return chefRecipeData;
}

export default viewChefRecipe;