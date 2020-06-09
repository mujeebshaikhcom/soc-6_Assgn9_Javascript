let result = 0;
let ele = '';
const addElements = arr => {
    for(let i = 0; i < arr.length; i++  ) {
        ele = arr[i];
        result = result + ele;
    }
    return result;
}

console.log('The problem statement 7 returns: '+ addElements([1,2,3,4,10]));