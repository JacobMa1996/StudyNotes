/**
 * Created by Matthew on 2017/9/12.
 */


//手写快排1
function quickSort(arr, start, end) {

    if (start >= end) {
        return;
    }

    var mid = partition(arr, start, end);
    console.log(mid);
    quickSort(arr, start, mid - 1);
    quickSort(arr, mid + 1, end);


}

//分区函数
function partition(arr, start, end) {

    var i = start,
        j = end + 1;
    var target = start;

    while (true) {

        //此处必须用++i和++j,否则j的位置不正确，输出切分点错误
        while (arr[++i] < arr[target]) {
            if (i === end) {
                break;
            }
        }

        while (arr[--j] > arr[target]) {
            if (j === start) {
                break;
            }

        }

        if (i >= j) {
            break;
        }

        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }

    var temp = arr[target];
    arr[target] = arr[j];
    arr[j] = temp;

    return j;

}

var arr = [4, 2, 5, 1, 3, 7, 2, 6];
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);