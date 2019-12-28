function superReducedString(s) {
    var arr = s.split('');
        for (var i = 0; i < arr.length; i++) {
                console.log(arr[i]+" "+arr[i+1])
            if (arr[i] === arr[i + 1]) {
                arr.splice(i, 2);
                console.log(arr)
                i = -1;
            }
        }
        if (arr.length === 0) {
            return 'Empty String';
        } else {
        return arr.join('');
        }
    
    }
    
    superReducedString("aaabccddd")