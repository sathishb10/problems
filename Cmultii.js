
//kaprekarNumbers
//which means multiply each given number and divide it with equal parts and the  two parts of it. if we add it it must be equal to multiplayde value.ex: 9*9=81=8+1=9;
function kaprekarNumbers(p, q) {
    var arr=[];
    if(p<q){
      for(var i=p;i<q;i++){
 
        let a=(i*i).toString();
   let s1=a.slice(0, parseInt(a.length/2) );
   console.log( s1 + " " +i  )
 let s2=a.slice(parseInt(a.length/2) ,parseInt(a.length))
   // console.log( s2 + " " +i )
 if(parseInt(s1 || 0)+parseInt(s2 || 0)===i  && 
 parseInt(s1)!==0 &&  parseInt(s2)!==0 ){
 
   arr.push(i)
 } 
      }
    }
 console.log(arr.length>0 ? arr.join(' ') : 'INVALIRAneg')
 }
 
 // kaprekarNumbers(1, 10)
 
 
 // ------------------------------------------------------
 
 function acmTeam(topic) {
     console.log(topic)
 
     var arr=[]
     for(let i=0;i<topic.length;i++){
            for(let j=i+1;j<topic.length;j++){
                 var count=0
              for(let k=0;k<topic[0].length;k++){
                  if(topic[i][k]==='1' || topic[j][k]==='1'){
                          count++
                  }
 
              }
              arr.push(count)
         }
     }
 // const maxvalue=Math.max(...arr)
 const maxvalue=arr.sort((a,b)=>b-a)[0];
 let max=0;
 for(var t=0;t<arr.length;t++){
     if(maxvalue==arr[t]){
         max++
     }
 
 }
 return [maxvalue,max]
 }
 //acmTeam([ '10101', '11100', '11010', '00101' ])
 
 
 // ------------------------------------------------
 
 
 function taumBday(b, w, bc, wc, z) {
     // Write your code here
 
     var B = BigInt(b); var W = BigInt(w); var BC = BigInt(bc); var WC = BigInt(wc); var Z = BigInt(z);
     if (BC > WC + Z) {
         return ((B + W) * WC + B * Z);
     }
     else if (WC > BC + Z) {
         return ((B + W) * BC + W * Z);
     }
     else {
         return (B * BC + W * WC);
 
     }
 }
 // taumBday(10,10,1,1,1);
 // taumBday(3,6,9,1,1,1);
 // taumBday(7,7,4,2,1)
 //taumBday(3,3,1,9,2)
 
 
 // // -------------------------------------------------------
 // https://www.hackerrank.com/challenges/beautiful-triplets/problem
 //match the  elements which is differnce equal to d;
 function triplets(d,arr){
 var count=0
 for(var i=0;i<arr.length;i++){
     for(var j=i+1;j<arr.length;j++){
        if((arr[j]-arr[i])===d){
       // console.log(j + " "+i )
 for(var k=j+1;k<arr.length;k++){
     if((arr[k]-arr[j])===d){
        console.log(j + " "+k )
             count++;
 
     }
   }
   
  }    }
    
 }
  return count;
 
 }
 
  
 // //triplets(3,[1 ,2 ,4 ,5 ,7 ,8 ,10])
 // ----------------------------------------------------
 function minumdistance(arr){
      var kk=[]  //or var min=a.length //  return -1 
   for(var i=0;i<arr.length;i++){
 
     for(var j=i+1;j<arr.length;j++){
 
       if(arr[i]==arr[j]){   //if(min>j-i)
          kk.push(j-i)         //min=j-i
          break;
       }
     }
  }
 return Math.min(...kk)  //return min;
 }
 // minumdistance([7 ,1 ,3 ,4 ,1, 7])
 // -------------------------------------------------------
 
 function howManyGames(p, d, m, s) {
 var amount=s;
 var decprice=p
 var games=0;
 while(amount>=decprice){
   if(games==0){
     amount-=decprice
     decprice=(decprice-d) >=m ?decprice-d : m
   }
   else{
     amount-=decprice;
        decprice=(decprice-d) >=m ?decprice-d : m
 
   }
  games++
 }
 return games;
 }
 // howManyGames(20,3,6,85)
 // ---------------------------------------------
 function chocolateFeast(n, c, m) {
 
     if (n / c == m) {
         return n / c + 1;
     }
     else if (n / c < m) {
         return n / c;
     }
     else if (n / c > m) {
 
         var k = n / c;
         var re = k - m;
         return k = re + 1 + k
 
     }
 }
 // chocolateFeast(6,2,2)
 // // -------------------------------------------------
 // https://www.hackerrank.com/challenges/service-lane/problem
 
 function serviceLane(n, cases) {
  console.log(n,cases)
 var result=[];
 for(var i=0;i<cases.length;i++){
   var arr=[]
   for(var j=cases[i][0];j<=cases[i][1];j++){
         arr.push(n[j])
   }
 result.push(Math.min(...arr))
 }
 return result;
 }
 // serviceLane([ 2, 3, 1, 2, 3, 2, 3, 3 ] ,
 // [ [ 0, 3 ], [ 4, 6 ], [ 6, 7 ], [ 3, 5 ], [ 0, 7 ] ])
 // ----------------------------------------------------------
 
 function liasworkbook(n,k){
     var count=0
     var page=0
 for(var i=0;i<n.length;i++){
 
     for(var j=1;j<=n[i];j++){
             
             if(k===1 || j%k==1){
                 page++
             }
             if(j==page){
               count++
             }
     }
         
 }
 return count
 }
 // // liasworkbook([4,2,6,1,10],3)
 // --------------------------------------------------------
 
 
 
 
 function flatlandSpaceStations(n, c) {
     c = c.sort((a, b) => a - b);
 
     // console.log(c)//[0,4]
     // Start to first station
     let startDist = c[0];
     //  console.log(startDist)//0
 
     // Last station to end
     
     let endDist = (n-1) - c[c.length - 1];
      // console.log(endDist) //0
 
     // Largest internal distance
     let internalDist = 0; 
     let dist = 0;
     for (let i = 1; i < c.length; i++){
         dist = Math.floor((c[i] - c[i - 1]) / 2);
         // console.log(dist)
        
         dist > 0 && dist > internalDist ? internalDist = dist : '';
     }
 //console.log(internalDist)
     return Math.max(startDist, endDist, internalDist)
 }
 // flatlandSpaceStations(2,[0,4])
 // --------------------------------------------------
 
 function fairRations(B) {
 
   var count=0
 
     for(var i=0;i<B.length;i++){
       
       if(B[i]%2===1){
          B[i]++;
          B[i+1]++;
          count +=2;
       }
        if(i === B.length - 2 && B[B.length - 1] % 2 === 1) {
             return "NO";
         }
     }
 return count;
 
 }
 
 // fairRations([2,3,4,5,6]);
 // // 2 3 4 5 6
 // ------------------------------------------------------
 function cavityMap(grid){
   for(var i=1;i<grid.length-1;i++){
     for(var j=1;j<grid[i].length-1;j++){
       if(grid[i][j]>grid[i][j-1] && grid[i][j]>grid[i][j+1] && grid[i][j]>grid[i-1][j] && grid[i][j]>grid[i+1][j]){
         var change=grid[i].split('')
           change.splice(j,1,'X')
           change=change.join('')
           grid[i]=change;
       }``
     }
   }
 return grid;
 
 }
 // cavityMap([ '1112', '1912', '1892', '1234']);
 // --------------------------------------------------------------
 
    function gridSearch(G, P) {
     for (let i = 0; i <= G.length - P.length; i++) { //7   
     //6length
          console.log(G[0].length-P[0].length)
 for (let j = 0; j <= G[0].length - P[0].length; j++) {
   // console.log(G[i][j]+"   "+P[0][0])
             if (G[i][j] != P[0][0]){
                continue                  
             } 
             let match = true
             for (let k = 0; k < P.length; k++) {
                 for (let l = 0; l < P[0].length; l++) {
                     if (G[i + k][j + l] != P[k][l]) {
                         match = false
                         break
                     }
                 }
                 if (!match) break
             }
             
             if (match) return 'YES'
 
         }
     }
 
     return 'NO'
 }
 // gridSearch([ '7283455864',
 //   '6731158619',
 //   '8988242643',
 //   '3830589324',
 //   '2229505813',
 //   '5633845374',
 //   '6473530293',
 //   '7053106601',
 //   '0834282956',
 //   '4607924137' ], [ '9505', '3845', '3530' ])
 
 
 // -----------------------------------------------------------------------------------
 //console.log(f+" "+ i + " "+ l) )
 function happyLadybugs(b) {
         //    return (b.includes('_')? b.split('').sort():b.split(''))
         // .filter(f=>f!='_').every((f,i,l)=>{console.log(i) })
         // // f==l[i+1] || f==l[i-1]) ? 'YES' :'NO'
 
       return (b.includes('_') ? b.split('').sort() : b.split(''))
         .filter(f=> f!='_').every((f,i,l)=> f==l[i+1] || f==l[i-1]) ? 'YES' : 'NO'
 }      
 happyLadybugs('RBY_YBR')
 