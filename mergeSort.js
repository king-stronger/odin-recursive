function mergeSort(arrayToSort){
    //If there is one number remaining, return the number
    if(arrayToSort.length <= 1){
        return arrayToSort;
    }

    //Divide the array in half
    let middle = Math.floor(arrayToSort.length / 2);
    let firstHalf = arrayToSort.slice(0, middle);
    let secondHalf = arrayToSort.slice(middle);

    //Call the mergeSort function recursively, to sort the subarrays
    let firstHalfArraySorted = mergeSort(firstHalf);
    let secondHalfArraySorted = mergeSort(secondHalf);

    //Declare the length of the two halves
    let firstLength = firstHalfArraySorted.length;
    let secondLength = secondHalfArraySorted.length;
    
    //Declare a temporary array to sort the two halves
    let tempArray = [];
    
    //The variables i and j will help looping between the arrays
    let i = 0, j = 0;
    
    /*
        if the current value of the first half is inferior to the current one of the second half, 
        we push it in the temporary array and we go to the next value
        if it's the opposite, we push the current value of the second value and we go to the next one
    */
    while(i < firstLength && j < secondLength){
        if(firstHalfArraySorted[i] < secondHalfArraySorted[j]){
            tempArray.push(firstHalfArraySorted[i]);
            i++;
        } else {
            tempArray.push(secondHalfArraySorted[j]);
            j++;
        }
    }

    //we return concatenate the rest of the arrays to the temporary one
    return tempArray.concat(firstHalfArraySorted.slice(i).concat(secondHalfArraySorted.slice(j)));
}

console.log(mergeSort([0, 2, 1, 3, 6, 5]));