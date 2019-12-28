// function gemstones(arr){
// var types=[...new Set(...arr)]
// var count=[]
//   types.forEach(letters=>{
//   arr.every(part=>
//   part.includes(letters))
//   count.push(letters)
// })
// return count;  //[...new Set(...arr)]
// }
// gemstones([ 'abdde', 'bad', 'eeabg' ]) //return matched letters


// function gemstones(arr){
//   var count=0
// var types=[...new Set(...arr)]
// types.forEach(letters=>{
//   arr.every(part=> part.includes(letters)) ? count++ : false
// })
// return count
// }
// gemstones([ 'abcdde', 'baccd', 'eeabg' ])  //ab(2) is matched in 
// //print the repeated elemnt count in the each array position which is matched 


// function alternate(s){
// var count=0
//   for(var i=0;i<s.length;i++){
//        if(s[i]==s[i+1]){
//          count++
//        }
//   }
// return count;
// }
// alternate("AAABBB")
// //ABABABAB 0 count
// //AAABBB  4count
// //count the duplicates


// --------------------------------------------------------------

function beautifulBinaryString(s){

    return (s.match(/010/g) || []).length
    
    }
    // beautifulBinaryString('0101010')
    beautifulBinaryString('01100')