export const titleValidate = value => ({
  error: !value
    ? `Must contain a recipe title.`
    : null,
  warning: value && !/^[a-z ]{3,25}$/gi.test(value)
    ? `Field can only contain between 3 to 25 letters.`
    : null,
  success: value && /^[a-z ]{3,25}$/gi.test(value)
    ? `Thank you for entering a recipe title!`
    : null,
});

export const portionsValidate = value => ({
  error: !value
    ? `Must contain a portions amount.`
    : null,
  warning: value && !/^[0-9]{1,2}$/gi.test(value)
    ? `Field can only contain at most 3 digits.`
    : null,
  success: value && /^[0-9]{1,2}$/gi.test(value)
    ? `Thank you for entering a portions amount!`
    : null,
});

export const cooktimeValidate = value => ({
  error: !value
    ? `Must contain a cooking time.`
    : null,
  warning: value && !/^[0-9]{1,3}$/gi.test(value)
    ? `Field can only contain at most 3 digits.`
    : null,
  success: value && /^[0-9]{1,3}$/gi.test(value)
    ? `Thank you for entering a cooking time!`
    : null,
});

export const descriptionValidate = value => ({
  error: !value
    ? `Must contain a description.`
    : null,
  warning: value && !/^[a-z \.]{3,150}$/gi.test(value)
    ? `Field can only contain between 3 to 150 letters.`
    : null,
  success: value && /^[a-z \.]{3,150}$/gi.test(value)
    ? `Thank you for entering a description!`
    : null,
});
