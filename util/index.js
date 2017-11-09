const fs = require("fs")
const sinon = require("sinon")
let filePath = require("../config.json").filePath
let unparsedExpressions = fs.readFileSync(filePath, "UTF-8")
let contextLanguage = "";
let term = sinon.stub()
let boilerplate = sinon.stub()
let attributeValue = sinon.stub()
let attributeValues = sinon.stub()
let product = {
  attributeValue: attributeValue,
  attributeValues: attributeValues
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
  attributeValues: attributeValues,
  attributeValue: attributeValue,
  product: product,
  contextLanguage: contextLanguage,
  unparsedExpressions: unparsedExpressions
}
