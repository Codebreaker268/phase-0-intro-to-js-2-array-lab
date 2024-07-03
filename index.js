// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
   
};
function destructivelyPrependCat(){
    cats.unshift("Bob");
};
function destructivelyRemoveLastCat(){
    cats.pop();
};
function destructivelyRemoveFirstCat(){
    cats.shift();
};
function appendCat(name){
   return [...cats,name];
    
}

let catNow=appendCat("Broom");
function prependCat(name){
    return ["Arnold",...cats];
};
let preCat=prependCat("Arnold");

function removeLastCat(){
    return cats.slice(0,cats.length-1);
};
let catNew=removeLastCat();
function removeFirstCat(){
    return cats.slice(1);
};
let slicesCat=removeFirstCat();
