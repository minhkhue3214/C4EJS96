let n = Number(prompt('nhập số chẵn n trong khoảng từ 4-20:'))
if (n < 4 || n > 20 || n % 2 !== 0) {
    alert('nhập lại!!!!')
}
else {
    var x = Number(prompt('nhập số bất kỳ trong dãy'))
    let oppositeNumber = n / 2 + x;
    let znumber = x - n / 2;
        if (n / 2 > x) {
            alert('số đối là: ' + oppositeNumber)
        }
        else {
            alert('số đối là: ' + znumber)
        }
}

// findOppositeNumber(n,inputNumber)
// {
    
// }
// console.log(n)