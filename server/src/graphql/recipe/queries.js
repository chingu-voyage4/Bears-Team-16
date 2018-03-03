const queryTypes = `
  recipe: Recipe
  recipes: [Recipe]
`;

const queries = {
  recipe: () => `I'm a recipe!`,
  recipes: () => [ `I'm a recipe`, `Me too!!!` ],
};

export { queryTypes, queries };

