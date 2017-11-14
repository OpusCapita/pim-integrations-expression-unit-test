const fs = require("fs")
const sinon = require("sinon")



module.exports.initalize = function(config) {
  let configToUse = config || "../config.json"
  let filePath = require(configToUse).filePath
  let unparsedExpressions =fs.readFileSync(filePath, "UTF-8")
  let contextLanguage = "";
  let contextTag = "";
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
  return {
    term: term,
    boilerplate: boilerplate,
    product: product,
    contextLanguage: contextLanguage,
    contextTag: contextTag,
    unparsedExpressions: unparsedExpressions
  }
}
