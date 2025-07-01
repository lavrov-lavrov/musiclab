/** @type {import("prettier").Config} */
export default {
  tabWidth: 2, // = indent_size
  useTabs: false, // = indent_style = space
  semi: true, // set ; in thhe end of the lines
  singleQuote: true, // ' instead of "
  trailingComma: 'es5', // commas in the end of objects/arrays (ES5 style)
  bracketSpacing: true, // { foo: bar } vs {foo: bar}
  arrowParens: 'avoid', // (x) => x vs x => x
  endOfLine: 'lf', // = end_of_line
};
