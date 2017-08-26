class Node {

    constructor(item, next) {
        this.item = item;
        this.next = next;
    }
}

class Bag {

    constructor(first) {

        this.first = first;

    }

    add(item) {

        let p = new Node(this.first.item, this.first.next);
        this.first = new Node(item, p);
    }
}

class Digraph {

    constructor(s, V) {
        this.V = V;
        this.E = 0;
        this.s = s;
        this.adj = [];//邻接表
        for (let i = 0; i < V; i++) {
            this.adj[i] = new Bag(new Node(null, null));
        }
    }

    //两点之间添加一条有向边
    addEdge(v, w) {

        this.adj[v].add(w);
        this.E++;

    }

    //有向图取反
    reserve() {

        let R = new Digraph(this.V);
        for (let v = 0; v < this.V; v++) {
            for (let k = this.G.adj[v].first; k.next != null; k = k.next) {
                R.addEdge(k, v);
            }
        }
        return R;
    }

}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let digraph = new Digraph(arr[0], 13);
digraph.addEdge(0, 1);
digraph.addEdge(0, 5);
digraph.addEdge(2, 0);
digraph.addEdge(2, 3);
digraph.addEdge(3, 2);
digraph.addEdge(3, 5);
digraph.addEdge(4, 2);
digraph.addEdge(4, 3);
digraph.addEdge(5, 4);
digraph.addEdge(6, 0);
digraph.addEdge(6, 4);
digraph.addEdge(6, 9);
digraph.addEdge(7, 6);
digraph.addEdge(7, 8);
digraph.addEdge(8, 9);
digraph.addEdge(9, 10);
digraph.addEdge(9, 11);
digraph.addEdge(10, 12);
digraph.addEdge(11, 4);
digraph.addEdge(11, 12);
digraph.addEdge(12, 9);

console.log(digraph.V);
console.log(digraph.E);

class DirectedDFS {

    constructor(G) {
        this.G = G;
        this.s = G.s;
        this.marked = [];
        for(let v = 0; v < V; v++) {
            this.marked[v] = false;
        }
        this.dfs(this.s);
    }

    dfs(v) {
        this.marked[v] = true;

        for(let k = this.G.adj[v].first; k.next != null; k = k.next) {
            if(marked[k.item] == false) {
                this.dfs(marked[k.item]);
            }
        }
    }

}