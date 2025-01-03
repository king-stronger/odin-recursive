/**
 * A function that provides a numerical sequence bases on a number of digits, a fibonacci function
 * @param {int} n The number of digits 
 * @returns {Array} Return the numerical sequence based on the number of digits
 */
function fibs(n){
    let array = [];

    for(let i = 0; i < n; i++){
        if(i >= 2){
            array.push(array[i - 1] + array[i - 2]);
        } else {
            array.push(i)
        }
    }

    return array;
}

function fibsRec(n, array = [0, 1]){
    console.log("This print recursively")
    if(array.length >= n){
        return array;
    }

    array.push(array[array.length - 1] + array[array.length - 2]);
    return fibsRec(n, array);
}

console.log(fibsRec(3));
