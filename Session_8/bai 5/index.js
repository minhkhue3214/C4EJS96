function getX(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
}

let x = getX(4, 16);
alert(x);
if (x < 4) {
    console.log('Failed: the number is smaller than 0');
} else if (x > 16) {
    console.log('Failed: the number is bigger than 10');
} else {
    console.log('Passed, bravo');
}