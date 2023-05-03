
const loadChefData = async () => {
    const data = await fetch(`http://localhost:5000/chefs`);
    const chefData = await data.json();
    return chefData;
}
export default loadChefData;