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
  console.error(e);
}
//################################################
//End of the configuration, write your tests below
//Mehr Text mit Referenz auf Sample-Repositor
//Sample-Repository
//An dieser Stelle sind Deine Expressions verfuegbar, Du kannst sie einfach
//mit (methodename) aufrufen.
//contextLanguage ist eine vordefinierte Variable, die Du berschreiben kannst
//term, boilerplate... sind stubs (link auf stub-doku von sinon), die entsprechednd
//konfiguriert werden koennen. Umfassende Beispiele finden sich http://www.google.de http://www.google.de http://www.google.de
