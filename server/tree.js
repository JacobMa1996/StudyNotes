const http = require('http')
const fs = require('fs')
const path = require('path')

function getDirTree() {
    let page = {
        name: '/',
        path: '/',
        children: []
    }
    function search(entry) {
        let files = fs.readdirSync(entry)
        for (let i = 0; i < files.length; i++) {
            (files[i] == '.git' || files[i] == '.idea' || files[i] == 'node_modules') && files.splice(i--, 1)
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

module.exports = getDirTree