// function climbing(scores,alice){
//  const result=[]; let lastScore=null;    let currentSocreIndex=0; 
//     let lastRank=1;  alice=alice.reverse();
//     alice.forEach((alicevalue,key)=>{
// while(currentSocreIndex<scores.length){
//     let scoreValue=scores[currentSocreIndex];
//     if(alicevalue>=scoreValue){
//       console.log(lastRank)
//        result.push(lastRank);
//        break;  }
//     if(scoreValue!==lastScore){  
//       console.log(scoreValue)      
//         lastRank +=1;         
//         lastScore=scoreValue;   }
// currentSocreIndex +=1;}
// if(currentSocreIndex>=scores.length){
//     result.push(lastRank);}})
//     return result.reverse();}
// climbing([100,100,50,40,40,20,10],[5,25,50,120])

// function hrdulRace(k,arr){
// var newk=Math.max(...arr)
// if(newk>k){
//   return newk-k;
// }
// else{
//   return 0;
// }

// }
// hrdulRace(7,[1 ,6 ,3 ,5 ,2])

// --------------------------------------------------------------
// find the given alphbet number by the orderwise given in 26 numbers
// function designerPdfViewer (h, word) {

//  var charAtIndex=c=>c.charCodeAt(0)-97;

//  var max=word.split('').map((x)=>h[charAtIndex(x)])                //131
//                      .reduce((a,b)=> a>b ? a: b)
// return max*word.length;
// }

// designerPdfViewer([ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ] ,'abc')