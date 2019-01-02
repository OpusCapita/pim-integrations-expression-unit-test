const fs = require("fs")



module.exports.initalize = function(options) {
  let filePath = options ? options.filePath : "./customizationArea/integration/externalProduct/customJSFunctions.js"
  let unparsedExpressions =fs.readFileSync(filePath, "UTF-8")
  global.contextLanguage = "";
  global.contextTag = "";
  global.term = jest.fn()
  global.boilerplate = jest.fn()
  global.product = {
    catalogId: jest.fn(),
    attributeValue: jest.fn(),
    statusId: jest.fn(),
    productIdExtension: jest.fn(),
    productId: jest.fn(),
    supplierId: jest.fn(),
    isMainProdLine: jest.fn(),
    manufacturerId: jest.fn(),
    isPunchout: jest.fn(),
    keywords: jest.fn(),
    isConfigurable: jest.fn(),
    unitOfMeasureId: jest.fn(),
    salesUnitOfMeasureId: jest.fn(),
    validTo: jest.fn(),
    validFrom: jest.fn(),
    extProductId: jest.fn(),
    mfgProductId: jest.fn(),
    manufacturerName: jest.fn()
  }
  try{
    (1, eval)(unparsedExpressions);
  }catch(e){
    let errorMsg;
    errorMsg += "An error occured by trying to eval your customJSFunctions.js."
    errorMsg += "Please check your Syntax in the customJSFunctions.js"
    console.error(errorMsg)
    console.error(e);
  }
}
