# stprj-expression-unit-test
## How to prepare:
### Prepare the repository
- Install [npm](https://www.npmjs.com/get-npm)
- ```git clone <this respository>```
- Install dependecies with ```npm install```

### Add your code
- If your customization area is under version control, clone it to the folder ```customizationArea``` with ```git clone <repository> customizationArea```
- If your customization area is not under version control, copy it into the folder ```customizationArea```


- If you want to paste in your expressions directly from the product, you have to paste them into the customJSFunctions.js file located at customizationArea/integration/externalProduct/customJSFunctions.js and put it into a named function => Example:
> Your expression:
> ```tag("$red")```
>
> Put it into the customJSFunctions.js like this:
> ```
> function myFunction(){
> tag("$red")
> }
>Than you can use the function in the test file as myFunction()
- This library reads the file ```customJSFunctions.js``` from ```customizationArea/integration/externalProduct/customJSFunctions.js```. You can change that path by changing the ```config.json```
## How to write tests:
- This framework uses [sinon](http://sinonjs.org/), [chai](http://chaijs.com/api/) and [mocha](https://mochajs.org/)
- Also you can see examples how to write tests with this framework at this [repository](https://github.com/OpusCapita/stprj-expression-unit-test-examples)
- All functions you can use in expressions are defined, you just have to set, how they should behave, with [sinon](http://sinonjs.org/)
