// string match
let a="abcsss";
let b="abcaaa";
function match(a,b){
    if(a[0]!==b[0]){
        console.log("this is not equal")
    }
    if(a.length==b.length){
        for(let i=0;i<a.length;i++){
            let found=false;
        for(let j=0;j<b.length;j++){
    
            if(a[i]==b[j]){
                found=true;
                break;
            }
        }
        if(!found){
            console.log("not equal")
            return;
        }
        }console.log("equal ")
    }
    else{
        console.log("string is not equal")

    }
    
    
}
match(a,b);