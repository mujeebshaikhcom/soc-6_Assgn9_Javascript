const factorial = num => {
    let result = 1;
    for(let i = 1; i <= num; i++){
        result = result * i;
    }
    return  (num < 0 ? 'Please enter a positive number' : result);
}

console.log('The problem statement 2 returns: '+factorial(3));