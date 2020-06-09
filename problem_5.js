const strReverse = str => {
    let strg = str.split('');
    let newStr = [];
    for(let i = strg.length -1; i >=0; i--) {
        newStr.push(strg[i]);
    }
    newStr = newStr.join('');
    return newStr;
}

console.log('The problem statement 5 returns: '+strReverse('awesome'));