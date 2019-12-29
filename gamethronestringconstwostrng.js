// has a wonderful nature it copy the aplphabet but gives output ither it present or not. if present it gives true.
// in our problem there we kept has as a empty. we continuosly add elements it  goes on doing work to delete the repeated element. in it. like a polindrome 

// function gameOfThrones(s) {
// const data=new Set()
// s.split('').forEach(s=>  data.has(s) ? data.delete(s) : data.add(s))

// return data.size > 1 ? 'NO' :'YES'
// }
// gameOfThrones("aaabbbb");
// // https://www.hackerrank.com/challenges/game-of-thrones/problem


// function twoastrings(s1,s2){
// // for(var i=0;i<s1.length;i++){
// // if(s2.includes(s1[i])== true){

// //   return 'Yes'
// // }
// // }
// // return 'NO'
// // }
// return (s1.split('').map(l=>s2.includes(l)).filter(k=>!!k).length) ?"YES" : "NO"


// // !!k).length) ?'YES':'NO'

// }


// twoatringa("hello" ,"world")


function stringConstruction(s) {
    var s=new Set(s.split(''))

    return Array.from(s).length


}
stringConstruction("abab")