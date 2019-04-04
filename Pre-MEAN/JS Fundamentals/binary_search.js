function binarySearch(arr, int){
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor((start + end)/2);
    while(start <= end){
        if(arr[mid] == int){
            return mid;
        }
        else if(int < arr[mid]){
            end = mid;
        }
        else{
            start = mid + 1;
        }
        mid = Math.floor((start + end)/2);
    }
    return -1;
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 1)