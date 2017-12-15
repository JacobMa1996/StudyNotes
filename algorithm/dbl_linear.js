function dblLinear(n) {
    var u = [1];
    var index = 1,
        i = 0,
        j = 0;
    var w = '';
    Array.prototype.contains = function (obj) {  
        var i = this.length;  
        while (i--) {  
            if (this[i] === obj) {  
                return true;  
            }  
        }  
        return false;  
    }  
    while (index < n + 1) {
        var x = 2 * u[i] + 1;
        var y = 3 * u[j] + 1;
        // w = `,${u.join()},`;
        // console.log(w);
        if (x < y) {
            // var x1 = `,${x},`;
            if (!u.contains(x)) {
                u[index++] = x;   
            }
            i++;

        } else {
            // var y1 = `,${y},`;
            if (!u.contains(y)) {
                u[index++] = y;
            }
            j++;
        }
    }

    return u[index - 1];
}

console.log(dblLinear(60000));