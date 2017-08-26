//无向图

//节点
class Node {
    constructor(item, next) {
        this.item = item;
        this.next = next;
    }
}

//背包
class Bag {

    constructor(first) {
        this.first = first;
    }

    add(item) {

        let p = new Node(this.first.item, this.first.next);
        this.first = new Node(item, p);
    }

}

//图
class Graph {

    constructor(s, V) {
        this.V = V;//定点数目
        this.E = 0;//边的数目
        this.s = s;//起始点
        this.adj = [];//邻接表
        for (let v = 0; v < V; v++) {
            this.adj[v] = new Bag(new Node(null, null));
        }
    }

    //两点之间添加一条边
    addEdge(v, w) {

        this.adj[v].add(w);
        this.adj[w].add(v);
        this.E++;
    }

}

//深度优先搜素
class DepthFirstSearch {

    constructor(G) {

        this.G = G;
        this.s = G.s;
        this.marked = [];
        this.count = 0;
        this.edgeTo = [];

        for (let v = 0; v < this.G.V; v++) {
            this.marked[v] = false;
        }
    }

    dfs(v) {
        this.marked[v] = true;
        this.count++;
        //在邻接表中，每一个与v相连的点都走一遍
        for (let k = this.G.adj[v].first; k.next != null; k = k.next) {
            if (this.marked[k.item] == false) {
                this.dfs(k.item);
            }
        }
    }
}

//深度优先搜索查找路径
class DepthFirstPaths {

    constructor(G) {

        this.G = G;
        this.s = G.s;
        this.marked = [];
        this.edgeTo = [];

        for (let v = 0; v < this.G.V; v++) {
            this.marked[v] = false;
        }

        this.dfs(this.s);
    }

    dfs(v) {
        this.marked[v] = true;
        //在邻接表中，每一个与v相连的点都走一遍
        for (let k = this.G.adj[v].first; k.next != null; k = k.next) {
            if (this.marked[k.item] == false) {
                this.edgeTo[k.item] = v;//k为这个顶点，v为上一个顶点
                this.dfs(k.item);
            }
        }
    }

    hasPathTo(v) {
        return this.marked[v];
    }

    pathTo(v) {

        //定义路径数组
        let path = [];

        if (!this.hasPathTo(v)) {
            return null;
        }

        for (let k = v; k != this.s; k = this.edgeTo[k]) {
            path.unshift(k);
        }
        path.unshift(this.s);
        return path;

    }
}


let arr = [0, 1, 2, 3, 4, 5, 6];

let graph = new Graph(arr[0], 7);
graph.addEdge(arr[0], arr[1]);
graph.addEdge(arr[0], arr[2]);
graph.addEdge(arr[0], arr[5]);
graph.addEdge(arr[0], arr[6]);
graph.addEdge(arr[4], arr[6]);
graph.addEdge(arr[4], arr[3]);
graph.addEdge(arr[3], arr[5]);
graph.addEdge(arr[5], arr[4]);

for (let i = 0; i < 7; i++) {
    console.log(graph.adj[i]);
}

let depth = new DepthFirstSearch(graph);
depth.dfs(arr[6]);
console.log(depth.marked);
console.log(depth.count);

let path = new DepthFirstPaths(graph);
console.log(path.hasPathTo(arr[4]));
console.log(path.marked);
let pathArr = path.pathTo(arr[3]);
console.log(pathArr);


//广度优先搜索
class BreadthFirstPaths {

    constructor(G) {

        this.G = G;
        this.s = G.s;
        this.marked = [];
        this.edgeTo = [];

        for (let v = 0; v < this.G.V; v++) {
            this.marked[v] = false;
        }

        this.bfs(this.s);
    }

    bfs(s) {

        let queue = [];//使用数组实现队列保存访问顺序
        this.marked[s] = true;

        queue.unshift(s);
        while (queue.length) {
            let v = queue.shift();//从队列中删除下一个顶点
            for (let k = this.G.adj[v].first; k.next != null; k = k.next) {
                if(this.marked[k.item] == false) {
                    this.edgeTo[k.item] = v;
                    this.marked[k.item] = true;
                    queue.unshift(k.item);
                }
            }
        }

    }

    hasPathTo(v) {
        return this.marked[v];
    }

    pathTo(v) {

        //定义路径数组
        let path = [];

        if (!this.hasPathTo(v)) {
            return null;
        }

        for (let k = v; k != this.s; k = this.edgeTo[k]) {
            path.unshift(k);
        }
        path.unshift(this.s);
        return path;

    }

}

let bfsPath = new BreadthFirstPaths(graph);
let bfsPathArr = bfsPath.pathTo(arr[3]);
console.log(bfsPathArr);