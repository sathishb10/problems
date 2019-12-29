// function BonAppetit(bill,k,b){
// var sum=0
// for(var i=0;i<b.length;i++){

//   if(b[i]!=b[k]){
//     sum+=b[i]
//   }
// }
// var kk=sum/2;

// if(bill>kk){
// 
//return "Bon Appetit"
// }
// else{
//     return bill-kk
// }
// }
// BonAppetit(7,1,[3 ,10, 2 ,9])

// count the extra charged amount on b
// function bonAppetit(bill, k, b) { 
//    const anna= (b.reduce((a,b)=>a+b,0)-b[k])/2   
//    anna===bill ? console.log("BonAppetit") : console.log(bill-anna)  
// }
//  bonAppetit(12,1,[3 ,10, 2 ,9])
//has to buy the product based on his bill 
//  --------------------------------------------------------------------------------
// 

//counting the pairs of the numbers
// function  sockmerchant(arr){
// var kk= arr.sort((a,b)=> a-b )
// var count=0
//       for(var i=0;i<kk.length;i++){
//         if(kk[i]==kk[i+1]){
//           count++
//           i++
//         }
//       }  
// return count;

// }
// sockmerchant([10 ,20, 20, 10, 10 ,30 ,50, 10, 20])


// ------------------------------------------------------------------------------


// function countingvally(n,s){

//   var altitude=0; var result=0;
// for(var i=0;i<n;i++){
// if(s[i]=='U'){
// altitude++;

// if(altitude==0){
// result++;
// }
// }
// else{
//   //console.log(altitude--);
//   altitude--;
//   }}

//   return result;
// }
// countingvally(8,"DDUUUUDD")

// -----------------------------------------------------------------------

// 1)my logic 9 testcase
// function getMoneySpent(b, key, dri){

//   for(var i=0;i<key.length;i++){
//     var arr=[]
//     for(var j=0;j<dri.length;j++){
//            arr.push(key[i]+dri[j])
//     }
//   }
//  var kk= Math.max(...arr)
//  if(kk<=b){
//    retuen kk
//  }
//  else{
//    return -1;
//  }
// }
// getMoneySpent(10,[3,1],[5,2,8])
//electrical shop

function getMoneySpent(keyboards, drives, b) {
    var moneySpent=-1;
    var temp=0;
    for(var i=0;i<keyboards.length;i++){
  for(var j=0;j<drives.length;j++){
    if( (keyboards[i]+drives[j])<=b){
      temp=keyboards[i]+drives[j]
      moneySpent= temp> moneySpent ? temp : moneySpent
    }
  }
  }
  return moneySpent
  }
  // getMoneySpent([3,1],[5,2,8],10)
  getMoneySpent([4],[5],5)
  
  // ------------------------------------------------------------------------------
  
  // function catandmouse(x,y,z){
  //   let catA= z-x;
  //   let catB=z-y;
  //   let result;
  // if(catA<catb)
  // {
  // return result= "Cat A"
  // }
  // else if(catA>catb)
  // {
  
  //  return result= "Cat B";
  // }
  // else if(catA==catb){
  // return result= "Mouse C"
  
  // }
   
  // }
  
  
  // catandmouse(1,2,3)
  
  
  // ------------------------------------------------------------------
  //pickingf a number by the differnce. 1
  
  function pickingNumbers(a) {
      // Write your code here
     var a=a.sort((a,b)=>a-b)
    // console.log(a)
     var max=0;
    for(var i=0;i<a.length;i++){
      var count=0;
      for(var j=i;j<a.length;j++){
        if(a[j]-a[i]<=1){
          //console.log(a[j]+" "+ j + " "+i+ " "+a[i])
               count++
        }
      }
     // console.log(count)
      max=Math.max(max,count++)
    }
    return max;
  }
  pickingNumbers([4 ,6 ,5 ,3 ,3 ,1])