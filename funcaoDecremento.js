function decremento(x) {
    var y = x;
    y--;
    return y;
}
var x = 10;
while (x > 0) {
    console.log(x);
    x = decremento(x);
}
