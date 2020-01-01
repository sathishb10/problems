
const numbers = [6,2,8,9,4,5,];
function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
const length=array.length;
const middle=Math.floor(length/2)
 //console.log(middle);
const left=array.slice(0,middle);
//console.log("left"+left);
const right=array.slice(middle);
//console.log("right"+right);
  return merge(
    mergeSort(left),
    mergeSort(right)
  )

}

function merge(left, right){
  const result=[];
  let leftIndex=0;
  let rightIndex=0;
  console.log(left); //2649
  //console.log(right); //8,2,7,
  while(leftIndex<left.length && rightIndex<right.length){
if(left[leftIndex]<right[rightIndex]){
  // console.log("le"+left[leftIndex]);
  result.push(left[leftIndex]);
  leftIndex++
}
else{
  //console.log("re"+right[rightIndex]);
  result.push(right[rightIndex]);
  rightIndex++
}
  }
//console.log("hjh"+left.slice(leftIndex))
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


const answer = mergeSort(numbers);
console.log(answer);

// ------------------------------------------------------------
// const numbers = [99, 44, 6, 2, 1, 5,];

function bubbleSort(array) {
  const length=array.length;
  for(let i=0;i<length;i++){
    for(let j=0;j<length;j++){
if(array[j]>array[j+1]){
  //swap
let temp=array[j]  //99
//console.log(temp);
array[j]=array[j+1];  //44
//console.log(array[j])
array[j+1]=temp;  //99
//console.log(array[j+1]);}
}
console.log(array)
    }
    console.log("kkk")
  }

}

// bubbleSort(numbers);
// console.log(numbers);

// --------------------------------------------------------
function  quicksort(arr){
  if(arr.length<=1)
  {
    return arr;
  }
  var pivote=arr[arr.length-1]

  var left=[];
  var right=[];
  for(var i=0;i<arr.length-1;i++){
    if(arr[i]<pivote){
      left.push(arr[i])
    }
    else{
      right.push(arr[i])
    }
  }
   return [...quicksort(left),pivote,...quicksort(right)]
    var pivote=arr[arr.length-1];  
}
//  var array=[3,5,78,1,9,6,2]
//  quicksort(array);

// -----------------------------------------------------
function insertionSort1(n, arr) {

    for(var i=1;i<n;i++){
      var temp=arr[i]

      j =i-1;
      while(j>=0 && arr[j]>temp){
        arr[j+1]=arr[j]
        j--
        console.log(arr.join(''))
      }
      arr[j+1]=temp

    }
    console.log(arr.join(''))


}
// insertionSort1(5,[2 ,4 ,6 ,8 ,3])
// --------------------------------------------------------------
function median(arr){
arr.sort((a,b)=>a-b)
var kk=Math.floor(arr.length/2)
// console.log(kk)

return arr[kk]
}
// median([0 ,1 ,2 ,4 ,6 ,5 ,3])


// -----------------------------------------------------------
function closestNumbers(arr) {
arr.sort((a,b)=>a-b)
var temp=arr[1]-arr[0]
for(var i=2;i<arr.length;i++){
if(arr[i]-arr[i-1]<temp){
  temp=arr[i]-arr[i-1]
  result=[arr[i-1],arr[i]]
}
  else if( arr[i]-arr[i-1]==temp){
 result.push(arr[i-1])
    result.push(arr[i])
   
  }
}
return result;
}


// closestNumbers([-20 ,-3916237, -357920, -3620601, 7374819, -7330761 ,30 ,6246457 ,-6461594 ,266854 ])
// closestNumbers([
// -20 ,-3916237, -357920, -3620601, 7374819, -7330761, 30 ,6246457, -6461594 ,266854, -520, -470])


// --------------------------------------------------



// function bigsorting(unsorted){
// const result=unsorted.sort((a,b)=>{
//   if(a.length!==b.length){
//   // console.log(a.length +" "+b.length)
//     return a.length-b.length;
//   }
//   else{
//     for(let i=0;i<a.length;i++){
//         //  console.log(a[i]+" "+b[i])
//          if(parseInt(a[i]) !== parseInt(b[i])){   
//           return parseInt(a[i]) - parseInt(b[i]);
//     }   
//   }
// }
// });
// return result;  
// }
// bigsorting(['31415926535897932384626433832795', '1', '3', '10', '3', '5'


// -----------------------------------------------------



// function countingSort(arr) {
//     return arr.reduce((p, c) => {
//         p[c]++;
//         return p;
//     }, new Array(100).fill(0));
// }
// counting of the number 

// function countingSort(arr) {
//   let result=[]
//   for(var index=0;index<100;index++){
//     result[index]=0;
//   }
// for(let i=0;i<arr.length;i++){
//   result[arr[i]]=result[arr[i]]+1
// }
// return result;
// }
  //  countingSort([45,58,89,4,4,7,8,8,41,,9,5])

  // -------------------------------------------------------------


  function countingSort(arr) {

arr.sort((a,b)=>a-b)
return arr;

}

// countingSort(
//     [ 1,
//   25,
//   73,
//   1,
//   98,
//   73,
//   56,
//   84,
//   86,
//   57,
//   16,
//   83,
//   8,
//   25,
//   81,
//   56,
//   9,
//   53,
//   98,
//   67,
//   99,
//   12,
//   83,
//   89,
//   80,
//   91,
//   39,
//   86,
//   76,
//   85,
//   74,
//   39,
//   25,
//   90,
//   59,
//   10,
//   94,
//   32,
//   44,
//   3,
//   89,
//   30,
//   27,
//   79,
//   46,
//   96,
//   27,
//   32,
//   18,
//   21,
//   92,
//   69,
//   81,
//   40,
//   40,
//   34,
//   68,
//   78,
//   24,
//   87,
//   42,
//   69,
//   23,
//   41,
//   78,
//   22,
//   6,
//   90,
//   99,
//   89,
//   50,
//   30,
//   20,
//   1,
//   43,
//   3,
//   70,
//   95,
//   33,
//   46,
//   44,
//   9,
//   69,
//   48,
//   33,
//   60,
//   65,
//   16,
//   82,
//   67,
//   61,
//   32,
//   21,
//   79,
//   75,
//   75,
//   13,
//   87,
//   70,
//   33 ])