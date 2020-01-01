function finddigits(n){
    var kk=n.toString()
    var count=0
    for(var i=0;i<kk.length;i++){
    
      if(n%kk[i]==0){
        count++
      }
    }
    return count;
    }
    finddigits(1012)
    
    // ------------------------------------------------
    
    function factorial(n){
      var n=BigInt(n)
    var result=BigInt(1)
      for(let i=n;i>0;i--){
        result =result*i
      }
    return result.toString();
    }
    factorial(25)
    
    // ------------------------------------------------------
    
    //written the by deletep and append based on  k value; k is  if changing of the string is match k value returns yes.
    function appendAndDelete(s, t, k) {
    
    if(s.endsWith(t) || t.endsWith(s) ||s.length+t.length<=k){
      return "YES"
    }
    var count=0
    for(var i=0;i<s.length;i++){
      if(s[i]==t[i]){
        count++
      }
      else{
        break;
      }
    }
      if(((s.length-count)+ (t.length-count))===k){
        return "YES"
      }
      else{
        return "NO"
      }
    }
     appendAndDelete("ashley","ash",2)
    // appendAndDelete("aba","aba",7)
    
    // --------------------------------------------------------
    
    //finding the squares in betwen the  number number
    function squares(a, b) {
    var num1=Math.ceil(Math.sqrt(a));
    //console.log(num1)
    var num2=Math.floor(Math.sqrt(b));
    var count=0
    for(var i=num1;i<=num2;i++){
      if(Number.isInteger(i)){
    
        count++
      }
    }
    return count;
    
    }
    //squares(3,9)
    squares(17,24)
    
    // -----------------------------------------------------------------
    
    // https://www.hackerrank.com/challenges/library-fine/submissions/code/131658346
    
    
    
    function nonDivisibleSubset(k, s) {
        // Write your code here
        let k2 = Math.floor(k / 2) 
       
         let remCount = Array(k + 1).fill(0);
      
     s.forEach(n => {
              remCount[n % k]++
          
        })
        
        if (remCount[0] > 0) {
            remCount[0] = 1
        }
      
        if (k % 2 == 0 && remCount[k2] > 0) {
            remCount[k2] = 1
        }
    
        let count = 0
     
        for (let i = 0; i <= k2; i++) {
            count += Math.max(remCount[i], remCount[k - i])
        }
    
      return count
    }
    // nonDivisibleSubset(3,[1,7,2,4])
    // ----------------------------------------------------------------------
    
    // // find the most repeated chartecr when it  repetation is based on the n value 
    // The first "aba" n=10 letters of the infinite string are abaabaabaa. Because there are  a's, we print  on a new line.
    
    // // if string repaetes split will match the repeated string 
    // https://www.hackerrank.com/challenges/repeated-string/problem
    
    // const repeatedString = (s, n) => {
    
    
    //     const countA = s => s.split('a').length-1;
    //     console.log(countA)
    //     var k="aaaka"
    // console.log(s.split('a'))
    //     let len = s.length; //3
    //     // console.log(len)
    //     let reps = Math.floor(n / len);
    //      let remainder = s.slice(0, n % len);  //a
    // console.log(countA(k))
    
    //     return reps * countA(s) + countA(remainder);
    
    
    // };
    
    // repeatedString("aba",10)
    // function repeatedString(s, n){
    //     var countA=s=>s.split('a').length-1; 
    //     let len= s.length  //3
      
    //     let  fl=Math.floor(n/len);  //3 10/3=3
     
    //     let remainder=s.slice(0,n%len);    //10%3  //a
    // // console.log(countA(s)) //2 
    // console.log(countA(remainder)) // 1
    // return  fl*countA(s)+countA(remainder);  //3*2
    
    // }
    // repeatedString("aba",10)
    
    
    // 0 2nd 0
    // 1 1st 1
    // 2 2nd 3
    // 3 1st 4
    
    // ------------------------------------------------------------------
    function cluds(n){
      var count=0
      for(var i=0;i<n.length-1;i++){
        console.log(i+"m")
         if(n[i]===1){
          break;
        }
        if(n[i+2]<1){
          // console.log(i)
          console.log(count + " 1st " + i)
          count++
         i=i+1;
        continue;
        }
        if(n[i+1]<1){
          // console.log(i)
          console.log(count +" 2nd " + i)
          count++
           continue;
        } 
      }
      return count;
    
    }
    // cluds([0, 0 ,1 ,0 ,0 ,1 ,0])
    
    // ------------------------------------------------
    function equlizer(n){
      var finalcount=0
      n.map((firstnumber)=>{
    // console.log(firstnumber+"fff")
        var count=0
        n.map((secondnumber)=>{
          // console.log(secondnumber+"s")
        if(firstnumber==secondnumber){
          count++
          if(finalcount<count){
            finalcount=count;
          }
        }
        })
      })
      var kk=n.length-finalcount;
      return kk
    
    }
    // equlizer([3, 3, 2 ,1 ,3])
    
    // --------------------------------------------------------------------
    
    