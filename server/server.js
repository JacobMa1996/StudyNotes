const http = require('http')
const fs = require('fs')
const path = require('path')

const getDirTree = require('./tree')
const router = require('./router')

console.log('localhost:2018')

let server = http
    .createServer((req, res) => {
        let url = req.url
        if (url == '/') {
            // 务必加上return，否则在读文件的过程中，代码会一直向下执行
            return fs.readFile(path.resolve(process.cwd(), 'views/index.html'), (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                return res.end(data)
            })
        }

        if (url == '/apitree') {
            let treeJSON = getDirTree()
            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(treeJSON))
        }

        router(req, res, url)
    })
    .listen(2018)




