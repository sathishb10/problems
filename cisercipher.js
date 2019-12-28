

function caesarCipher(s, k){
    var newstr=""
    for(var i=0;i<s.length;i++){
    let char=s[i];
    
    if(char.match(/[a-z]/i)){
      // console.log(char)
      var num=s.charCodeAt(i)
    if(num>=65 && num<=97){
      char=String.fromCharCode((((num-65)+k)%26)+65 )
    }
    else if(num>=97 && num<=122){
       char=String.fromCharCode(  (((num-97)+k)%26)+97 )
    }
    
    }
    newstr +=char
    
    }
    return newstr;
    
    
    }
    caesarCipher('middle-Outz',2)