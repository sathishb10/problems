


// -----------------------------------------------
function diffArray(arr1, arr2) {
    var newArr = [];
  
    // function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(arr2[i]);
        }
      }
    // }
  
    // onlyInFirst(arr1, arr2);
   // onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
  // //diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  
  
  function diffArray(arr1,arr2){
   return  arr1.concat(arr2).filter(items=> !arr1.includes(items) || !arr2.includes(items));
  }
  //diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
  
  // -------------------------------------------------------------------
  //  Remove all elements from the initial array that are of the same value as these arguments.
  function destroyer(arr,a,b) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments);
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<args.length;j++){
        if(arr[i]===args[j]){
         delete arr[i];
    }
    }
  
  }
    return arr.filter(Boolean);
  
  }
  // destroyer([1, 2, 3, 1, 2, 3],2,3); //[1,1]
  
  // 2)
  function destroyertwo(arr){
    var args = Array.from(arguments).slice(1);
  return arr.filter(elements=>  !args.includes(elements))
  }
  // destroyertwo([1, 2, 3, 1, 2, 3],2,3)
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
  
  
  // ---------------------------------------------------
  
  function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
     var srckeys=Object.keys(source)
     return collection.filter(function(obj){
  for(var i=0;i<srckeys.length;i++){
  if(  !obj.hasOwnProperty(srckeys[i]) ||
          obj[srckeys[i]] !== source[srckeys[i]]
        ) {
          return false;
        }
      }
      return true;
  
     })
   
     
  
    // Only change code above this line
    return arr;
  }
  
  // whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
  // -----------------------------------------------
  function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
  }
  
  // test here
  // spinalCase("This Is Spinal Tap");
  // 
  
  //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
  
  // -------------------------------------------------------
  
  function translatePigLatin(str) {
    let consonantRegex = /[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
      // console.log(myConsonants)
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  
  }
  
  //translatePigLatin("consonant");
  //translatePigLatin("algorithm")
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
  
  // -----------------------------------------------------
  function myReplace(str, before, after) {
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      // console.log(after.slice(1))
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
  return str;
  }
  
  // myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
  
  // --------------------------------
  function pairElement(str) {
  
  var pairs={
    A:"T",
    T:"A",
    G:"C",
    C:"G"
  };
  var arr= str.split("");
  return arr.map((x)=> [x,pairs[x]]  )
  
  }
  
  // pairElement("GCG");
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
  
  // -----------------------------------------------------------
  
  function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
          // console.log(   str.charCodeAt(i) +" "+str.charCodeAt(0)+i)
      if (code !== str.charCodeAt(0) + i) {
        // console.log(str.charCodeAt(0) + i)
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }
  
  // // test here
  // fearNotLetter("abce");
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
  
  // -------------------------------------------------------
  function uniteUnique(arr) {
  var args=[...arguments]
  var result=[]
  for(var i=0;i<args.length;i++){
    for(var j=0;j<args[i].length;j++){
          if(!result.includes(args[i][j])){
                result.push(args[i][j])
          }
    }
    }
    return result;
  }
  
  // uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
  
  function uniteUniqu(arr1, arr2, arr3) {
    var newArr;
    //Convert the arguments object into an array
    var args = Array.prototype.slice.call(arguments);
    //Use reduce function to flatten the array
    newArr = args.reduce(function(arrA, arrB) {
      //Apply filter to remove the duplicate elements in the array
      return arrA.concat(
        arrB.filter(function(i) {
          return arrA.indexOf(i) === -1;
        })
      );
    });
  
    return newArr;
  }
  
  // test here
  //uniteUniqu([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
  // -----------------------------------------------------------
  function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split("");
  
    // Since we are only checking for a few HTML elements, use a switch
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
  }
  
  // //test here
  // convertHTML("Dolce & Gabbana");
  
  // ----------------------------------------------------------
  
  
  function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
      console.log(currNumber+"up")
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;  //0 //1  // 2 3
      // console.log(currNumber)
      prevNumber = currNumber - prevNumber; //1 0 1 2
      console.log(currNumber)
    }
    return result;
  
  }
  
  // test here
  // sumFibs(10);
  function sumPrimes(num) {
   var sum=[]
   for(var i=0;i<=num;i++){
     if(isprime(i)){
  sum.push(i)
     }
   }
  return sum.reduce((a,b)=> a+b)
  } 
  
   function isprime(num){
     if(num<2){
      return false;
     }
     for(var k=2;k<num;k++){
      //  console.log(num+" "+k)
       if(num%k===0){   
        //  console.log(num)  
         return false;
       }
     }
       return true;
     
  
  }
  
  
  // sumPrimes(10);
  
  // // ------------------------------------------------------
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
  
  
  // --------------------------------------------------
  
  
  
  
  
  
  
  
  