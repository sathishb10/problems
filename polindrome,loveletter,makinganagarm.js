function theLoveLetterMystery(s) {
   
    var count=0;
    var l=Math.ceil(s.length/2);
//  console.log(l)
         for(let i=l;i<s.length;i++){ 
                
         count=count+Math.abs(s.charCodeAt(i)-s.charCodeAt(s.length-i-1))   
        }

         return count;

}
theLoveLetterMystery("abcd")


// abc
// abcba
// abcd
// cba


function palindromeIndex(s) {
     let i=0;
    let j=s.length-1

    while(i<=j){

        if(s[i]==s[j]){

            i++;
            j--;
        }
       else{
           if(s[i+1]===s[j]  && s[i+2]===s[j-1]){

               return i;
           }
           if(s[i]===s[j-1] && s[i+1]===s[j-2]){

               return j;
           }
           }
    }
return -1;
}
palindromeIndex("aaa")

function makingAnagrams(s1, s2) {

    var str=""
    for(var i=0;i<s1.length;i++){
      if(s2.indexOf(s1[i])===-1){
          str=str+s1[i];
      }  
      else{
    
          s2=s2.substring(0,s2.indexOf(s1[i]))+s2.substring(s2.indexOf(s1[i])+1,s2.length);
      }
    }
    return str.length+s2.length
    
    
    }
    