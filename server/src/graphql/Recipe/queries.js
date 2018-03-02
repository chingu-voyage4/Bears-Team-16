import Recipe from "../../models/recipe";

export const queryText = `
	recipes: [Recipe]
  	recipe(id: ID!): Recipe
`;

export const queries = {
  async recipes() {
    const allRecipes = await Recipe.forge()
      .orderBy(`title`, `ASC`)
      .fetchAll()
      .then(recipes => recipes.toJSON());
    return allRecipes;
  },
  async recipe(_, { id: recipeId }) {
    const singleRecipe = await Recipe.where(`id`, recipeId)
      .fetch()
      .then(recipe => {
        if (!recipe) return;
        return recipe.toJSON();
      });
    return singleRecipe;
  },
};
