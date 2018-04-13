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

export const categoriesValidate = value => {
  // console.log(value);
  const touched = Object.values(value);
  const selected = touched.filter(select => select === true);
  const amount = selected.length;
  console.log(selected, `selectedArr`);
  console.log(amount, `count`);
  return ({
    error: !value || amount === 0
      ? `Must contain a category.`
      : null,
    warning: amount > 0 && amount > 5
      ? `Field can only contain between 1 and 5 categories.`
      : null,
    success: amount > 0 && amount < 6
      ? `Thank you for selecting categories!`
      : null,
  });
};

export const ingredientNameValidate = value => ({
  error: !value
    ? `Must contain an ingredient name.`
    : null,
  warning: value && !/^[a-z ]{3,25}$/gi.test(value)
    ? `Field can only contain between 3 to 25 letters.`
    : null,
  success: value && /^[a-z ]{3,25}$/gi.test(value)
    ? `Thank you for entering a name for the ingredient!`
    : null,
});

export const ingredientAmountValidate = value => ({
  error: !value
    ? `Must contain an ingredient amount.`
    : null,
  warning: value && !/^[0-9]{1,2}$/gi.test(value)
    ? `Field can only contain at most 2 digits.`
    : null,
  success: value && /^[0-9]{1,2}$/gi.test(value)
    ? `Thank you for entering an amount!`
    : null,
});

export const ingredientUnitValidate = value => ({
  error: !value
    ? `Must select an ingredient unit.`
    : null,
  warning: null,
  success: value
    ? `Thank you for entering a unit!`
    : null,
});

export const stepValidate = value => ({
  error: !value
    ? `Must contain a step.`
    : null,
  warning: value && !/^[a-z \.]{3,50}$/gi.test(value)
    ? `Field can only contain between 3 to 50 letters.`
    : null,
  success: value && /^[a-z \.]{3,50}$/gi.test(value)
    ? `Thank you for entering a step!`
    : null,
});
