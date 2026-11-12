# JS-Programs
// move 0 to right
let arr = [0, 2, 6, 1,3, 4, 5, 0];  
 let nonzeroIndex=0;

for(let i=0;i<arr.length;i++){
if(arr[i] !=0){
let temp=arr[i]
  arr[i]=arr[nonzeroIndex]
  arr[nonzeroIndex]=temp
  nonzeroIndex++;
  
}
  
}

  console.log(arr)

//sort arrry
let arrs = [0, 2, 6, 1,3, 4, 5, 0];

for(let j=0;j<arrs.length;j++){
  for(let k=j;k<arrs.length;k++){

  if(arrs[j]>arrs[k]){
    let temp=arrs[j]
    arrs[j]=arrs[k]
    arrs[k]=temp
    
  }
  }
}
//move aero right assending order / sorted arry
arrs.sort((a, b) => {
    if (a === 0) return 1;
    if (b === 0) return -1;
    return a - b;
});

console.log(arrs);
  console.log(arrs)

//move zero right
let ar = [0, 2, 6, 1,3, 4, 5, 0];
let nonzeroIndex1=0;
for(let i=0;i<ar.length;i++){
if(ar[i] ==0){
let temp=ar[i]
  ar[i]=ar[nonzeroIndex1]
  ar[nonzeroIndex1]=temp
  nonzeroIndex1++;
  
}
  
}

  console.log(ar)
//Array Reverse

let arr = [0, 2, 6, 1,3, 4, 5, 0];


let start=0;
let end= arr.length-1;

while(start < end){
let temp=arr[start]
arr[start]=arr[end]
arr[end]=temp
  
  start++;
  end--;
}
console.log(arr)
-----------------------
 //String Reverse
var rev='Sathish Kumar'

console.log(rev.split('').reverse().join())

console.log(rev )

let a='';
 for(let i=rev.length-1;i>=0;i--){
   a =a+rev[i];
 }

  console.log(a)
-----------------

 //reverse words

let rev="Sathish kumar Durai"
let splits=rev.split(" ");
let after=''

console.log(splits[0] )
for(let i=splits.length-1;i>=0;i--){
after =after+" "+splits[i];
  
}
console.log(after.trim())
--------------
  //number is Prime

const num=7;

for(let i=2;i<=num/2;i++){
if(num %i === 0){
  console.log(" not Prime")
}
  
}
--------------------

let str1="Sathish"
let str2="Sathish"

console.log(str1 === str2);  
 

 let str1 = 'listen';
let str2 = 'silent';

let result1 = str1.split('').sort().join('');
let result2 = str2.split('').sort().join('');

if (result1 === result2) {
    console.log("Both strings match");
} else {
    console.log("Strings do not match");

 ---------------------------------------------------
  
}
 
---------------------
 //String Polindrom


let str1="level"
 
 let start=0;
let end=str1.length-1;

while(start <end){

  if(str1[start] != str1[end]){

    console.log("not polindrome")
  }

  start++;
  end--;
}

 //num Polindrom


let num=121
 let rev=0
let copy=num
 

while(num >0){
  let rightmost=num % 10
 
  rev=(rev*10)+rightmost
 
  num=Math.floor(num/10);

   
}

console.log(rev)
  console.log(copy)
console.log(rev===copy)
-------------------------------------
 //fin min num from array


let num= [2,1,4,66,76,877,12]

let max=num[0];
for( const c of num){

  if(max > c){  //min  . for max-->if(max < c){  
    max = c
  }
}
 console.log(max)

------------------------------------

let num= [2,1,4,66,76,877,112]
let secondMax=0;
let max=num[0];
for( const c of num){

  if(max < c){   
    secondMax=max;
    max = c
  } else if( secondMax <c && c < max){
    secondMax=c
  }
}
 console.log(max)
 console.log(secondMax)

-----------------------------

 let num= [2,1,4,66,76,877,112]
let secondMin=0;
let max=num[0];
for( const c of num){

  if(max > c){   
    secondMin=max;
    max = c
  } else if( secondMin <c && c < max){
    secondMin=c
  }
}
 console.log(max)
 console.log(secondMin)

-------------------
let str="HelloWorld"
let result=''
//remove Duplicate char
for( const c of str){
  if(result.includes(c)){
    console.log("duplicate char: "+c)
  } else{
    result +=c
  }
}

--------------
 
 let str="HelloWorld"
 // count char
//
const countmap=new Map();
let count={}
for( const c of str){
   count[c]=(count[c] || 0)+1;
  countmap.set(c, (countmap.get(c) || 0 )+1)
}

console.log(count)
console.log(countmap)

-----------------------------------------------

let num = 1001;
//odd even
if(num % 2==0)
  console.log("even number")

----------------------
 let num = [1,2,3,4,56,6,4,56,22,45,2,57,343,333];
//sum of two

let map=new Map();
let nums={}
for(let i=0;i<num.length;i++){
  for(let j=i+1;j<num.length;j++){

if(num[i]+num[j]==334){

  nums[0]=(num[i])
  nums[1]=(num[j])
}

    
  }
}

console.log(nums)
-------------------
 //fibonosi

let n=10;
let fn=0;
let sn=1;

for(let i=2;i<n;i++){

  let sum=fn+sn;
console.log(sum)
  fn=sn;
  sn=sum;
}

-----------------------
 // Balanced String

let str = "{[()]}";

let stack = [];

let pairs = {
    ')': '(',
    '}': '{',
    ']': '['
};

let isBalanced = true;

for (const c of str) {

    if (c === '(' || c === '{' || c === '[') {
        stack.push(c);
    }

    else if (c === ')' || c === '}' || c === ']') {

        if (stack.length === 0 || stack.pop() !== pairs[c]) {
            isBalanced = false;
            break;
        }
    }
}

if (stack.length !== 0) {
    isBalanced = false;
}

console.log(isBalanced ? "Balanced" : "Not Balanced");

-------------------

 let arr = [10, 20, 30, 40, 50, 60, 70];

let target = 50;

let start = 0;
let end = arr.length - 1;

let found = false;

while (start <= end) {

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        console.log("Element found at index: " + mid);
        found = true;
        break;
    }

    else if (arr[mid] < target) {
        start = mid + 1;
    }

    else {
        end = mid - 1;
    }
}

if (!found) {
    console.log("Element not found");
}












 



 

 
