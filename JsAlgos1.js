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

//return the biggest numbers from an array
function largestOfFour(arr) {
var result =[];
for (let i = 0; i<arr.length; i++){
  var largeArr= arr[i][0];
  for (let j =1; j< arr[i].length; j++){
    if (arr[i][j] > largeArr){
      largeArr= arr[i][j];
    }
  }
  result[i]= largeArr;
}
  return result;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//check if a   ends with a specified word. negative length menas its going to start fromend and not start like it would normally do.
function confirmEnding(str, target) {
  return str.slice(-target.length)=== target;
}
confirmEnding("Bastian", "n");

//repeating a string 
function repeatStringNumTimes(str, num) {
  var rstr= ""
  while (num > 0){
    rstr = rstr+ str;
    num--;
  }

  return rstr;
}
repeatStringNumTimes("abc", 3);

//truncating a string 
function truncateString(str, num) {
  if (str.length > num){
    return str.slice(0, num) + "..."
    
  }else{
    return str;
  }
  }
truncateString("A-tisket a-tasket A green and yellow basket", 8);

//find if elements in an array pass tru to function rules.
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++){
   num = arr[i];
   if (func(num)){
     return num
   }
  }
   return undefined
  }
findElement([1, 2, 3, 4], num => num % 2 === 0);

//checcking if value of bool is boolean or not 
function booWho(bool) {
  if (typeof bool === "boolean"){
    return true
  }else{
  return false;
}
}
booWho(null);

//strings with mixed cases chnaged to have each word capitalized
function titleCase(str) {
  let words1 = str.toLowerCase()
  let words = words1.split(" ");
  for (let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  };
  return words.join(" ")
}
titleCase("I'm a little tea pot");

//copying into array into another without chnaging its contents 
function frankenSplice(arr1, arr2, n) {
  let arrays= arr2.slice();
  arrays.splice(n, 0, ...arr1)
  return arrays;
}
 frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(arr) {
return arr.filter(element => Boolean(element) === true)
}
bouncer([7, "ate", "", false, 9]);

//sort an array,insert a number and find the index of that number.
function getIndexToIns(arr, num) {
  if (arr.indexOf(num)  === -1){
    arr.push(num);
  }
  let newArr= arr;
  newArr.sort(
    function(a,b){
    return a-b
    })
    return newArr.indexOf(num);
}
getIndexToIns([40, 60], 50);

//checking if string in first elemnt matches string in scond element of array
function mutation(arr) {
  let elem1= arr[0].toLowerCase();
  let elem2= arr[1].toLowerCase();

  for (let i = 0; i < elem2.length; i++){
   let match = elem1.indexOf(elem2[i])
    if (match === -1){
    return false
    }
  }
  return true;
}
mutation(["hello", "hey"]);

function chunkArrayInGroups(arr, size) {
  var group = [];   
  while (arr.length > 0) {
   group.push(arr.splice(0, size));
 }
 return group;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
