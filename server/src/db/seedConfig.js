// config and export amount of seeded data

export const limits = {
  users: 5,
  recipes: 15,
  categories: 7,
  units: 8,
  ingredients: 25,
  images: 25,
  logs: 12,
  favs: 30,
  recipe_categories: 50,
  recipe_ingredients: 60,
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
    password: [
      `string`,
      null,
      true,
    ],
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
