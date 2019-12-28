// function alternate(s) {
// const sets= [...new Set(s)];
//  return sets
// .map((v,i)=>sets.slice(i+1)
// .map(inner =>(v+inner)

// )).reduce((p,c)=>[...p,...c])
// .reduce((p,c)=>{
//     const q=s.replace(new RegExp(`[^${c}]`, 'g'), '');
                
//                 console.log(q)
//          if (/^(([a-z])(?!\2))+$/.test(q))
        
//                 return Math.max(p, q.length);
                                
//      return p;
        
//          }, 0);
// }
// alternate("beabeefeab")

function twoCharacters(str){
    var chars = [];
    //const sets= [...new Set(s)]; //OR
    for(var i = 0;i<str.length;i++){
        if(chars.indexOf(str[i])<0)
    chars.push(str[i]);
    }var max = 0;
    for(i=0;i<chars.length-1;i++){
        for(var j=i+1;j<chars.length;j++){
            var pair = [chars[i],chars[j]];
           // console.log(pair)
            var last =null;       var count=0;
            for(var s=0;s<str.length;s++){
                var ch = str[s];
                //  console.log(pair[1])
                if( (ch == pair[0]||ch == pair[1])){
                        //    console.log(ch)
                    if(last == ch){
                        // console.log(ch)
                        count = 0;
                        break;
                    } 
                    last = ch;
                    count++;
                 } }       
            if(count>max){
                max = count;
            }    }}
    return max;   
}
twoCharacters("beabeefeab")

//     Hint: hit control+c anytime to enter REPL.
// [ 'b', 'e' ]
// [ 'b', 'a' ]
// [ 'b', 'f' ]
// [ 'e', 'a' ]
// [ 'e', 'f' ]
// [ 'a', 'f' ]

    // console.log(chars)