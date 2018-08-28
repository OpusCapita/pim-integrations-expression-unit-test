const fs = require("fs")



module.exports.initalize = function(options) {
  let filePath = options ? options.filePath : "./customizationArea/integration/externalProduct/customJSFunctions.js"
  let unparsedExpressions =fs.readFileSync(filePath, "UTF-8")
  let contextLanguage = "";
  let contextTag = "";
  let term = jest.fn()
  let boilerplate = jest.fn()
  let product = {
    attributeValue: jest.fn()
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
