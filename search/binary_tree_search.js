//二叉树查找

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Node {

    constructor(key, val, N) {
        this.key = key;
        this.val = val;
        this.N = N;
        this.left = null;
        this.right = null;
    }

}

class BST {

    constructor(root) {
        this.root = root;
    }

    size(x) {
        if (x == null) {
            return 0;
        } else {
            return x.N;
        }
    }

    put(x, key, val) {

        if (x == null) {
            return new Node(key, val, 1);
        }

        if (x.key > key) {
            x.left = this.put(x.left, key, val);
        } else if (x.key < key) {
            x.right = this.put(x.right, key, val);
        } else {
            x.val = val;
        }

        x.N = this.size(x.left) + this.size(x.right) + 1;
        return x;
    }

    get(x, key) {

        if (x == null) {
            return null;
        }

        if (x.key > key) {

            return this.get(x.left, key);

        } else if (x.key < key) {

            return this.get(x.right, key);

        } else {

            return x.val;
        }

    }

    min(x) {
        if (x.left == null) {
            return x;
        }
        return min(x.left);
    }

    deleteMin(x) {
        if (x.left == null) {
            return x.right;
        }
        x.left = this.deleteMin(x.left);
        x.N = this.size(x.left) + this.size(x.right) + 1;
        return x;
    }

    delete(x, key) {
        if (x == null) {
            return null;
        }
        if (key < x.key) {
            x.left = this.delete(x.left, key);
        } else if (key > x.key) {
            x.right = this.delete(x.right, key)
        } else {
            if (x.right == null) {
                return x.left;
            }
            if (x.left == null) {
                return x.right;
            }
            let t = new Node(x.key,x.val,x.N);
            x = min(t.right);
            x.right = this.deleteMin(t.right);
            x.left = t.left;
        }

        x.N = this.size(x.left) + this.size(x.right) + 1;
        return x;
    }
}

let arr = ['A', 'B', 'G', 'D', 'W', 'T', 'E', 'H', 'I', 'U', 'L', 'X', 'Z'];

// let root = new Node(arr[0], arr[0].charCodeAt(), 1);
//
// let bst = new BST(root);
//
// for (let i = 1; i < arr.length; i++) {
//     let x = new Node(arr[i], arr[i].charCodeAt(), 1);
//     bst.put(root, x.key, x.val);
// }
//
// for (let i = 0; i < arr.length; i++) {
//     console.log();
// }

//构建二叉树
// let root = new Node(arr[3], arr[3].charCodeAt(), 1);
// let b = new Node(arr[1], arr[1].charCodeAt(), 1);
// let a = new Node(arr[0], arr[0].charCodeAt(), 1);
// let e = new Node(arr[6], arr[6].charCodeAt(), 1);
//
// let bst = new BST(root);
//
// bst.put(root, b.key, b.val);
// bst.put(root, a.key, a.val);
// console.log(bst.put(root, e.key, e.val));
// console.log(bst2.left.left);

// console.log('key:' + root.key + ' val:' + root.val + ' N:' + root.N + ' left:' + root.left + ' right:' + root.right);

// console.log('key:' + root.key + ' val:' + root.val + ' N:' + root.N + ' left:' + root.left + ' right:' + root.right);
// console.log('key:' + b.key + ' val:' + b.val + ' N:' + b.N + ' left:' + b.left + ' right:' + b.right);
// console.log('key:' + a.key + ' val:' + a.val + ' N:' + a.N + ' left:' + a.left + ' right:' + a.right);

let root = new Node(arr[5], arr[5].charCodeAt(), 1);

let bst = new BST(root);

for (let i = 0; i < arr.length; i++) {
    if (i == 5) {
        continue;
    }
    bst.put(root, arr[i], arr[i].charCodeAt());
}

let k = root;

//遍历二叉树
function traverse(root) {

    if (root == null) {
        return;
    }

    console.log(root);

    traverse(root.left);
    traverse(root.right);
}

// traverse(k);


console.log(bst.get(root,'H'));
console.log(bst.delete(root,'H'));
console.log(bst.get(root,'H'));
traverse(k);