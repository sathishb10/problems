
function separateNumbers(s){
    const previousMaxSafe=BigInt(Number.MAX_SAFE_INTEGER)
    //console.log(previousMaxSafe)
    var seq=""
    sequences=[]
    let half=Math.floor(s.length/2)
    for(let i=0;i<half;i++){
      seq +=s[i]
      // console.log(seq) 9,99
      // console.log(s.slice(i + 1)) //i=1(10,11),2=011 9100,100
      // console.log(((BigInt(seq)) + 1n )) //9+1n=10n, 99+1n=100n
      if(s.slice(i+1).startsWith((BigInt(seq) +1n),"" )){
       sequences.push(seq)
      }
    }
    let hasSequence=false;
    sequences.forEach(x=>{
      let t=s,i=1; let replace=x;
      while(t.match(new RegExp("^" + replace,"")) && t.length){
        t=t.replace(new RegExp("^"+ replace,""),"")
        replace=(BigInt(replace)+1n) +"";
      }
      if(t.length==0){
        hasSequence=x;
      }
    });
    return console.log(hasSequence ? "YES " + hasSequence : "NO")
    
    }
    separateNumbers('99100')
    
    
    
    