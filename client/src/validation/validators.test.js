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
});
