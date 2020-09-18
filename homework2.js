console.log('Bài 1');
console.log('1. What are var and const in JavaScript?');
console.log('là 2 kiểu khai báo');
console.log('What are the differences between let and var?');
console.log('let phạm vi hoạt động nhỏ hơn trong chính cặp ngoặc nhọn chứa nó,var phạm vi hoạt động rộng hơn vươt qua khỏi cặp ngoặc nhọn');
console.log('What are the differences between let and const?');
console.log('khi khai báo biến bằng const thì biến không thể thay đổi còn let thì có');
console.log('What are the differences between let and const?');
console.log('What to use in what cases?');
console.log('var trong hầu hêt các trường hợp hoạt động như let,có thể coi là phiên bản cũ của let');
console.log('const cũng giống như let trừ việc khi khai báo biến thì không thể thay đổi được nữa');

console.log('Bài 2');
// Câu 2:
{
console.log('Câu 2:');
console.log('1. What is Boolean?');
console.log('Boolean là một trong những kiểu dữ liệu trong Java, nó chỉ cho phép biến mang 2 giá trị true (ĐÚNG) hoặc false (SAI)');
console.log('2. What results in Boolean?');
console.log('Kết quả trả về sẽ là true hoặc false, ngoài ra các biến chưa có giá trị, giá trị bằng 0 hoặc null cũng sẽ trả về false');
}
// Câu 3:
{
for (let i = 0; i < 8; i++)
  {
        console.log(i)
   }
}
// câu 3b
{
let x = prompt('Nhập vào một số'); 
for (let i = 0; i<x;i++)
  {
        console.log(i);
  }
}
//Câu 3c
{
 let x = prompt('Nhập vào một số'); 
for (let i = 3; i < x ; i++ )
  {
        console.log(i);
  }
}
//câu 3d
{
let c = prompt('enter c'); 
let n = prompt('enter n');
for (let i = c;  i< n ; i++ )
  {
        console.log(i);
  }
}
//câu 3e
{
let n = prompt('enter n'); 
let c = Number(prompt('enter c'));
for (let i = c; i < n; i +=3 )
  {
        console.log(i);
  }
}
//câu 3f
{let c=Number(prompt('enter c'));
let n=prompt('enter n');
let z=Number(prompt('enter z'));
for (let i=c; i<n; i=i+z )
  {
        console.log(i);
  }
}

// câu 4
{
let x =prompt('enter x');
let F =1;
for(let i=1;i<= x;i++)
  {
    F *=i; 
  }
  alert(`Gia tri giai thua ${F}`)
}

//câu 5
{
   let x =prompt('Nhập vào số tuổi của bạn')
  if(x<14)
  {
      alert('Rất tiếc bạn không đủ độ tuổi')
  }
  else if(x>=14)
  {
      alert('welcome!!')
  }
}

//câu 6
{
   let x =prompt('Nhập vào số x')
  if(x<4.5)
  {
      alert('lower half of 9')
  }
  else if(x>4.5)
  {
      alert('higher half of 9')
  }
}

//câu 7
{
 let x =prompt('Nhập vào x');
  let y =prompt('nhập vào y');
  if(x<y)
  {
      alert(`${x}is lower half of ${y}`);
  }
  else if(x>y)
  {
      alert(`${x}is higher half of ${y}`)
  }
}

//câu 8
{
 let x =prompt('Nhập vào x');
  if(x%2==0)
  {
      alert(` ${x} là số chẵn`);
  }
  else
  {
      alert(` ${x} là số lẻ`)
  }
}
//Câu 9a
{
  let L =0;
let H =0;
for(let i=0; i <=6 ;i++){
    if(i<3){
      L++;
    }
    else if(i>3){
      H++;
    }
  }
  console.log(`H${H}`);
  console.log(`L${L}`);
}

//câu 9b
{
  let a = Number(prompt("enter a number"));
let b = Number(a/2);
let L =0;
let H =0;
for(let i=0; i <=a ;i++){
  if(i<b){
    L++;
  }
  else if(i>b){
    H++;
  }
}
console.log(H+"H");
console.log(L+"L");  
}

//9c
{
  for (let i = 0; i<8 ; i++ )
     {
       if(i%2==0)
       {
       console.log(0);
       }
       else
       console.log(1);
     }
}

//9d
{
   let x = prompt('Nhập vào một số x'); 
   for (let i = 0; i<= x ; i++ )
     {
       if(i%2==0)
       {
       console.log(0);
       }
       else
       console.log(1);
     }
}

//10
{
let weight = Number(prompt('enter weight'));
let height = Number(prompt('enter height'));
  let BMI=weight/(height*height)  
  if (BMI<16)
   {
      console.log('severely underweight');
  } 
  else if (16<BMI<18.5) 
  {
 console.log('underweight');
  }
   else if(18.5<BMI<25)
   {
   console.log('normal');
   }
   else if(25<BMI<30)
   {
       console.log('overweight');
   }
   else if(30<BMI)
   {
       console.log('Obese');
   }
  }
11//hinh vuong
{
  function square() {
    for (var i=1; i <= 4; i++) {
      fd(50)
      lt(90)
    }
  }
  square()
}

  //11 tam giac
{
  function triangle() {
    for (let i=1; i <= 3; i++) {
      fd(50)
      rt(120)
    }
  }

  triangle()
}
  //11 ngu giac
  {
  function pentagon() {
    for (let i=1; i <= 5; i++) {
      fd(50)
      rt(72)
    }
  }
  pentagon()
  }
//11 luc giac đều
{
function hexagon() {
    for (let i=1; i <= 6; i++) {
      fd(50)
      rt(60)
    }
  }
  hexagon()
}
  12//
  {
  function drawPolygon(){
    let x = prompt (" enter number of edge:")
    for (let i=1; i<=x; i++)
    {
      fd(150);
      rt(360/x);
    }
  }
  drawPolygon();
  }
 
  13//
  {
  function drawPolygon(){
    let x = prompt (" enter number of edge:")
    for (let i=1; i<=x; i++){
      for( let j= 1; j<=i+2; j++)
    {
      fd(100);
      rt(360/(i+2));
    }
  }
  }
  drawPolygon();
}