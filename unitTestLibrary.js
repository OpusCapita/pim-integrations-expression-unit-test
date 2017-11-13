//Import and initialize
const util = require("./util").initalize()
eval(util.unparsedExpressions)

//Prepare for expression evaluation
let term = util.term
let boilerplate = util.boilerplate
let product = util.product
let contextLanguage = util.contextLanguage


/*
* At this point, your expressions are available. You can call them either
* directly, or from within your test cases. contextLanguage is a simple
* variable, which you can change. In expressions it is used for example with:
* "en_EN","de_DE" or "es_ES".
* term, boilerplate and product.getAttributeValue are sinon-stubs, and can be
* configured like any other sinon stub. You can read the sinon documentation
* here: http://sinonjs.org/
* You can look up many examples at our example repo:
* https://github.com/OpusCapita/stprj-expression-unit-test-examples
* Happy testing!
*/
