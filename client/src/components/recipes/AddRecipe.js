import React, { Component } from "react";
import { Form, Text, Checkbox, NestedField, Select } from "react-form";

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
    };
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
        <Form onSubmit={recipe => this.setState({ recipe })}>
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
                </div>
                <div className="form__recipe-item">
                  <h3>Categories</h3>
                  <NestedField field="categories">
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
                <div className="form__recipe-item">
                  <h3>Ingredients</h3>
                  {formApi.values.ingredients &&
                  formApi.values.ingredients.map((ingredient, i) => (
                    <div key={`ingredient${i}`}>
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
                          className="mb-4 btn btn-danger"
                        >
                          Remove
                        </button>
                      </NestedField>
                    </div>
                  ))}
                  <button
                    onClick={() => formApi.addValue(`ingredients`, ``)}
                    type="button"
                    className="mb-4 mr-4 btn btn-success"
                  >
                  Add Ingredient
                  </button>
                </div>
                <div className="form__recipe-item">
                  <h3>Cooking steps</h3>
                  {formApi.values.steps &&
                  formApi.values.steps.map((step, i) => (
                    <div key={`step${i}`}>
                      <label htmlFor={`step-name-${i}`}>
                        Step {`${i + 1}`}
                      </label>
                      <Text field={[ `steps`, i ]} id={`step-name-${i}`} />
                      <button
                        onClick={() => formApi.removeValue(`steps`, i)}
                        type="button"
                        className="mb-4 btn btn-danger"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => formApi.addValue(`steps`, ``)}
                    type="button"
                    className="mb-4 mr-4 btn btn-success"
                  >
                  Add Step
                  </button>
                </div>
                <button type="submit" className="mb-4 btn btn-primary">
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
