const fs = require('fs');


module.exports.initalize = function (options) {
  const filePath = options ? options.filePath : './customizationArea/integration/externalProduct/customJSFunctions.js';
  const unparsedExpressions = fs.readFileSync(filePath, 'UTF-8');
  global.contextLanguage = '';
  global.contextTag = '';
  global.term = jest.fn();
  global.boilerplate = jest.fn();
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
    manufacturerName: jest.fn(),
  };
  try {
    // This resolves to the call: eval(unparsedExpressions). But with this way, eval is called indirect, which changes the behavior to evaluate to the global context.
    // See: https://stackoverflow.com/questions/9107240/1-evalthis-vs-evalthis-in-javascript
    (1, eval)(unparsedExpressions);
  } catch (e) {
    let errorMsg;
    errorMsg += 'An error occured by trying to eval your customJSFunctions.js.';
    errorMsg += 'Please check your Syntax in the customJSFunctions.js';
    console.error(errorMsg);
    console.error(e);
  }
};
