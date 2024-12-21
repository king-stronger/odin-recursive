/**
 * 
 * @param {int} n The number of digits
 * @returns {int} the sum of the two last digits of the numerical sequence
 */
function fibonacci(n){
    if(n < 2){
        return n;
    }

    return fibonacci(n-1) + fibonacci(n - 2);
}