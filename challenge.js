//string count
const stringLength = (string) => {
  return string.length;
}

//string count
const validateString = (string) => {
    if(string.length < 1 || string.length > 10 || string === "" || string == null) {
        return undefined;
    }
    return string.length;
}

//reverse string
const reverseString = (string) => {
    if(string.length < 1 || string === "" || string == null) {
        return undefined;
    }
    return string.split('').reverse().join('');
};

class Calculator {
  constructor() {}
  add(a, b) {
    if(typeof a === "string" || typeof b === "string") {
        return undefined;
    }
    return a + b;
  }
  subtract(a, b) {
    if(typeof a === "string" || typeof b === "string") {
        return undefined;
    }
    return a - b;
  }
  multiply(a, b) {
     if (typeof a === "string" || typeof b === "string") {
       return undefined;
     }
    return a * b;
  }
  divide(a, b) {
     if (typeof a === "string" || typeof b === "string") {
       return undefined;
     }
    return a / b;
  }
}

//capitalize first letter
const capitalizeFirst = (string) => {
    if(string.length < 1 || string === "" || string == null || typeof string === "number") {
        return undefined;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};


module.exports = {
    stringLength,
    validateString,
    reverseString,
    Calculator,
    capitalizeFirst
}