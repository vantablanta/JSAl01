//sum up and find speed of performnace of this function ** not tested;
function sumUp(n){
    let result =0;
    for (let i= 1; i<= n; i++){
        result = result +i;
    }
    return result;
}
start=performance.now();
sumUp(5);
end= performance.now();
end- start;;

//sumUp can be written as 
function sumUp2(n){
    return (n/2)*(1+n)
}

function anArray( array){
    let arr =[];
    let sum= 0;

}
anArray([2,5,7])

//how to sum an array 
arrSum = function(arr){
    arr.reduce(function(a,b){
        return a+b},
        0);
}

