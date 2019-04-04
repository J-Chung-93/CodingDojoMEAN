function bubbleSort(array) {
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array.length; j++){
            if(array[j - 1] > array[j]){
                var temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

bubbleSort([2,4,6,8,10,1,3,5,7,9])

// function printArray(arr){
//         for(var i=0; i<arr.length; i++){
//             console.log(arr[i]);
//         }
//     }

// Big O: O(n)

// function findNth(arr, n){
//         console.log(arr[n]);
//     }

// Big O: O(1)

// function halving(n){
//         var count = 0;
//         while(n > 1){
//             n = n/2;
//             count++;
//         }
//         return count;
//     }

// Big O: 0(n)

// function identityMatrix(n){
//     var matrix = [];
//     for(var i=0; i < n; i++){
//         var row = [];
//         for(var j=0; j < n; j++){
//             if(j == i){
//                 row.push(1);
//             }
//             else{
//                 row.push(0);
//             }
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }

// Big O: O(n^2)