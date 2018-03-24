import Chance from "chance";

const c = new Chance();

const chance = {
  email: () => c.email(),
  fname: () => c.name().split(` `)[0],
  lname: () => c.name().split(` `)[1],
  units: () => c.pickone([ `metric`, `imperial` ]),
  sentence: () => c.sentence(),
  avatar: jpg => c.avatar(jpg && { fileExtension: `jpg` }),
  country: () => c.country({ full: true }),
  string: () => c.string(),
  paragraph: () => c.paragraph(),
  word: () => c.word(),
  int: max => c.integer({ max, min: 1 }),
  syllable: () => c.syllable(),
};

export const genTbl = template => (t = 5) => {
  const seeds = [];
  // Prefill array of size t with empty objects
  for (let i = 0; i < t; i += 1) {
    seeds[i] = {};
  }
  // Iterate over the template to generate t uniques for each field
  Object.entries(template).forEach(([
    field, [
      gen,
      prm,
      isUnique = false,
    ],
  ]) => {
    if (isUnique) {
      const uniques = c.unique(() => chance[gen](prm), t);
      // Then iterate over each unique and distribute through prefilled seed array
      uniques.forEach((uniqueFieldValue, i) => {
        // If seed element is uninitialized, set as object
        seeds[i][field] = uniqueFieldValue;
      });
    } else {
      // !isUnique, skip unique arra generation
      seeds.forEach((el, i) => {
        seeds[i][field] = chance[gen](prm);
      });
    }
  });
  return seeds;
};

export const genJoin = (template, seeds = []) => (t = 10) => {
  // Loop through template to create a candidate entry
  const candidate = {};
  Object.entries(template).forEach(([ field, [ gen, prm ] ]) => {
    candidate[field] = chance[gen](prm);
  });
  // Check candidate against existing entries
  const isDuplicate = seeds.some(item => JSON.stringify(candidate) === JSON.stringify(item));
  if (!isDuplicate) seeds.push(candidate);

  // If seeds array full, return it. Otherwise repeat genrator
  if (seeds.length === t) return seeds;
  return genJoin(template, seeds)(t);
};

