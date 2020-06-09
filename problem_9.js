const findRepeat = str => {
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++) {
        if(strArr.indexOf(strArr[i]) == strArr.lastIndexOf(strArr[i])){
            return null;
        } else {
            return strArr[i];
        }
    }
}
console.log('The problem statement 9 returns: '+ findRepeat('heythere'));