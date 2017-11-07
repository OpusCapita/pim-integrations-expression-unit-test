//Start of the configuration, do not change
//############################################
const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const expect = chai.expect
let filePath = require("./config.json").filePath
let customFunctions = fs.readFileSync(filePath, "UTF-8")
let contextLanguage = "de";
let term = sinon.stub()
let boilerplate = sinon.stub()
let getAttributeValue = sinon.stub()
let product = {
  getAttributeValue: getAttributeValue
}
try{
  eval(customFunctions)
}catch(e){
  let errorMsg;
  errorMsg += "An error occured by trying to eval your customJSFunctions.js."
  errorMsg += "Please check your Syntax in the customJSFunctions.js"
  console.error(errorMsg)
  console.error(e);
}
//################################################
//End of the configuration, write your tests below
/*
* At this point, your expressions are available. You can call them with the functionname, like: myFunction().
* contextLanguage is a variable, which you can change. In expressions it is used for example with: "en","de" or "es".
* term, boilerplate and product.getAttributeValue are sinon-stubs, which can be configured like this.
* You can read the sinon documentation here: http://sinonjs.org/
* You can look up many examples at https://github.com/OpusCapita/stprj-expression-unit-test-examples
*/
