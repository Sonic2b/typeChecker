const assert = require('assert')
const { typeChecker } = require('../index')




describe('Type checking test', function(){

	describe('Int test', function(){
		it("Should be return Int type", function(){
			assert.equal(typeChecker.is(42), 'Int')
			
		})
		it("Should be return true", function(){
			assert.equal(typeChecker.isInt(42), true)
		})
	})

	describe('Float test', function(){
		it("Should be return Float type", function(){
			assert.equal(typeChecker.is(42.314), 'Float')
			
		})
		it("Should be return true", function(){
			assert.equal(typeChecker.isFloat(42.314), true)
		})
		it("Should be return false", function(){
			assert.equal(typeChecker.isFloat(42), false)
		})
	})

	describe('Char test', function(){
		it("Should be return Char type", function(){
			assert.equal(typeChecker.is('a'), 'Char')
			
		})
		it("Should be return true", function(){
			assert.equal(typeChecker.isChar('a'), true)
		})
		it("Should be return false", function(){
			assert.equal(typeChecker.isChar('alto'), false)
		})
	})

	describe('Boolean test', function(){
		it("Should be return boolean type", function(){
			assert.equal(typeChecker.is(true), 'Boolean')
			
		})
		it("Should be return true", function(){
			assert.equal(typeChecker.isBoolean(true), true)
		})
		it("Should be return true", function(){
			assert.equal(typeChecker.isBoolean(false), true)
		})
	})

	describe('String test', function(){
		it("Should be return String type", function(){
			assert.equal(typeChecker.is('Salute'), 'String')
			
		})
		it("Should be return true", function(){
			assert.equal(typeChecker.isString('Salute'), true)
		})
		it("Should be return false", function(){
			assert.equal(typeChecker.isString(43), false)
		})
		it("Should be return false", function(){
			assert.equal(typeChecker.isString('A'), false)
		})
	})

	describe('Array test', function(){
		it("Should be return Array type", function(){
			assert.equal(typeChecker.is([3,4,5]), 'Array')
			
		})
		it("Should be return true", function(){
			assert.equal(typeChecker.isArray([3,4,5]), true)
		})
	})
	describe('Object test', function(){
		it("Should be return Object type", function(){
			assert.equal(typeChecker.is({t:4,R:5}), 'Object')
			
		})
		it("Should be return true", function(){
			assert.equal(typeChecker.isObject({t:4,R:'5'}), true)
		})
		it("Should be return typeChecker", function(){
			assert.equal(typeChecker.isObject(new typeChecker(), ), true)
		})
	})
	describe('Instance test', function(){
		it("Should be return Instance name", function(){
			assert.equal(typeChecker.is(new Date()), 'Date')
		})
			
			
		it("Should be return true", function(){
			assert.equal(typeChecker.isInstance(new Date(), 'Date'), true)
		})
	})


	describe('Function test', function(){
		it("Should be return Instance name", function(){
			assert.equal(typeChecker.is(function(){return true}), 'Function')
		})
			
			
		it("Should be return true", function(){
			assert.equal(typeChecker.isFunction(function(){}), true)
		})
	})

})