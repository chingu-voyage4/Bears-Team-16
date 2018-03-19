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

