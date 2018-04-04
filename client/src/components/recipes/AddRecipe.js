import React, { Component } from "react";
import { Form, Text, Checkbox, NestedField, Select, TextArea } from "react-form";

const Ingredient = (props) => {
  const {
    i, statusOptions, formApi, initial, field,
  } = props;
  return initial ?
    (<NestedField field={field}>
      <label htmlFor="ingredient-name-initial">
Ingredient
      </label>
      <Text
        field="ingredient-name"
        id="ingredient-name-initial"
        placeholder="Ingredient name"
      />
      <label htmlFor="ingredient-amount-initial">Amount</label>
      <Text
        field="ingredient-amount"
        id="ingredient-amount-initial"
        type="number"
        min="0"
        max="100"
        placeholder="Amount"
      />
      <label htmlFor="ingredient-unit-initial">Unit</label>
      <Select
        field="ingredient-unit"
        id="ingredient-unit-initial"
        options={statusOptions}
        placeholder="Select unit"
      />
     </NestedField>)
    : (<div key={`ingredient${i}`}>
      <NestedField field={[ `ingredients`, i ]}>
        <label htmlFor={`ingredient-name-${i}`}>
    Ingredient
        </label>
        <Text
          field="ingredient-name"
          id={`ingredient-name-${i}`}
          placeholder="Ingredient name"
        />
        <label htmlFor={`ingredient-amount-${i}`}>Amount</label>
        <Text
          field="ingredient-amount"
          id={`ingredient-amount-${i}`}
          type="number"
          min="0"
          max="100"
          placeholder="Amount"
        />
        <label htmlFor={`ingredient-unit-${i}`}>Unit</label>
        <Select
          field="ingredient-unit"
          id={`ingredient-unit-${i}`}
          options={statusOptions}
          placeholder="Select unit"
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

const Step = (props) => {
  const {
    i, formApi, id, field, initial,
  } = props;
  return initial ? (
    <div>
      <label htmlFor="stepInitial">
                    Step 1
      </label>
      <Text field={[ `stepInitial` ]} id="stepInitial" />
    </div>)
    :
    (<div>
      <label htmlFor={id}>
                        Step {`${i + 2}`}
      </label>
      <Text field={field} id={id} />
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
  handleSubmit(recipe) {
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
    const fixed = {
      title,
      portions,
      cooktime,
      description,
      categories,
      ingredients: combinedIngredients,
      steps: combinedSteps,
    };
    this.setState({
      recipe: fixed,
    });
  }
  render() {
    console.log(this.state.recipe);
    const style = {
      display: `none`,
    };
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
              <form onSubmit={formApi.submitForm} id="addrecipe-form" className="recipe-form">
                <div className="form__recipe-item">
                  <h3>General Recipe Options</h3>
                  <label htmlFor="title">Recipe Name</label>
                  <Text
                    id="title"
                    field="title"
                    placeholder="ex. Jambalaya"
                    type="text"
                    className="recipe-title"
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
                    className="portis"
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
                  />
                  <label htmlFor="description">Description of the recipe.</label>
                  <TextArea
                    id="description"
                    field="description"
                    placeholder="ex. Spicy dish that goes well with a cool lager."
                    type="text"
                    maxlength="256"
                    wrap="soft"
                    rows="5"
                    cols="25"
                  />
                </div>
                <div className="form__recipe-item">
                  <h3>Categories</h3>
                  <NestedField field="categories" className="recipe-categories">
                    <label htmlFor="beef">beef</label>
                    <Checkbox field="beef" id="beef" style={style} />
                    <br />
                    <label htmlFor="fish">fish</label>
                    <Checkbox field="fish" id="fish" style={style} />
                    <br />
                    <label htmlFor="pork">pork</label>
                    <Checkbox field="pork" id="pork" style={style} />
                    <br />
                    <label htmlFor="pasta">pasta</label>
                    <Checkbox field="pasta" id="pasta" style={style} />
                  </NestedField>
                </div>
                <div className="form__recipe-item ingredients">
                  <h3>Ingredients</h3>
                  <Ingredient i="" statusOptions={statusOptions} formApi={formApi} field={[ `ingredientsInitial` ]} initial />
                  {formApi.values.ingredients &&
                  formApi.values.ingredients.map((ingredient, i) => (
                    <Ingredient i={i} statusOptions={statusOptions} formApi={formApi} key={`ingredient${i}`} initial={false} />
                  ))}
                  <button
                    onClick={() => formApi.addValue(`ingredients`, ``)}
                    type="button"
                  >
                  Add Ingredient
                  </button>
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
