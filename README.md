# stprj-expression-unit-test
## How to prepare:
- Install [npm](https://www.npmjs.com/get-npm)
- ```git clone <this respository>```
- Install dependecies with ```npm install```
- If your customization area is under version control, clone it to the folder ```customizationArea``` with ```git clone <repository> customizationArea```
- If your customization area is not under version control, copy it into the folder ```customizationArea```
- This library reads the file ```customJSFunctions.js``` from ```customizationArea/integration/externalProduct/customJSFunctions.js```. You can change that path by changing the ```config.json```
- If you want to paste in your expressions directly from the product, you have to paste them into the customJSFunctions.js file and put it into a named function

## How to write tests:
- This framework uses Sinon, chai and expect, you can read Docs or watch Tutorials to know how to use them
- Also you can see examples how to write tests with this framework at this [repository](https://github.com/OpusCapita/stprj-expression-unit-test-examples.git)
- All functions you can use in expressions are pre-defined, so that it wont create errors if you just include it. You can see how to change the behavior of this functions in the example repository shown above.

## pre-defined functions:
- ```contextLanguage```: Is set to "de" if not changed
- ```term()```: Returns "" if not overwritten
- ```boilerplate()```: Returns "" if not overwritten
- ```product.getAttributeValue()```: calls the getAttributeValueStub, which returns a JSON Object with {"value": "value"}, if not overwritten
