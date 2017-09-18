/**
 * Created by Matthew on 2017/9/13.
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var input = [];

rl.on('line', function (data) {

    input.push(data);

    if (input.length === 2) {

        var arr = input[1].split(' ');

        arr.sort(function (str1, str2) {

            return parseInt(str1 + str2) - parseInt(str2 + str1);

        }).reverse();

        var str = '';
        for (var i = 0; i < arr.length; i++) {

            str += arr[i];
        }

        console.log(str);

    }

});

