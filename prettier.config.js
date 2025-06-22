/** @type {import("prettier").Config} */
export default {
  tabWidth: 2, // = indent_size
  useTabs: false, // = indent_style = space
  semi: true, // ставим ; в конце строк
  singleQuote: true, // ' вместо "
  trailingComma: 'es5', // запятые в конце объектов/массивов (по стилю ES5)
  bracketSpacing: true, // { foo: bar } vs {foo: bar}
  arrowParens: 'avoid', // (x) => x vs x => x
  endOfLine: 'lf', // = end_of_line
};
