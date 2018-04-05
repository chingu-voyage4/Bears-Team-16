/* eslint-disable no-undef */
import chai, { expect } from "chai";
import { reseed, rollback, request } from "../../helpers";
import { limits } from "../../../src/config/seeds";
import { encodeToken } from "../../../src/utils/jwt";

chai.should();
chai.use(require(`chai-things`));

describe(`recipes`, () => {
  describe(`queries`, () => {
    before(reseed); // Seed once before all queries

    it(`can query all records`, async () => {
      const { recipes } = await request({
        query: `
        {
          recipes {
            id
            title
            images {
              url
            }
          }
        }
        `,
      });

      recipes
        .should.be.an(`array`)
        .that.has.length(limits.recipes)
        .and.all.include.keys([
          `title`,
          `id`,
          `images`,
        ])
        .but.all.not.include.keys([ `description` ]);

      recipes.every(r =>
        r.images.every(i =>
          !!i.url || i.length === 0)).should.be.true;
    });

    it(`can query single recipe with related records by id`, async () => {
      const { recipe } = await request({
        query: `
        {
          recipe(id: 5) {
            id
            title
            author {
              fname
            }
            categories {
              name
            }
            images {
              url
            }
          }
        }
        `,
      });

      expect(recipe).not.to.be.a(`undefined`);
      recipe.should.be.an(`object`)
        .that.includes.keys([
          `id`,
          `title`,
          `categories`,
          `images`,
          `author`,
        ])
        .and.has.property(`id`, `5`);

      recipe.author.should.not.be.an(`null`);

      recipe.images.should.be.an(`array`)
        .that.all.have.key(`url`)
        .and.that.has.length.below(limits.images);

      recipe.categories.should.be.an(`array`)
        .that.all.have.key(`name`)
        .and.that.has.length.below(limits.categories);
    });
  });

  describe(`mutations`, () => {
    beforeEach(reseed);
    afterEach(rollback);

    it(`can create a record`, async () => {
      const { createRecipe } = await request({
        // Check for relations
        query: `
          mutation Mutation($newRecipe: RecipeInput) {
            createRecipe(input: $newRecipe) {
              id
              title
              description
              prep_time
            }
          }`,
        variables: `{
          "newRecipe": {
            "author":3,
            "title":"my new recipe",
            "description":"the description",
            "prep_time":"25",
            "instructions":"Instructions. Yes"
          }
        }`,


      });
      createRecipe.should.deep.include({
        id: (limits.recipes + 2).toString(),
        title: `my new recipe`,
      });
    });


    it(`can update a record by id`, async () => {
      const { updateRecipe } = await request({
      // Check for relations
        query: `
          mutation Mutation($updatedRecipe: RecipeUpdate) {
            updateRecipe(input: $updatedRecipe) {
              id
              title
              description
              prep_time
              instructions
            }
          }`,
        variables: `{
          "updatedRecipe": {
            "id": ${limits.recipes + 1},
            "description":"New recipe description",
            "prep_time": 100
          }
        }`,
      }, encodeToken({ id: 2 }));

      expect(updateRecipe).to.be.an(`object`)
        .that.includes({
          id: (limits.recipes + 1).toString(),
          description: `New recipe description`,
          prep_time: 100,
        })
        .and.that.has.key(`instructions`);
    });

    it(`receives 'Unauthorized' message on update with incorrect id`, async () => {
      const token = encodeToken({ id: 12 });
      const data = await request({
      // Check for relations
        query: `
          mutation Mutation($updatedRecipe: RecipeUpdate) {
            updateRecipe(input: $updatedRecipe) {
              id
            }
          }`,
        variables: `{
          "updatedRecipe": {
            "id": 2,
            "description":"Wannabe new description"
          }
        }`,
      }, token);
      // FIXME
      expect(data.message).to.equal(`No Rows Updated`);
    });
  });
});
