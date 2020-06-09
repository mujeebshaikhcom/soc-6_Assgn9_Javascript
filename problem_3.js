const digitsum = num => {
    let strNum = num.toString().split('');
    let result = 0;
    for(let i = 0; i < strNum.length; i++){
        result = result + parseInt(strNum[i]);
    }
    return result;    
}
console.log('The problem statement 3 returns: '+digitsum(192));