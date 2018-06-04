

/**
 * Class type, use for more precise check of type
 */
class typeChecker {


	/**
	 * 
	 * @param {*} el - The element to test 
	 * @param {Object} options - An object with options
	 */
	static is(el, options = {}){

		
		if(el === null){
			return 'Null'
		}

		if(el === undefined){
			return 'Undefined'
		}

		if(typeof el === 'number' && el+1 / Math.trunc(el+1) === 1){
			return 'Int'
		}

		if(typeof el === 'number' && el+1 / Math.trunc(el+1) > 1){
			return 'Float'
		}


		if(typeof el === 'string' && el.length === 1){
			return 'Char' 
		}

		if(typeof el === 'string' && el.length > 1){
			return 'String' 
		}

		if(typeof el === 'function'){
			return 'Function' 
		}

		if(typeof el === 'symbol'){
			return 'Symbol' 
		}

		if(typeof el === 'boolean'){
			return 'Boolean' 
		}


		if(Array.isArray(el)){
			return 'Array'
		}

		if(typeof el === 'object'){
			if(options.objectInstanceName === undefined || options.objectInstanceName === true){
				console.log(el.constructor.name)	
				return el.constructor.name
			}
			else if ( options.objectInstanceName === false){
				return 'Object'
			}
		}



	}


	/**
	 * 
	 * @param {*} el - Check if the element is null
	 */
	static isNull(el){
		if(typeChecker.is(el) === 'Null'){
			return true
		}
		return false 
	}

	/**
	 * 
	 * @param {*} el - Check if the element is null
	 */
	static isUndefined(el){
		if(typeChecker.is(el) === 'Undefined'){
			return true
		}
		return false 
	}

	/**
	 * 
	 * @param {*} el - Check if the element is a int
	 */
	static isInt(el){
		if(typeChecker.is(el) === 'Int'){
			return true
		}
		return false 
	}

	/**
	 * 
	 * @param {*} el - Check if the element is a float
	 */
	static isFloat(el){
		if(typeChecker.is(el) === 'Float'){
			return true
		}
		return false 
	}

	static isDouble(el){}


	/**
	 * 
	 * @param {*} el - Check if the element is a char
	 */
	static isChar(el){
		if(typeChecker.is(el) === 'Char'){
			return true
		}
		return false 
	}


	/**
	 * 
	 * @param {*} el - Check if the element is a string
	 */
	static isString(el){
		if(typeChecker.is(el) === 'String'){
			return true
		}
		return false 
	}

	/**
	 * 
	 * @param {*} el - Check if the element is a boolean
	 */
	static isBoolean(el){
		if(typeChecker.is(el) === 'Boolean'){
			return true
		}
		return false 
	}

	/**
	 * 
	 * @param {*} el - Check if the element is a function
	 */
	static isFunction(el){
		if(typeChecker.is(el) === 'Function'){
			return true
		}
		return false 
	}

	/**
	 * 
	 * @param {*} el - Check if the element is a Symbol
	 */
	static isSymbol(el){
		if(typeChecker.is(el) === 'Symbol'){
			return true
		}
		return false 
	}


	/**
	 * 
	 * @param {*} el - Check if the element is a array
	 */
	static isArray(el){
		if(typeChecker.is(el) === 'Array'){
			return true
		}
		return false 
	}

	/**
	 * 
	 * @param {*} el - Check if the element is a object
	 */
	static isObject(el){
		if(typeChecker.is(el ,{"objectInstanceName": false}) === 'Object'){
			return true
		}
		return false 
	}

	/**
	 * 
	 * @param {*} el - Check if the element is a instance of
	 * @param {String} instance - The class of instance
	 */
	static isInstance(el, instance = 'Object'){
		if(typeChecker.is(el ,{"objectInstanceName": true}) === instance){
			return true
		}
		return false 
	}

	static isHTML(el){}

	

}

module.exports = {
	typeChecker
}
