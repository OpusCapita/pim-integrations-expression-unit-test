//Important, dont change:
const util = require("./util")
eval(util.unparsedExpressions)

/*
* At this point, you can do your requires, depending on which test suite you want to use. Also you can manage the includes
* of the functions used for expression. For example if you dont need boilerplate, you can remove it from the imports below.
*/
let term = util.term
let boilerplate = util.boilerplate
let attributeValue = util.attributeValue
let attributeValues = util.attributeValues
let product = util.product
let contextLanguage = util.contextLanguage


/*
* At this point, your expressions are available. You can call them with the functionname, like: myFunction().
* contextLanguage is a variable, which you can change. In expressions it is used for example with: "en","de" or "es".
* term, boilerplate and product.getAttributeValue are sinon-stubs, which can be configured like this.
* You can read the sinon documentation here: http://sinonjs.org/
* You can look up many examples at https://github.com/OpusCapita/stprj-expression-unit-test-examples
*/
