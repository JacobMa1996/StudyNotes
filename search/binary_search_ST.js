//基于有序数组的二分查找

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let arr = ['A', 'B', 'G', 'D', 'W', 'T', 'E', 'H', 'I', 'U', 'L', 'X', 'Z'];

console.log(binarySearch(arr, 5));

function binarySearch(arr, key) {

    let mid = rank(key, 0, arr.length - 1);

    return arr[mid];

}

function rank(key, lo, hi) {

    if (lo >= hi) {
        return lo;
    }

    let mid = lo + parseInt((hi - lo) / 2);

    if (key < mid) {
        return rank(key, lo, mid - 1);
    } else if (key > mid) {
        return rank(key, mid + 1, hi);
    } else {
        return mid;
    }


}
