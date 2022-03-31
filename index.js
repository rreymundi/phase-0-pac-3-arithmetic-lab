function add(){

};

function subtract(){

};

function multiply(){

};

function divide(){

};

function add(a, b){
    return a + b;
};


function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

let n = 5;

function increment(n){
    return (n += 1);
};

increment(n);

function decrement(n){
    return (n -= 1);
};

decrement(n);

let string = 20;

function makeInt(string){
    return parseInt(string, 10);
};

makeInt(string);

function preserveDecimal(string){
    return parseFloat(string);
}

preserveDecimal(string);