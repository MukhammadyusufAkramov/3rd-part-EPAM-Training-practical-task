// addition of various types (string + boolean, string + number, number + boolean)

const string = 'Add of different types '
let number = 100
let boolean = true

let strbl = string +" "+ boolean;
console.log(strbl);

let str = string +""+ number;
console.log(str); 

let nb = number +" is "+ boolean
console.log(nb);


// multiplication of various types (string * boolean, string * number, number * boolean)

const strings = 'Multiple of different types '
let numbers = 100
let booleans = false

// multiple string and boolean
let multstrb = strings *" "* booleans;
console.log(multstrb);

var s1 = "JavaScript is a programming language"
var s2 = s1;
var s2 = true;
console.log(s1);
console.log(s2);

var value = "false";
var results = (value == "false") != Boolean(value);
console.log(results);

// multiple string and nummber 
let strnum = strings *" "* numbers
console.log(strnum);


var name = "Jack";
var age = 22
if (age===21, name==="Jack") {
    console.log("My name is "+name+" and I am "+age);
    console.log(typeof name);
    console.log(typeof age);
}else{
    console.log("error");
}

// multiple number and boolean
let numbool = numbers *" "* booleans
console.log(numbool);


// Divide different types (string / boolean, string / number, number / Boolean)
const divstring = 'Divide of different types '
let divnumber = 50
let divboolean = true

// divide string and boolean
var r = "pofessionalizm" / true
console.log(r);

function test(x) {
    if (x==='a') {
        console.log('result');
        console.log(x);
    } else {
        console.log('false');
    }
}
test('123')


const div = divstring /" "/ divboolean
console.log(div);


// divide string and number
const strnums = divstring /" "/ divnumber
console.log(strnums);

// divide number and boolean
let data = {
    age : 22,
    male : false,
}
console.log(data);
console.log(typeof age);
console.log(typeof male);


// convert string, number, boolean
var a = 'Programming class';
var b = 25;
var c = false;

console.log('convert data types '+ a, b, c );
console.log(typeof a);
console.log(typeof 25);
console.log(typeof false);
