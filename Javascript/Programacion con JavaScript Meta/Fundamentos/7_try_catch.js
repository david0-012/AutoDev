function addTwoNums(a,b){
    try{
        if(typeof a !== "number"){
            throw "the first argument is not a number";
        }
        else if(typeof b !== "number"){
            throw "the second argument is not a number";
        }    
        console.log(a+b);
    }catch(err){
        console.log("Error!", err)
    }
}
addTwoNums(5,"5")
console.log("It still works")