//代码美化之条件判断
function getEle(id) {
    if (id != '') {
        return document.getElementById(id);
    } else {
        return null;
    }
}

//改善之后

function getEle(id) {
    return !id ? null : document.getElementById(id);
}

//代码美化之枚举
function getNote(err) {
    if (err == 'NoLogin') {
        return '请先登录';
    } else if (err == 'NoActive') {
        return '您还没有激活';
    } else if (err == 'Error') {
        return '操作异常，请重试';
    } else {
        return '未知错误';
    }
}

//改善之后

function getNote(err) {
    var obj = {
        'NoLogin': '请先登录',
        'NoActive': '您还没有激活',
        'Error': '操作异常，请重试'
    };
    return obj[err] || '未知错误';
}

//代码美化之与或运算
function clickA(event, callback) {
    var srcEl = window.event ? event.srcElement : event.target;
    if (srcEl.tagName == 'A') {
        if (!!callback) callback(srcEl);
    }
}

//改善之后

function clickA(event, callback) {
    var srcEl = event.target || event.srcElement;
    if (srcEl.tagName == 'A') {
        callback && callback(srcEl);
    }
}

//代码美化之IF嵌套
function addUser(username, mobile, pwd) {
    if (username != '' && mobile != '' && pwd != '') {
        if (/^1\d{10}$/.test(mobile)) {
            $.post('adduser.ashx', { username: username, mobile: mobile, pwd: pwd });
            return '已提交';
        } else {
            return '手机号输入有误';
        }
    } else {
        return '请将表单填写完整';
    }
}

//改善之后

function addUser(username, mobile, pwd) {
    if (!username || !mobile || !pwd) return '请将表单填写完整';
    if (!/^1\d{10}$/.test(mobile)) return '手机号输入有误';

    $.post('adduser.ashx', { username: username, mobile: mobile, pwd: pwd });
    return '已提交';
}

//代码美化之封装
    // 一般性的代码封装
    (function () {
        // 某一类代码
    })();



// 结构化封装
var myobj = {
    section1: function () {
        // 某一类代码
    },
    section2: function () {
        // 某一类代码
    }
};



// 单件模式封装
var myobj = (new function () {
    this.section1 = function () {
        // 某一类代码
    }
    this.section2 = function () {
        // 某一类代码
    }
});



// 全闭包式封装
(function () {
    function _section1() {
        // 某一类代码
    }
    function _section2() {
        // 某一类代码
    }
    window.myobj = {
        section1: _section1,
        section2: _section2
    };
})();