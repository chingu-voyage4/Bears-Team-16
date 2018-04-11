import * as validators from './validators';

describe(`validators`, () => {
  it(`should validate the title`, () => {
    expect(validators.titleValidate()).toEqual({
      error: `Must contain a recipe title.`,
      warning: null,
      success: null,
    });
    expect(validators.titleValidate(`234dkljsf`)).toEqual({
      error: null,
      warning: `Field can only contain between 3 to 25 letters.`,
      success: null,
    });
    expect(validators.titleValidate(`Jambalaya`)).toEqual({
      error: null,
      warning: null,
      success: `Thank you for entering a recipe title!`,
    });
  });

  it(`should validate amount of portions`, () => {
    expect(validators.portionsValidate()).toEqual({
      error: `Must contain a portions amount.`,
      warning: null,
      success: null,
    });
    expect(validators.portionsValidate(`234dkljsf`)).toEqual({
      error: null,
      warning: `Field can only contain at most 3 digits.`,
      success: null,
    });
    expect(validators.portionsValidate(`3`)).toEqual({
      error: null,
      warning: null,
      success: `Thank you for entering a portions amount!`,
    });
  });

  it(`should validate cooking time`, () => {
    expect(validators.cooktimeValidate()).toEqual({
      error: `Must contain a cooking time.`,
      warning: null,
      success: null,
    });
    expect(validators.cooktimeValidate(`2319`)).toEqual({
      error: null,
      warning: `Field can only contain at most 3 digits.`,
      success: null,
    });
    expect(validators.cooktimeValidate(`32`)).toEqual({
      error: null,
      warning: null,
      success: `Thank you for entering a cooking time!`,
    });
  });

  it(`should validate description`, () => {
    expect(validators.descriptionValidate()).toEqual({
      error: `Must contain a description.`,
      warning: null,
      success: null,
    });
    expect(validators.descriptionValidate(`d4ks`)).toEqual({
      error: null,
      warning: `Field can only contain between 3 to 150 letters.`,
      success: null,
    });
    expect(validators.descriptionValidate(`Dear you are a lucky bastard.`)).toEqual({
      error: null,
      warning: null,
      success: `Thank you for entering a description!`,
    });
  });

  it(`should validate ingredient name`, () => {
    expect(validators.ingredientNameValidate()).toEqual({
      error: `Must contain an ingredient name.`,
      warning: null,
      success: null,
    });
    expect(validators.ingredientNameValidate(`dk4s`)).toEqual({
      error: null,
      warning: `Field can only contain between 3 to 25 letters.`,
      success: null,
    });
    expect(validators.ingredientNameValidate(`Carrots`)).toEqual({
      error: null,
      warning: null,
      success: `Thank you for entering a name for the ingredient!`,
    });
  });

  it(`should validate ingredient amount`, () => {
    expect(validators.ingredientAmountValidate()).toEqual({
      error: `Must contain an ingredient amount.`,
      warning: null,
      success: null,
    });
    expect(validators.ingredientAmountValidate(`dk4s`)).toEqual({
      error: null,
      warning: `Field can only contain at most 2 digits.`,
      success: null,
    });
    expect(validators.ingredientAmountValidate(`34`)).toEqual({
      error: null,
      warning: null,
      success: `Thank you for entering an amount!`,
    });
  });
});
