//Do not change anything below
const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const expect = chai.expect
let filePath = require("./config.json").path
let customFunctions = fs.readFileSync(path, "UTF-8")
let contextLanguage = "de";
let term = sinon.stub()
let boilerplate = sinon.stub()
let getAttributeValueStub = sinon.stub()
let product = {
  getAttributeValue: getAttributeValueStub
}
getAttributeValueStub.returns({"value":"value"})
try{
  eval(customFunctions)
}catch(e){
  let errorMsg;
  errorMsg += "An error occured by trying to eval your customJSFunctions.js."
  errorMsg += "Please check your Syntax in the customJSFunctions.js"
  console.error(errorMsg)
}
//Do not change anything above
//Write your tests below this line
