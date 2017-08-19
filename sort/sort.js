//Node 实现排序
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//程序测试
let arr = [1, 10, 2, 5, 1, 8, 6, 4, 3, 5];

console.log('请选择排序算法：' + '\n' +
    '1.桶排序' + '\n' +
    '2.冒泡排序' + '\n' +
    '3.选择排序' + '\n' +
    '4.插入排序' + '\n' +
    '5.希尔排序' + '\n' +
    '6.归并排序' + '\n' +
    '7.快速排序' + '\n' +
    '8.堆排序' + '\n'
);

rl.on('line', (input) => {
    switch (input) {
        case '1' :
            bucketSort(arr, 10);
            break;
        case '2' :
            bubbleSort(arr);
            break;
        case '3' :
            selectSort(arr);
            break;
        case '4' :
            insertSort(arr);
            break;
        case '5' :
            shellSort(arr);
            break;
        case '6' :
            mergeSort(arr, 0, 4, 9);
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
            break;
        case '7' :
            quickSort(arr, 0, 9);
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
            break;
        case '8' :
            heapSort(arr, 10);
            break;
    }
});

//交换函数
function exch(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//桶排序
function bucketSort(arr, Max) {

    let i, j;

    //定义桶,初始化桶
    let bucket = [];
    for (i = 0; i <= Max; i++) {
        bucket[i] = 0;
    }

    //每个元素对应相应顺序的桶，放入对应桶中，桶中值++
    for (i = 0; i < arr.length; i++) {
        if (bucket[arr[i]] == undefined) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    //遍历所有桶，若值不为0，则输出其位置，输出次数为值的大小
    for (i = 0; i <= Max; i++) {
        for (j = 0; j < bucket[i]; j++) {
            console.log(i);
        }
    }
}

//冒泡排序
function bubbleSort(arr) {

    let i, j;

    //获取数组长度
    let n = arr.length;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                exch(arr, j, j + 1);
            }
        }
    }

    for (i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}

//选择排序
function selectSort(arr) {

    let i, j;

    //获取数组长度
    let n = arr.length;

    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                exch(arr, i, j);
            }
        }
    }

    for (i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}

//插入排序
function insertSort(arr) {

    let i, j;

    //获取数组长度
    let n = arr.length;

    for (i = 0; i < n - 1; i++) {
        for (j = i; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                exch(arr, j, j + 1);
            }
        }
    }

    for (i = 0; i < n; i++) {
        console.log(arr[i]);
    }

}

//希尔排序
function shellSort(arr) {

    // let i, j;

    //获取数组长度
    let n = arr.length;

    //设置排序间隔h
    let h = 1;
    while (h < parseInt(n / 3)) {
        h = 3 * h + 1;
    }

    while (h >= 1) {
        for (let i = h; i < n; i++) {
            for (let j = i; j >= h; j -= h) {
                if (arr[j] < arr[j - h]) {
                    exch(arr, j, j - h);
                }
            }
        }

        h = parseInt(h / 3);//注：不能使h为小数
    }

    for (i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}

//归并排序
function mergeSort(arr, lo, mid, hi) {

    //若只剩下一个元素，则不需要归并，直接返回
    if (lo >= hi) {
        return;
    }

    let i, j;

    //递归调用

    let subMid1 = lo + parseInt((mid - lo) / 2);
    let subMid2 = mid + 1 + parseInt((hi - mid - 1) / 2);

    mergeSort(arr, lo, subMid1, mid);        //归并左半部分子数组
    mergeSort(arr, mid + 1, subMid2, hi);    //归并右半部分子数组

    //归并当前数组的核心方法

    i = lo;
    j = mid + 1;

    //创建辅助数组
    let aux = [];

    for (let k = 0; k <= hi; k++) {
        aux[k] = arr[k];//复制进辅助数组
    }

    //归并两个子数组
    for (let k = lo; k <= hi; k++) {
        if (i > mid) {
            arr[k] = aux[j++];
        } else if (j > hi) {
            arr[k] = aux[i++];
        } else if (aux[i] < aux[j]) {
            arr[k] = aux[i++];
        } else {
            arr[k] = aux[j++];
        }
    }
}


//快速排序
function quickSort(arr, lo, hi) {

    //如果只剩一个元素，则不需要排序
    if (lo >= hi) {
        return;
    }

    let mid = partition(arr, lo, hi);
    quickSort(arr, lo, mid - 1);
    quickSort(arr, mid + 1, hi);
}

function partition(arr, lo, hi) {

    let i = lo, j = hi + 1;
    let mid = lo;//规定切分点位置

    //循环切分
    while (true) {

        while (arr[++i] < arr[mid]) {
            if (i == hi) {
                break;
            }
        }

        while (arr[--j] > arr[mid]) {
            if (j == lo) {
                break;
            }
        }

        if (i >= j) {
            break;
        }

        //否则，交换
        exch(arr, i, j);
    }

    //交换切分点的正确位置
    exch(arr, mid, j);

    return j;
}


//堆排序
function heapSort(arr) {

    let i, k;

    //获取数组的长度
    let N = arr.length;

    //构造辅助数组,堆不能从0开始
    let aux = [];
    for (i = 1; i < N + 1; i++) {
        aux[i] = arr[i - 1];
    }

    //构造有序堆
    for (k = N / 2; k >= 1; k--) {
        sink(aux, k, N);
    }

    while (N > 1) {

        //删除根元素（最大的元素）至末尾
        exch(aux, 1, N--);

        //堆下沉
        sink(aux, 1, N);
    }

    for (i = 1; i < arr.length + 1; i++) {
        console.log(aux[i]);
    }
}

//堆下沉
function sink(arr, k, N) {

    //循环条件为k仍有孩子节点
    while (2 * k <= N) {

        let j = 2 * k;//k的孩子左节点

        //若孩子右节点更大，则j右移
        if (j < N && arr[j] < arr[j + 1]) {
            j++
        }

        //若最大的孩子节点比父节点小，则无需交换
        if (arr[j] < arr[k]) {
            break;
        }

        //否则
        exch(arr, k, j);

        //置换交换后k的位置
        k = j;
    }
}