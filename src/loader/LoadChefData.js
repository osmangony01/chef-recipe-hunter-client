
const loadChefData = async () => {
    const data = await fetch(`https://chef-recipe-hunter-server-side-sepia.vercel.app/chefs`);
    const chefData = await data.json();
    return chefData;
}
export default loadChefData;