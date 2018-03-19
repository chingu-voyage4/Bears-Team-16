/* eslint-disable no-unused-vars */
import { templates, limits } from "../seedConfig";
import { genTbl } from "../../utils/seedGenerator";

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
      knex(`users`).insert(genTbl(templates.users)(limits.users)))
    .then(() =>
      knex(`recipes`).insert(genTbl(templates.recipes)(limits.recipes)))
    .then(() =>
      knex(`images`).insert(genTbl(templates.images)(limits.images)))
    .then(() =>
      knex(`categories`).insert(genTbl(templates.categories)(limits.categories)))
    .then(() =>
      knex(`units`).insert(genTbl(templates.units)(limits.units)))
    .then(() =>
      knex(`ingredients`).insert(genTbl(templates.ingredients)(limits.ingredients)))
    .then(() =>
      knex(`logs`).insert(genTbl(templates.logs)(limits.logs)));

