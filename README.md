# Expressions Unit Test Library
A small environment which allows to add unit tests to expressions.

## Set up
### Preconditions
This library is published as a NodeJS module. You can use [`npm`](https://www.npmjs.com/get-npm) or [`yarn`](https://yarnpkg.com/en/docs/install) to install it

#### In case you already have a package.json:
Install the module with  `npm install OpusCapita/pim-integrations-expression-unit-test --save-dev` or `yarn add OpusCapita/pim-integrations-expression-unit-test --dev` and use it as described below (you need to have read-access to the OpusCapita repositories).

#### In case you do not have a package.json:
It is recommended that you add a `package.json` to your project, which lists and handles the JavaScript dependencies. You can use `yarn init` or `npm init` to create one and then proceed as described above. Don't forget to exclude the folder `node_modules` from version control!

#### In case you do not want to have a package.json:
You can install the module with `npm install OpusCapita/pim-integrations-expression-unit-test` or `yarn add OpusCapita/pim-integrations-expression-unit-test`. In this case, you always have to (re-)install the module every time.  Don't forget to exclude the folder `node_modules` from version control!

### Unit test inline expressions
- If you want to paste in your expressions directly from the Product Editor, you have to paste them into a `.js` file  and put it into a named function:

#### Example
 Your expression in PIM:
 ```
 term("$red")
 ```

Create  a new file called `customJSFunctions.js` and wrap it into a named function, like this:
 ```
 function myFunction(){
   term("$red")
 }
 ```
Then you can use the function in the test file as myFunction()

## Writing tests
- This framework is based on  [jest](https://jestjs.io).
- Use our [example repository](https://github.com/OpusCapita/pim-integrations-expression-unit-test-examples) for in-depth examples and documentation.
- All functions which usually are available within an expression, like `term` and `boilerplate`, are set up as [jest-mocks](https://jestjs.io/docs/en/mock-functions). See the example repository for details.
- On the top of your test file, place the following lines:
```
jest.unmock('pim-integrations-expression-unit-test');
const util = require('pim-integrations-expression-unit-test').initalize(options});
eval(util.unparsedExpressions);
```

- The first line makes sure that `jest` does not mock this library
- the second line initializes this library. `options` is a JavaScript object, defined as follows:

```javascript
{
    filePath: "./customizationArea/integration/externalProduct/customJSFunctions.js" //points to the file with the expressions. Default: ./customizationArea/integration/externalProduct/customJSFunctions.js
}
```

- The third line makes the expressions available for test.

## Notes
- PIM does not support ES6 features in expressions.
- This test suite does currently not support the `format` functions from PIM.

## Compatibility
- This test suite works with PIM 8.10

## Contributing
We are happy to accept pull requests.

## Contributors

| [<img src="https://avatars.githubusercontent.com/u/41996712" width="100px;"/>](https://github.com/uwestolz) | [**Uwe Stolz**](https://github.com/uwestolz)     |
| :---: | :---: |
| [<img src="https://avatars.githubusercontent.com/u/36043138" width="100px;"/>](https://github.com/davidbrien) | [**David Brien**](https://github.com/davidbrien)     |
| [<img src="https://avatars.githubusercontent.com/u/30691117" width="100px;"/>](https://github.com/alexejFroebel) | [**Alexej Froebel**](https://github.com/alexejFroebel)     |
 [<img src="https://avatars.githubusercontent.com/u/4085533" width="100px;"/>](https://github.com/pflenker) | [**Philipp Flenker**](https://github.com/pflenker) |
