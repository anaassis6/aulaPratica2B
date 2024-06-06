function decremento (x:number):number{
    let y: number = x;
    y--
    return y
}

let x: number=10;

while (x > 0){
    console.log(x);
    x = decremento(x);
}