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
export const templates = {
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
  },
  recipes: {
    author_id: [ `int`, limits.users ],
    title: [ `string` ],
    description: [ `paragraph` ],
    instructions: [ `paragraph` ],
    prep_time: [ `int`, 600 ],
    portions: [ `int`, 24 ],
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
