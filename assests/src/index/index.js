$(function () {
    Ajax()
})

function Ajax (url, data, method, func_succ, func_err) {

    let options = {
        url: url, 
        data: data, 
        dataType: 'json', 
        method: 'get' || method,
        contentType = 'application/json; chaset=utf-8', 
        success: (res) => {
            resolve(res)
        }, 
        error: (err) => {
            reject(err)
        }
    }

    if(typeof arguments[0] == 'object') {
        Object(options, {
            url: arguments[0].url, 
            data: arguments[0].data, 
            method: 'get' || arguments[0].method, 
            success: arguments[0].success, 
            err: arguments[0].err,            
        })
    }

    
    return new Promise((reslove, reject) => {
        $.ajax()
    })
}