const path = require('path')
const fs = require('fs')

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

    fs.readFile(process.cwd() + url, (err, data) => {
        res.end(data)
        return
    })
}


module.exports = router