# stprj-expression-unit-test
## How to prepare:
### Prepare the repository
- Install [npm](https://www.npmjs.com/get-npm)
- ```git clone <this respository>```
- Install dependecies with ```npm install```

### Add your code
- If your customization area is under version control, clone it to the folder ```customizationArea``` with ```git clone <repository> customizationArea```
- If your customization area is not under version control, copy it into the folder ```customizationArea```


- If you want to paste in your expressions directly from the Product Editor, you have to paste them into the file located at `customizationArea/integration/externalProduct/customJSFunctions.js` and put it into a named function

#### Example
 Your expression:
 ```tag("$red")```

 Put it into the `customJSFunctions.js` like this:
> ```
> function myFunction(){
>   tag("$red")
> }
> ```
> Then you can use the function in the test file as myFunction()
- This library reads the file `customJSFunctions.js` from ```customizationArea/integration/externalProduct/customJSFunctions.js```. You can change that path in the `config.json`

## How to write tests:
- This framework is based on  [sinon](http://sinonjs.org/) and [mocha](https://mochajs.org/). In order to use a different framework than `mocha`, adjust the  start command inside the `package.json`.
- It is possible to use libraries like [chai](http://chaijs.com/api/) by simply installing it as a dependency and `require`ing it.
- Use our [example repository](https://github.com/OpusCapita/stprj-expression-unit-test-examples) for in-depth examples and documentation.
- All functions usually available within an expression, like `term` and `boilerplate`, are set up as [sinon stubs](http://sinonjs.org/). See the example repository for details.

## How to use
- Type `npm start` to run the tests

## Notes
- This test suite does not support ES6 features in expressions.
<<<<<<< HEAD
- This test suite does currently not support the `format` functions from PIM.
- This test suite works since PIM 8.8
=======
- This test suite does currently not support the `format` functions from PIM..
- This test suite supports PIM version 8.7 and below
>>>>>>> 8dac54fec6314125b2c8f4ca2bdca1a9800d0cbf

## Contributing
We are happy to accept pull requests.

## Contributors

| [<img src="https://avatars.githubusercontent.com/u/30691117" width="100px;"/>](https://github.com/alexejFroebel) | [**Alexej Froebel**](https://github.com/alexejFroebel)     |
| :---: | :---: |
 [<img src="https://avatars.githubusercontent.com/u/4085533" width="100px;"/>](https://github.com/pflenker) | [**Philipp Flenker**](https://github.com/pflenker) |
