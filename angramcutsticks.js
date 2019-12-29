// function anagram(s){
//  var n=s.length;
//   if(n%2!==0){
//     return -1;
// }
//  var one=s.slice(0,n/2)
// var two=s.slice(n/2)
// var count=0
// for(let i=0;i<n/2;i++){

//   one.includes(two[i]) ? one=one.replace(two[i],"") : count++
// }
//  return count;
// }
// anagram("aaabbb")


// function cutTheSticks(arr) {
// arr.sort((a,b)=>{
//   return a-b;
// })
// //console.log(arr)[ 1, 1, 2, 2, 3, 3, 3, 4 ]]  //2 4  
// i=0;
// let result=[]
// while(i<arr.length){
//  //console.log(i)
//   result.push(arr.length-i)

//   while(arr[i]===arr[i+1]){
    
//     i++
    
//   }
//   i++
// }
// return result;
// }
// cutTheSticks([1 ,2 ,3 ,4 ,3 ,3 ,2 ,1])

function makingAnagrams(s1, s2) {
    var str=""
    for(var i=0;i<s1.length;i++){
    
    if(s2.indexOf(s1[i])===-1){
      str=str+s1[i];
    }
    else{
     // console.log(s2.indexOf(s1[i]))
      s2=s2.substring(0,s2.indexOf(s1[i]))+s2.substring(s2.indexOf(s1[i])+1 ,s2.length );
    }
    
    }
    return str.length+s2.length
    
    }
    
    makingAnagrams('cde','abc')
    
    