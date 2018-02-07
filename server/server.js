const http = require('http')
const fs = require('fs')
const path = require('path')

const getDirTree = require('./tree')
const router = require('./router')

console.log('localhost:2018')

let server = http
    .createServer((req, res) => {
        let url = req.url
        console.log(url)
        if (url == '/') {
            fs.readFile('../index.html', (err, data) => {
                res.end(data)
                return
            })
        }

        if(/api\/./.test(url)) {
            let treeJSON = getDirTree()
            res.end(treeJSON)
        }

        router(req, res, url)
    })
    .listen(2018)




