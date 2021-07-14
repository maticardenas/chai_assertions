const chai = require("chai");

// expect 
const expect = chai.expect;

// expect API examples
let a=1, b=1;
expect(a).to.be.equals(b)

// object/string/boolean
function myObj(){
    return {
        a: 100,
        b: "Hello"
    }
}

x = new myObj(), y = new myObj();
expect(x).to.be.an("Object");
//expect(x).to.be.equals(y, "x and y are not equal");

//deep.equals or deep.equals (for validating the content of the object instead of the object in memory instead)
expect(x).to.be.deep.equals(y, "x and y are not equal");

// chaining expressions
// x is an object; x and y are equal
// keywords -> and, with, but...
expect(x).to.be.an("Object").and.to.be.deep.equals(y);

//arrays
let numbers = [1,2,3,0];
expect(numbers).to.be.an('array').that.includes(3);
