//基于有序数组的二分查找

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(arr, key) {

    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = start + parseInt((end - start) / 2);

        if (key == arr[mid]) {
            return mid;
        } else if (key > arr[mid]) {
            start = mid + 1;
        } else if (key < arr[mid]) {
            end = mid - 1;
        } else {
            return -1;
        }
    }

}

console.log(binarySearch(arr, 5));
