function dbl_linear(n) {
    var u = [1];
    
    while (u.length < n) {
        var len = u.length;
        for (var i = 0; i < len; i++) {
            var x = 2 * u[i] + 1,
                y = 3 * u[i] + 1;
    
            var w = u.join();
            w = `,${w},`;
            console.log(w);
            // var  reg1 = new RegExp(`^${x}$`, 'g');
            // var  reg2 = new RegExp(`^${y}$`, 'g');

            // console.log(reg1);

            if (w.indexOf(`,${x},`) < 0) {
                u.push(x);
            }
    
            if (w.indexOf(`,${y},`) < 0) {
                u.push(y);
            }
        }
    
        
    }
    
    u.sort(function(a, b) {
        return a - b
    })
    console.log(u);
    return u[n];
}
console.log(dbl_linear(30));
