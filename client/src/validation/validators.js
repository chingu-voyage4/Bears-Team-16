export const titleValidate = value => ({
  error: !value
    ? `Must contain a recipe title.`
    : null,
  warning: value && !/^[a-z][a-z ]+$/gi.test(value)
    ? `Field can only contain between 3 to 25 letters.`
    : null,
  success: value && /^[a-z][a-z ]+$/gi.test(value)
    ? `Thank you for entering a recipe title!`
    : null,
});

export const portionsValidate = value => ({
  error: !value
    ? `Must contain a portions amount.`
    : null,
  warning: value && !/^[0-9]+$/gi.test(value)
    ? `Field can only contain at most 3 digits.`
    : null,
  success: value && /^[0-9]+$/gi.test(value)
    ? `Thank you for entering a portions amount!`
    : null,
});
