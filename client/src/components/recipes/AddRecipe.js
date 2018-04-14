import React, { Component } from "react";
import { Form, Text, Checkbox, NestedField, Select, TextArea } from "react-form";
import * as validators from '../../validation/validators';

const Category = (props) => (
  <div>
    <label htmlFor={props.category}>{props.category}</label>
    <Checkbox field={props.category} id={props.category} />
  </div>
);

const Ingredient = (props) => {
  const {
    i, statusOptions, formApi, initial, field,
  } = props;
  return initial ?
    (
      <NestedField field={field}>
        <label htmlFor="ingredient-name-initial">
Ingredient
        </label>
        <Text
          field="ingredient-name"
          id="ingredient-name-initial"
          placeholder="Ingredient name"
          validate={validators.ingredientNameValidate}
        />
        <label htmlFor="ingredient-amount-initial">Amount</label>
        <Text
          field="ingredient-amount"
          id="ingredient-amount-initial"
          type="number"
          min="0"
          max="100"
          placeholder="Amount"
          validate={validators.ingredientAmountValidate}
        />
        <label htmlFor="ingredient-unit-initial">Unit</label>
        <Select
          field="ingredient-unit"
          id="ingredient-unit-initial"
          options={statusOptions}
          placeholder="Select unit"
          validate={validators.ingredientUnitValidate}
        />
      </NestedField>)
    : (
      <div key={`ingredient${i}`}>
        <NestedField field={[ `ingredients`, i ]}>
          <label htmlFor={`ingredient-name-${i}`}>
    Ingredient
          </label>
          <Text
            field="ingredient-name"
            id={`ingredient-name-${i}`}
            placeholder="Ingredient name"
            validate={validators.ingredientNameValidate}
          />
          <label htmlFor={`ingredient-amount-${i}`}>Amount</label>
          <Text
            field="ingredient-amount"
            id={`ingredient-amount-${i}`}
            type="number"
            min="0"
            max="100"
            placeholder="Amount"
            validate={validators.ingredientAmountValidate}
          />
          <label htmlFor={`ingredient-unit-${i}`}>Unit</label>
          <Select
            field="ingredient-unit"
            id={`ingredient-unit-${i}`}
            options={statusOptions}
            placeholder="Select unit"
            // validate={validators.ingredientUnitValidate}
          />

          <button
            onClick={() => formApi.removeValue(`ingredients`, i)}
            type="button"
          >
    Remove
          </button>
        </NestedField>
      </div>);
};

const IngredientAlt = props => {
  const i = props.field[1];
  console.log({ props });


  const statusOptions = [
    {
      label: `Pcs`,
      value: `pcs`,
    },
    {
      label: `Liter`,
      value: `liter`,
    },
    {
      label: `Kilogram`,
      value: `kg`,
    },
  ];
  return (
    <div>
      <label htmlFor={`ingredient-name-${i}`}>
    Ingredient
      </label>
      <Text
        field="ingredient-name"
        id={`ingredient-name-${i}`}
        placeholder="Ingredient name"
        validate={props.validate}
      />
      <label htmlFor={`ingredient-amount-${i}`}>Amount</label>
      <Text
        field="ingredient-amount"
        id={`ingredient-amount-${i}`}
        type="number"
        min="0"
        max="100"
        placeholder="Amount"
        validate={validators.ingredientAmountValidate}
      />
      <label htmlFor={`ingredient-unit-${i}`}>Unit</label>
      <Select
        field="ingredient-unit"
        id={`ingredient-unit-${i}`}
        options={statusOptions}
        placeholder="Select unit"
        validate={validators.ingredientUnitValidate}
      />
    </div>);
};

