const http = require('http')
const fs = require('fs')
const path = require('path')

console.log('localhost:2018')

let server = http
    .createServer((req, res) => {
        let url = req.url
        console.log(url)
        if (url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.setHeader()
            // res.write('<h1 style="text-align: center; margin-top: 3em" >Please enry the page path.</h1>')
            // res.end()
            fs.readFile('./index.html', function (err, data) {
                let html = data
                let dirTree = getDirTree()
                res.end(JSON.stringify(dirTree))
            })
            return
        }

        router(req, res, url)
    })
    .listen(2018)

function router(req, res, url) {
    let type = url.substr(url.lastIndexOf('.') + 1, url.length)
    let contentType = ''
    if (type == 'json' || type == 'js' || type == 'css' || type == 'html') {
        contentType = `text/${type}`
    }
    if (type == 'gif' || type == 'jpg' || type == 'jpeg' || type == 'png') {
        contentType = `image/${type}`
    }
    res.writeHead(200, { 'Content-Type': contentType })
    fs.readFile(`${__dirname}/${url}`, (err, data) => {
        res.end(data)
        return
    })
}

function getDirTree() {
    let page = {
        name: '/',
        path: '/',
        children: []
    }
    function search(entry) {
        let files = fs.readdirSync(entry)
        for (let i = 0; i < files.length; i++) {
            (files[i] == '.git' || files[i] == '.idea') && files.splice(i--, 1)
        }
        if (!files.length) return console.log('No Files')
        return files.map(val => {
            if (fs.statSync(path.join(entry, val)).isDirectory()) {
                return {
                    name: val,
                    path: entry + val + '/',
                    children: search(entry + val + '/')
                }
            } else {
                return {
                    name: val,
                    path: entry + val,
                    children: null
                }
            }
        })
    }
    page.children = search('./')
    return page
}
