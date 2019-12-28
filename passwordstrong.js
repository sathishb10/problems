// function camel(n){
// var k=n.split('')

// var count=0
// for(var i=0;i<k.length;i++){

//  if(k[i]==k[i].toUpperCase()){
//    console.log(k[i])
//  }
// }
// }
// camel("saveChangesInTheEditor")


function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
const c=[/[0-9]/,/[a-z]/,/[A-Z]/,/[!@#$%^&*()-+]/]
          .map(r=>!r.test(password))
          .filter(Boolean).length
       return Math.max(c,6-n)

}
minimumNumber(3,'Ab1')  //#HackerRank
 













