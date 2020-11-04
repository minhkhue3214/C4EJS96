let btnR = document.getElementById('btn_roll')
let inputNumber = document.getElementById('inputNumber')

let Count=0;

console.log( getRandomNumber())

function CheckNumber() {
    let number = inputNumber.value;
    while (true) {
        if (number == "") {
            alert('Không để rỗng');
            break;
        } else if (isNaN(number)) {
            alert('Nhập Số ???');
            break;
        } else if (number < 1 || number > 10) {
            alert('Số cần nằm trong khoảng 0-->10');
            break;
        } else {
            Count++;
            return number ;
        }
    }
}

btnR.addEventListener('click', () => {
    let number = CheckNumber();
    
    if (number == randomNumber) {
        alert('Chúc mừng, bạn đã đoán đúng ');
        Count = 0;
    }
    if 
    (!isNaN(number) && (number <= 10 && number >= 1)) {
        alert(`Số lần thử bạn còn lại ${3 - Count} `);
    }
    if (Count == 3) {
        alert(`Bạn đã thua! Con số may mắn là:  ${randomNumber}`);
        alert("Chơi lại nào!!!")
    }
});


// let RandomNumber1 = Number(Math.floor(Math.random() * 10) + 1);
let RandomNumber1 = getRandomNumber()
function getRandomNumber() {
    randomNumber = Number(Math.floor(Math.random() * 10) + 1);
    return randomNumber;
}