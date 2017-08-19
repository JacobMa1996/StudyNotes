//基于无序链表的顺序查找

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Node {

    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = next
    }

}

class SequentialSearchST {

    constructor(first) {
        this.first = first;
    }

    //查找给定的键，返回相关联的值
    get(key) {

        for (let x = first; x != null; x = x.next) {
            if (key == x.key) {
                return x.val;
            }
        }

        return null;

    }

    //查找给定的键，找到则更新其值，否则在表中新建节点
    put(key, val) {
        for (let x = first; x != null; x = x.next) {
            if (key == x.key) {
                x.val = val;
                return;
            }

            //若查找到最后一个节点，将新节点附在他后面
            if (x.next == null) {
                x.next = new Node(key, val, null);
                return;
            }
        }
    }
}

let arr = ['A', 'B', 'G', 'D', 'W', 'T', 'E', 'H', 'I', 'U', 'L', 'X', 'Z'];

let first = new Node(0, undefined, null);

let ST = new SequentialSearchST(first);

for (let i = 0; i < arr.length; i++) {
    ST.put(i + 1, arr[i]);
}

for (let x = first; x != null; x = x.next) {
    console.log('key:' + x.key + ' val:' + x.val);
}

console.log(ST.get(5));
