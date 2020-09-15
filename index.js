//Bài 1
console.log("Trong Js xay ra lỗi syntax khi")
console.log("Biến được khởi tạo bắt đầu bằng số")
console.log("Biến chứa những ký tự đặc biệt")
console.log("Biến trùng với các từ khóa đặc biệt có trong Js")
 console.log("Ví dụ")
 console.log("let 5Ting")
 console.log("H@N")
 console.log("let while")
console.log("Trong Js muốn kiểm tra một kiểu dữ liệu trong biến ta dùng lệnh typeof")
//bài 2
 console.log("1-b,2-a,3-e,4-c")
//bài 3
{
let message = "coding is great";
console.log(`${ message}`)
}
{
    let studentcount = 0 ;
    console.log(`${ studentcount}`) 
}
//bài 4
{
    let message = "coding is great";
    message="coding might not be easy but still great";
    console.log(`${ message}`)
}
{
    let studentcount = 0 ;
    studentcount = 16 ;
    console.log(`${ studentcount}`)
}

{
    let messenger = "Coding might not be easy, but still great";
    console.log(messenger);
    messenger= messenger.toLowerCase();
    console.log(messenger);
}
{
    let studentcount = 0 ;
studentcount = 16 ;
console.log(`${ studentcount}`)
studentcount++;
console.log(`${ studentcount}`)

}
//bài 5
{
    alert("Chuc một ngày tốt lành")  
}
//bài 6
{
    let name= prompt("Hi there, your name please!");
alert(`xin chào bạn ${name}`);
}
//bài 7
{
    let firstName = prompt("Enter your first name:");
    let lastName= prompt("Enter your last name");
    alert(`Hi ${firstName} ${lastName}`);    
}
//bài 8
{
    let x=prompt("the lenghth of the squares??");
    let y= x*x
    alert(`the area of the squares is ${y}`);
}
//bài 9
{
    let r = prompt("ban kinh hinh tron");
    let pi=3.14
    let s= r*r*pi
    alert(`dien tich hinh tron${s}`);
}
//bài 10
{
    var x= prompt("Nhap vao do C");
var y= x*1.8+32;
alert(`${x}(C) = ${y} (F)`);
}