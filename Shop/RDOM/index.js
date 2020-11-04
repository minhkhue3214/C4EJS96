let btnRoll = document.getElementById('roll');
let txtNumber = document.getElementById('inputNumber');
let randomNumb = getRandomNumber();
let count = 0;
function getRandomNumber() {
    randomNumber = Number(Math.floor(Math.random() * 10) + 1);
    return randomNumber;
}
console.log( getRandomNumber())

function checkInputNumber() {
    let number = txtNumber.value;
    while (true) {
        if (number == "") {
            alert('Vui lòng nhập số');
            break;
        } else if (isNaN(number)) {
            alert('Vui lòng nhập số!');
            break;
        } else if (number < 1 || number > 10) {
            alert('Số nhập cần nằm trong khoảng 0-10!');
            break;
        } else {
            count++;
            return number ;
        }
    }
}

btnRoll.addEventListener('click', () => {
    let number = checkInputNumber();
    
    if (number == randomNumber) {
        alert('Chúc mừng, bạn đã đoán đúng số may mắn!');
        count = 0;
    }
    if (!isNaN(number) && (number <= 10 && number >= 1)) {
        alert(`Sai! Còn lại ${3 - count} lần thử`);
    }
    if (count == 3) {
        alert(`Bạn đã thua! Con số may mắn là:  ${randomNumber}`);
        alert("Chơi lại nào!!!")
        window.location.assign("index.html");
    }
});


// let n = Number(prompt('nhập số chẵn n trong khoảng từ 4-20:'))
// if (n < 4 || n > 20 || n % 2 !== 0) {
//     alert('vui lòng nhập lại')
// }
// else {
//     var x = Number(prompt('nhập số bất kỳ trong dãy'))
//     let y = n / 2 + x;
//     let z = x - n / 2;
//         if (n / 2 > x) {
//             alert('số đối là: ' + y)
//         }
//         else {
//             alert('số đối là: ' + z)
//         }

// }

// let s1 = prompt ('nhập chuỗi 1: ')
// let s2 = prompt ('nhập chuỗi 2: ')
// let sp1 = s1.split("")
// let sp2 = s2.split("")
// if (sp1.length <sp2.length) {
//     for (let x=0 ; x < sp2.length ; x++) {
//         console.log (sp1[x])
//         console.log (sp2[x])
//         }
// }
// else {
//     for (let x=0 ; x < sp1.length ; x++) {
//         console.log (sp1[x])
//         console.log (sp2[x])
//         }
// }
// let a= sp1.concat(sp2)
// console.log (a)