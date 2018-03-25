// Helpers
// Flatten seed tmeplate values
// TODO replace with .reduce
export const flattenTemplates = (templates, test = []) => {
  Object.values(templates).forEach(template => {
    Object.values(template).forEach(args => {
      test.push(args);
    });
  });
  return test;
};

// Invert 2D array to test for types
export const invert2D = arr =>
  arr[0].map((col, i) =>
    arr.map(row => row[i]));
