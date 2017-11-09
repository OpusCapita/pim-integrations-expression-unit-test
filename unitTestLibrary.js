//Important, dont change:
const unparsedExpressions = require("./util")
eval(unparsedExpressions.customFunctions)

/*
* At this point, you can do your requires, depending on which test suite you want to use. Also you can manage the includes
* of the functions used for expression. For example if you dont need boilerplate, you can remove it from the imports below.
*/
const chai = require("chai")
const expect = chai.expect
let term = unparsedExpressions.term
let boilerplate = unparsedExpressions.boilerplate
let attributeValue = unparsedExpressions.attributeValue
let attributeValues = unparsedExpressions.attributeValues
let product = unparsedExpressions.product


/*
* At this point, your expressions are available. You can call them with the functionname, like: myFunction().
* contextLanguage is a variable, which you can change. In expressions it is used for example with: "en","de" or "es".
* term, boilerplate and product.getAttributeValue are sinon-stubs, which can be configured like this.
* You can read the sinon documentation here: http://sinonjs.org/
* You can look up many examples at https://github.com/OpusCapita/stprj-expression-unit-test-examples
*/
