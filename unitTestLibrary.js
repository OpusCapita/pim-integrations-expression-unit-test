const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const expect = chai.expect
let path = require("./config.json").path
console.log(path)
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
  console.log(e)
}
//Do not change anything above
//Write your tests below this line



function termTest() {
  let result;
  if (contextLanguage == "de") {
    result = "Diese Hose hat die Farben "
  } else {
    result = "These pants are colored "
  }
  return result + term("$green")+ " " + term("$red")
}
describe("getContextLanguage()",function(){
  it("Returns the contextLanguage", function(){
    let returnValue = getContextLanguage()
    expect(returnValue).to.equal("de")
    contextLanguage = "en"
    returnValue = getContextLanguage()
    expect(returnValue).to.equal("en")
  })
})
describe("termTest()",function(){
  it("Returns the term for the right contextLanguage", function(){
    contextLanguage = "en"
    term.withArgs("$red").returns(contextLanguage == "de" ? "rot" : "red")
    term.withArgs("$green").returns(contextLanguage == "de" ? "gruen" : "green")
    let returnvaule = termTest()
    expect(returnvaule).to.equal("These pants are colored green red")
    contextLanguage = "de"
    term.withArgs("$red").returns(contextLanguage == "de" ? "rot" : "red")
    term.withArgs("$green").returns(contextLanguage == "de" ? "gruen" : "green")
    returnvalue = termTest()
    expect(returnvalue).to.equal("Diese Hose hat die Farben gruen rot")
  })
})
describe("getTerm()",function(){
  it("Calls the function with the right termId",function(){
    let termId = "$myTerm";
    getTerm(termId)
    expect(term.calledWith(termId)).to.equal(true)
  })
})
describe("getBoilerplate()", function(){
  it("Returns the right boilerplate for the boilerplateId",function(){
    let boilerplateId = "myBoilerplate";
    getBoilerplate(boilerplateId)
    expect(boilerplate.calledWith(boilerplateId)).to.equal(true)
  })
})
describe("getAttributeValue()",function(){
  it("It returns the Atrribute Id which was used to call the function",function(){
    let attributeId = 1337
    getAttributeValueStub.returnsArgs(0)
    expect(product.getAttributeValue(attributeId).value).to.equal(attributeId)
  })
})
