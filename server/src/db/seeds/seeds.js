/* eslint-disable no-unused-vars */
import { collTemplates, joinTemplates, limits } from "../seedConfig";
import { genTbl } from "../../utils/seedGenerator";

// TODO loop promises
export const seed = (knex, Promise) =>
  knex(`users`).del()
    .then(() => knex(`recipes`).del())
    .then(() => knex(`ingredients`).del())
    .then(() => knex(`units`).del())
    .then(() => knex(`categories`).del())
    .then(() => knex(`images`).del())
    .then(() => knex(`logs`).del())
    .then(() => knex(`favs`).del())
    .then(() => knex(`recipe_categories`).del())
    .then(() => knex(`recipe_ingredients`).del())
    .then(() =>
      knex(`users`).insert(genTbl(collTemplates.users)(limits.users)))
    .then(() =>
      knex(`recipes`).insert(genTbl(collTemplates.recipes)(limits.recipes)))
    .then(() =>
      knex(`images`).insert(genTbl(collTemplates.images)(limits.images)))
    .then(() =>
      knex(`categories`).insert(genTbl(collTemplates.categories)(limits.categories)))
    .then(() =>
      knex(`units`).insert(genTbl(collTemplates.units)(limits.units)))
    .then(() =>
      knex(`ingredients`).insert(genTbl(collTemplates.ingredients)(limits.ingredients)))
    .then(() =>
      knex(`logs`).insert(genTbl(collTemplates.logs)(limits.logs)))
    .then(() =>
      knex(`favs`).insert(genTbl(joinTemplates.favs)(limits.favs)))
    .then(() =>
      knex(`recipe_categories`).insert(genTbl(joinTemplates.recipe_categories)(limits.recipe_categories)))
    .then(() =>
      knex(`recipe_ingredients`).insert(genTbl(joinTemplates.recipe_ingredients)(limits.recipe_ingredients)));

