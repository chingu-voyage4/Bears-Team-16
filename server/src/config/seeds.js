// config and export amount of seeded data

export const limits = {
  users: 2,
  recipes: 5,
  categories: 5,
  units: 8,
  ingredients: 10,
  images: 10,
  logs: 10,
  favs: 6,
  recipe_categories: 12,
  recipe_ingredients: 12,
};

/**
 * Value arrays represent arguments for the generator helper function
 * [fieldName(string), params(object), unique(bool)]
 */
export const collTemplates = {
  users: {
    email: [
      `email`,
      null,
      true,
    ],
    password: [ `string` ],
    fname: [ `fname` ],
    lname: [ `lname` ],
    bio: [ `sentence`, 1 ],
    location: [ `country` ],
    avatar: [ `avatar`, true ],
    unit_system: [ `units` ],
    portions: [ `int`, 24 ],
  },
  recipes: {
    user_id: [ `int`, limits.users ],
    title: [ `string` ],
    description: [ `paragraph` ],
    instructions: [ `paragraph` ],
    prep_time: [ `int`, 600 ],
  },
  categories: {
    name: [
      `string`,
      null,
      true,
    ],
  },
  units: {
    name: [
      `string`,
      null,
      true,
    ],
    unit_system: [ `units` ],
  },
  images: {
    url: [ `avatar`, true ],
    recipe_id: [ `int`, limits.recipes ],
  },
  logs: { description: [ `sentence` ] },
  ingredients: {
    name: [
      `string`,
      null,
      true,
    ],
  },
};

// Junction tables seed config
export const joinTemplates = {
  favs: {
    user_id: [ `int`, limits.users ],
    recipe_id: [ `int`, limits.recipes ],
  },
  recipe_categories: {
    category_id: [ `int`, limits.categories ],
    recipe_id: [ `int`, limits.recipes ],
  },
  recipe_ingredients: {
    ingredient_id: [ `int`, limits.ingredients ],
    recipe_id: [ `int`, limits.recipes ],
    unit_id: [ `int`, limits.units ],
    amount: [ `int`, 500 ],
  },
};
