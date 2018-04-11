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
});
