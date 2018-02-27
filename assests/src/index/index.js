$(function () {
    Ajax('/apitree', null, function (res) {
        let root = res
        let treeHtml = getTreeHtml(root)
        $('body').append(treeHtml)
    })
})

function getTreeHtml(root) {
    let rootHTML = $('<ul id="root"></ul>')
    function search(nodeHTML, nodeJSON) {
        if (nodeJSON.children && nodeJSON.children.length) {
            let thisNode = $(`<li>${nodeJSON.name}<ul></ul></li>`)
            for (let i = 0; i < nodeJSON.children.length; i++) {
                search(thisNode.children('ul'), nodeJSON.children[i])
            }
            nodeHTML.append(thisNode)
        } else {
            nodeHTML.append(`<li><a href="${nodeJSON.path}">${nodeJSON.name}</a></li>`)
        }
    }
    search(rootHTML, root)
    return rootHTML
}

function Ajax(url, data, func_succ, func_err, method) {

    let options = {
        url: url,
        data: data,
        dataType: 'json',
        method: 'get' || method,
        contentType: 'application/json; chaset=utf-8',
        success: (res) => {
            func_succ && func_succ(res)
        },
        error: (err) => {
            func_err && func_err(err)
        }
    }

    let obj = arguments[0]

    if (typeof obj == 'object') {
        Object.assign(options, {
            url: obj.url,
            data: obj.data,
            method: 'get' || obj.method,
            success: obj.success,
            err: obj.err,
        })
    }


    $.ajax(options)
}