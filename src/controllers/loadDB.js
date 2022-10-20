const { Recipe } = require("../db"); // requiero el modelo
const data = require("../apiCompleta.json"); // me traigo el Json

const loadDb = async () => {
  try {
    const recipes = data
    recipes.forEach(el => {
        Recipe.findOrCreate({
            where: { name: el }
        })
    })
    const allRecipes = await Recipe.findAll()
    res.send(allRecipes)
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadDb;