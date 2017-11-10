const fs = require("fs")
const sinon = require("sinon")
let filePath = require("../config.json").filePath
let unparsedExpressions = fs.readFileSync(filePath, "UTF-8")
let contextLanguage = "";
let term = sinon.stub()
let boilerplate = sinon.stub()

let product = {
  attributeValue: sinon.stub(),
  attributeValues: sinon.stub()
}
try{
  eval(unparsedExpressions)
}catch(e){
  let errorMsg;
  errorMsg += "An error occured by trying to eval your customJSFunctions.js."
  errorMsg += "Please check your Syntax in the customJSFunctions.js"
  console.error(errorMsg)
  console.error(e);
}
module.exports = {
  term: term,
  boilerplate: boilerplate,
  product: product,
  contextLanguage: contextLanguage,
  unparsedExpressions: unparsedExpressions
}
