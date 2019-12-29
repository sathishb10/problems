// //count the number is decressed how many times and incressed how any timws
// function breakingrecords(arr){
// var min=0, max=0, mincount=0,maxcount=0
// let result=[]
//   for(var i=0;i<arr.length;i++){  
//       if(i==0){
//         min=arr[i];
//         max=arr[i]
//       }
//       else{
//         if(min>arr[i]){
//           min=arr[i]
//           mincount++
//         }
//     else if(max<arr[i]){
//       max=arr[i]
//         maxcount++
//         }
//       }
//   }
//   result[0]=maxcount; result[1]=mincount;
// return result;
// }
// breakingrecords([10 ,5 ,20, 20, 4, 5, 2, 25, 1])




// -------------------------------------------------------------------------------------

// https://www.hackerrank.com/challenges/the-birthday-bar/problem
// function birdaycochlate(arr,day,m){
//   var count=0

//   for(var i=0;i<=(arr.length)-m;i++){
//  var sum=0
//         for(var j=0;j<m;j++){
//        // sum =arr[i]+arr[j] //or
//        //console.log(i+ " " +j + " " + arr[i+j] )
//         sum += arr[i + j];        
//         }    
//     if(sum==day){
//       count++
//     }
//   }

// return count;
// }
// birdaycochlate([1, 2, 1, 3, 2], [3], [2])
//birdaycochlate([1 ,1 ,1 ,1 ,1 ,1],[3],[2])
//birdaycochlate([4],[4],[1])


// // ------------------------------------------------------------------------
// divisible by sum of pairs

function divisible(n,k,ar){
    var count=0
    for(var i=0;i<n;i++){
      for(var j=1;j<n;j++){
        if(i<j){
          var a=ar[i] +ar[j]
          if(a%k==0){
            count++
          } }
      }
    }
  return count;
  }
  divisible(6,3,[1 ,3 ,2 ,6 ,1 ,2])