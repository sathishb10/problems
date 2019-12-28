function hackerrankInString(s) {
    var str="hackerrank"
    if(s.length<str.length){
      return "No"
    }
    var j=0;
    for(var i=0;i<s.length;i++){
    if(j<str.length && s.charAt(i)==str.charAt(j)) { 
    
      j++
    }
    }
     return (j == str.length ? "YES" : "NO");
    
    }
     hackerrankInString("hereianmstackerrak")
    
    
    function pangrams(s) {
    var alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    var lowerCase=s.toLowerCase();
    for(var i=0;i<alphabet.length-1;i++){
    
        if(lowerCase.indexOf(alphabet[i])<0){
    
            return "not pangram"
        }
    }
    return "pangram";
    
    }
    
    pangrams("We promptly judged antique ivory buckles for the prize")
    
    
    function weightedUniformStrings(s, queries) {
    
     var stringLength;
        var charIs;
        var charCounting;
        var count=Object.create(null);s.length;
    
        for(var i=0;i<s.length;i++){
          stringLength=s.charCodeAt(i)-96;
          
          if(charIs==stringLength){
            charCounting++
          }
          else{
            charCounting=1
            charIs=stringLength;
             }
              count[stringLength*charCounting]=true;
        }
      var output=[]
      for(var j=0;j<queries.length;j++){
            output.push(count[queries[j]] ? "YES" : "NO")
      }
      return output;
    }
    
    
    weightedUniformStrings("abccddde",[1,3,12,5,9,10])