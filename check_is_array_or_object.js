// check is array or object
function check(ele){
    if(Array.isArray(ele)){
        return true
    }
    else{
        return false
    }
}
console.log(check(["a"]));
console.log(check({name:"ajit",age:21}));