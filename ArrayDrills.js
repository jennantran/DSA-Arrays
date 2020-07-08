//5 URLify a string

const URLIFY = (str) => {
    return str.trim().replace(/\s/g,'20%');

}

console.log(URLIFY('Jennifer Tran'));

//6. Filtering an array

const filterArr = (arr) => {
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 5){
            result.push(arr[i]); 
        }
    }return result;
}
console.log(filterArr([5,2,5,6]));

//7. Max sum in the array

const maxSum = (arr) => {
    let currSum = arr[0];
    let maxSum = arr[0];
    for(let i = 1; i < arr.length; i++){
       currSum = currSum + arr[i];
       if(currSum > maxSum){
           maxSum = currSum;
       }
    }return maxSum;
}
console.log(maxSum([4, 6, -3, 5, -2, 1]));

//8. Merge arrays
const mergeArr = (arrA,arrB) => {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while(current < (arrA.length + arrB.length)){
        let unmerged1 = arrA[index1];  
        let unmerged2 = arrB[index2]; 

        if(unmerged1 < unmerged2){    
            merged[current] = unmerged1; 
            index1++;
        }else {
            merged[current] = unmerged2; 
            index2++;
        }
        current ++; 
        }
    return merged;
    }
   console.log(mergeArr([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));

//9. Remove characters
    const removeVowels = (str,vowels) => {
        let newStr = [];
        for(let i = 0; i < str.length;i++){
            let vowelFound = false;
            for(let j = 0; j < vowels.length; j++){
                if(str[i].toLowerCase() === vowels[j].toLowerCase()){
                    vowelFound = true;
                    break;
                }
            }
            if(!vowelFound){
                newStr.push(str[i]);
            }
        } 
        return newStr;
    }
    console.log(removeVowels('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

//10. Products
    const products = (arr) => {
        let newArr = [];
        const multiply = arr.reduce((total, amount)=> total * amount)
        for(let i = 0; i < arr.length; i++){
            newArr.push(multiply/arr[i])
        }
        return newArr;
    }
    console.log(products([1, 3, 9, 4]))



//11. 2D array
//     const twoD = (arr) => {
//         let rows = [];
//         let cols = [];

//         for(let i = 0; i < arr.length;i++){
      
//     }
// }

//12. String rotation
    const rotate = (str, rotated) => {
        return str.length === rotated.length && rotated.repeat(2).includes(str);
    }
    console.log(rotate('amazon', 'azonma'));
    console.log(rotate('amazon', 'azonam'));