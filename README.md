# JS-Programs

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
arrs.sort((a, b) => {
    if (a === 0) return 1;
    if (b === 0) return -1;
    return a - b;
});

console.log(arrs);
  console.log(arrs)

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