const Step = (props) => {
  const {
    i, formApi, id, field, initial,
  } = props;
  return initial ? (
    <div>
      <label htmlFor="stepInitial">
                    Step 1
      </label>
      <Text
        field={[ `stepInitial` ]}
        id="stepInitial"
        validate={validators.stepValidate}
      />
    </div>)
    :
    (
      <div>
        <label htmlFor={id}>
                        Step {`${i + 2}`}
        </label>
        <Text
          field={field}
          id={id}
          validate={validators.stepValidate}
        />
        <button
          onClick={() => formApi.removeValue(`steps`, i)}
          type="button"
        >
                        Remove
        </button>
      </div>);
};
class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
    };
  }
  handleFormChange(api) {
    // console.log(formstate, `formstate`);
    // console.log(api, `touched`);
    // console.log(api.errors, `errors`);
    // console.log(api.warnings, `warnings`);
    // console.log(api.successes, `successes`);
    console.log(`API`, api);
  }

  handleSubmit(recipe) {
    console.log(recipe);
    const {
      title, portions, cooktime, description, categories, ingredients, ingredientsInitial, steps, stepInitial,
    } = recipe;
    const initialIngredients = ingredientsInitial
      ? [ ingredientsInitial ]
      : null;
    const combinedIngredients = ingredients
      ? [ ...initialIngredients, ...ingredients ]
      : initialIngredients;
    const initialSteps = stepInitial ? [ stepInitial ] : null;
    const combinedSteps = steps ? [ ...initialSteps, ...steps ] : initialSteps;
    const cleaned = {
      title,
      portions,
      cooktime,
      description,
      categories,
      ingredients: combinedIngredients,
      steps: combinedSteps,
    };
    this.setState({
      recipe: cleaned,
    });
  }

  render() {
    console.log(this.state.recipe);
    const style = {
      display: `none`,
    };
    const categories = [
      `Beef`,
      `Pasta`,
      `Pork`,
      `Fish`,
      `Veggie`,
      `Dessert`,
    ];
    const statusOptions = [
      {
        label: `Pcs`,
        value: `pcs`,
      },
      {
        label: `Liter`,
        value: `liter`,
      },
      {
        label: `Kilogram`,
        value: `kg`,
      },
    ];
    return (
      <div>
        <h1>Add Recipe</h1>
        <Form onSubmit={recipe => this.handleSubmit(recipe)}>
          {formApi => (
            <div>
              <form onChange={this.handleFormChange(formApi)} onSubmit={formApi.submitForm} id="addrecipe-form" className="recipe-form">
                <div className="form__recipe-item">
                  <h3>General Recipe Options</h3>
                  <label htmlFor="title">Recipe Name</label>
                  <Text
                    id="title"
                    field="title"
                    placeholder="ex. Jambalaya"
                    type="text"
                    className="recipe-title"
                    validate={validators.titleValidate}
                  />
                  <label htmlFor="portions">Portions</label>
                  <Text
                    id="portions"
                    field="portions"
                    placeholder="ex. 2"
                    type="number"
                    min="0"
                    max="12"
                    step="1"
                    validate={validators.portionsValidate}
                  />
                  <label htmlFor="cooktime">Cooktime in minutes</label>
                  <Text
                    id="cooktime"
                    field="cooktime"
                    placeholder="ex. 45"
                    type="number"
                    min="0"
                    max="300"
                    step="1"
                    validate={validators.cooktimeValidate}
                  />
                  <label htmlFor="description">Description of the recipe.</label>
                  <TextArea
                    id="description"
                    field="description"
                    placeholder="ex. Spicy dish that goes well with a cool lager."
                    type="text"
                    maxLength="256"
                    wrap="soft"
                    rows="5"
                    cols="25"
                    validate={validators.descriptionValidate}
                  />
                  <label htmlFor="image">Upload an image</label>
                  <Text
                    id="image"
                    field="image"
                    placeholder="ex. 45"
                    type="file"
                    accept="image/*"
                  />
                </div>
                <div className="form__recipe-item">
                  <h3>Categories</h3>
                  <div className="categories">
                    <NestedField
                      field="categories"
                      className="recipe-categories"
                      validate={validators.categoriesValidate}
                    >
                      {categories.map(category => {
                        const isSelected = formApi.values.categories && !!formApi.values.categories[category]
                          return (<div key={category}>
                            <label
                              htmlFor={category}
                              style={{ 
                                color: `${isSelected ? "#82bf84" : "black"}`, 
                                fontWeight: `${isSelected ? `700` : `400`}` }}
                            >{category}
                            </label>  
                            <Checkbox field={category} id={category} style={{opacity: "0"}}/>
                          </div>);
                      })}
                      {
                        formApi.touched.categories && formApi.errors
                          ? <div style={{ color: `crimson`, fontWeight: `700` }}>{formApi.errors.categories || null}</div>
                          : formApi.warnings
                            ? <div style={{ color: `gold`, fontWeight: `700` }}>{formApi.warnings.categories || null}</div>
                            : null
                      }
                    </NestedField>
                  </div>
                </div>
                <div className="form__recipe-item ingredients">
                  <h3>Ingredients</h3>
                  {/* <Ingredient
                    i=""
                    statusOptions={statusOptions}
                    field={[ `ingredientsInitial` ]}
                    initial
                  />
                  {formApi.values.ingredients &&
                  formApi.values.ingredients.map((ingredient, i) => (
                    <Ingredient
                      i={i}
                      statusOptions={statusOptions}
                      formApi={formApi}
                      key={`ingredient${i}`}
                      initial={false}
                    />
                  ))}
                  <button
                    onClick={() => formApi.addValue(`ingredients`, ``)}
                    type="button"
                  >
                  Add Ingredient
                  </button> */}
                  {
                    formApi.values.ingredients &&
                    formApi.values.ingredients.map((ing, i) => (
                      <div key={`ingredient${i}`}>
                        <NestedField
                          field={[ `ingredients`, i ]}
                          component={IngredientAlt}
                          validate={validators.ingredient}
                        />
                        <div>{formApi.errors && formApi.errors.ingredients && `Error`}</div>
                      </div>
                      ))}
                  {
                    (!formApi.values.ingredients || formApi.values.ingredients.every(i => !!i[`ingredient-name`])) &&
                    <NestedField
                      field={[ `ingredients`, (formApi.values.ingredients && formApi.values.ingredients.length) || 0 ]}
                      component={IngredientAlt}
                      validate={validators.ingredient}
                    />
                  }
                </div>
                <div className="form__recipe-item steps">
                  <h3>Cooking steps</h3>
                  <Step i="" initial />
                  {formApi.values.steps &&
                  formApi.values.steps.map((step, i) => (
                    <Step i={i} key={`step${i}`} formApi={formApi} id={`steps-${i}`} field={[ `steps`, i ]} initial={false} />
                  ))}
                  <button
                    onClick={() => formApi.addValue(`steps`, ``)}
                    type="button"
                  >
                  Add Step
                  </button>
                </div>
                <button type="submit">
                  Submit
                </button>
              </form>
            </div>
          )}
        </Form>
      </div>
    );
  }
}

export default AddRecipe;
