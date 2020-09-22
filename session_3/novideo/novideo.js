// //Bài 1
// // swap variables cách 1
// {
//   let a = 1;
//   let b = 8;
//    a= [b,b=a][0];
//   console.log(a, b);
// }
// //swap variables cách 2
// {
// let a = 6;
// let b = 7;
// [a,b]=[b,a]
// console.log(a, b);
// }
// //Bài 2
// {
//    str = "January,February,March,April,May,June,July,August,September,October,November,December";
// let array = str.split(',');
// console.log (array)
// }

// //bài 3
// {
// const movies = ['SITCOM','ACTION','COMEDY','ROMANTIC'];
// console.log(...movies);
// }
// //bài 4
// //test not done
// {
// while (true){
//   let A=["Jeans","Tshirt","sock"]
//   let x=prompt('Hi there,welcome to shop,what do you want(C,R,U,D)');
//   if(x=="c")
//   {
//     let c=prompt('Nhap vào gia tri muốn tạo');
//     A.push(c);
//     alert('done')
//         let x=prompt('Hi there,welcome to shop,what do you want(C,R,U,D)');
//      for (let i=0;i<A.length;i++)
//       {
//       console.log((i+1)+'.'+ A[i])
//       }
//       break;
//   }
//   else if (x=="r")
//     {
//       for (let i=0;i<A.length;i++)
//       {
//       console.log((i+1)+'.'+ A[i])
//       }
//       break;
//     }
// else if (x=="d")
//   {
//     let d=prompt('Nhap vao vi tri muon xoa')
//     A.splice(d,1)
//     alert('done')
//     let x=prompt('Hi there,welcome to shop,what do you want(C,R,U,D)');
//      for (let i=0;i<A.length;i++)
//       {
//       console.log((i+1)+'.'+ A[i])
//       }
//       break;
//   }
// else if(x=="u")
//   {
//     let u=prompt('Nhap vào vi tri bạn muon them');
//     alert('done')
//     let t=prompt('Nhap vào thứ bạn muốn them');
//     alert('done')
//        A[u]=t 
//     let x=prompt('Hi there,welcome to shop,what do you want(C,R,U,D)');
//      for (let i=0;i<A.length;i++)
//       {
//       console.log((i+1)+'.'+ A[i])
//       }
//       break;
//   }
//   else if (x===null)
//   {
//     alert('goodbye!!!')
//     break;
//   }
// else
//   {
//     alert('This command is not supported')
//   }
// }
// }

// //bài 5 tham khao
// //b5 https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?fbclid=IwAR1VXpz4oKwVPd3tGQTv-G5aY3kPNoFBu3d2lnretPI5KrV4TNwP4sUjN6g
// let x=prompt('Nhap vao day so')
// let array = x.split(',');
// array = array.map(array => Number(array))
// let sum =array.reduce(function (accumulator, currentValue) {
// return accumulator + currentValue
// }, 0)
// alert(sum)

// //b6 Search nhg chưa hiểu lệnh
// let x=prompt('Nhap vao day so')
// let array = x.split(',');
// var maxInNumbers = Math.max.apply(Math, array);
// alert("Giá trị lớn nhất là " +maxInNumbers);




//   //b7
// {
//   let x=prompt('Enter a number')
//   let fruits = ["10", "20", "30", "40","50"];
//   let n = fruits.includes(x);
//   let i = fruits.indexOf(x);
//   console.log(n)
//   if(n == true)
//     {
//       alert("In my Array at index "+ i)
//     }
//   else if(n == False)
//     {
//       alert('Not in my Array')
//     }
// }

// //b8.1
// let Array=["10","20","30","40","50"]
// var x = Array.toString();
// console.log('hello my name is Khue and here is my sheep size')
// console.log(x)

// //8.2
// let Array=["10","20","30","40","50"]
// var x = Array.toString();
// console.log('hello my name is Khue and here is my sheep size')
// console.log(x)
// Array = Array.map(Array => Number(Array))
// //let array = Array.split(',');
// var maxInNumbers = Math.max.apply(Math, Array);
// console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");


// //8.3
// let Array=["10","20","30","40","50"]
// var x = Array.toString();
// console.log('hello my name is Khue and here is my sheep size')
// console.log(x)
// Array = Array.map(Array => Number(Array))
// //let array = Array.split(',');
// var maxInNumbers = Math.max.apply(Math, Array);
// console.log(" Now my biggest sheep has size"+maxInNumbers+" let shave it");
// let i = Array.indexOf( maxInNumbers);
// console.log('After shearing,here is my flock')
// Array[i]=8
// console.log(Array)

// //8.4
// let Array=["10","20","30","40","50"]
// var x = Array.toString();
// console.log('hello my name is Khue and here is my sheep size')
// console.log(x)
// Array = Array.map(Array => Number(Array))
// //let array = Array.split(',');
// var maxInNumbers = Math.max.apply(Math, Array);
// console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");
// let i = Array.indexOf( maxInNumbers);
// // console.log(i) //kiemtragiatri i
// Array[i]=8
// console.log(Array)
// for(t=0;t<Array.length;t++)
// {
//     Array[t]=Array[t]+50;
// }
// console.log("MONTH 1")
// console.log("One month has, passed, my sheeps have grown, here are their sizes")
// console.log(Array);

// //8.5 tham khảo của bạn Long
// let Array=["10","20","30","40","50"]
// var x = Array.toString();
// console.log('hello my name is Khue and here is my sheep size')
// console.log(x)
// Array = Array.map(Array => Number(Array))
// //let array = Array.split(',');
// var maxInNumbers = Math.max.apply(Math, Array);
// console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");
// let i = Array.indexOf( maxInNumbers);
// //console.log(i)
// Array[i]=8
// console.log(Array)
// for(let t=0;t<Array.length;t++)
//   {
//     Array[t]=Array[t]+50;
//   }
// console.log( '1 Month');
// console.log('one month has passed and my sheep have grown');
// console.log(Array)
// console.log('3 Month');
// for(let t=0;t<Array.length;t++)
//   {
//     Array[t]=Array[t]+50;
//   }
// console.log('three month has passed and my sheep have grown');
// console.log(Array)
// var maxInNumbers = Math.max.apply(Math, Array);
// console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");

// //bai 8.6 tham khảo của bạn Long
// let Array=["10","20","30","40","50"]
// var x = Array.toString();
// console.log('hello my name is Khue and here is my sheep size')
// console.log(x)
// Array = Array.map(Array => Number(Array))
// //let array = Array.split(',');
// var maxInNumbers = Math.max.apply(Math, Array);
// console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");
// let i = Array.indexOf( maxInNumbers);
// //console.log(i)
// Array[i]=8
// console.log(Array)
// for(let t=0;t<Array.length;t++)
//   {
//     Array[t]=Array[t]+50;
//   }
// console.log( '1 Month');
// console.log('one month has passed and my sheep have grown');
// console.log(Array)
// console.log('3 Month');
// for(let t=0;t<Array.length;t++)
//   {
//     Array[t]=Array[t]+50;
//   }
// console.log('three month has passed and my sheep have grown');
// console.log(Array)
// var maxInNumbers = Math.max.apply(Math, Array);
// console.log(" Now my biggest sheep has size "+maxInNumbers+" let shave it");
// let sum=0
// for(let t=0;t<Array.length;t++)
//   {
//     sum+=Array[t];
//   }
// console.log("my flock has size in total "+sum)
// let money=sum*2
// console.log("i would get  "+ sum+"*2$ ="+money)

// //bài 9
// clear()
//  function drawPolygon(){
//    const  colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
//        for (let i=0; i<colors.length; i++){
//       for( let j= 1; j<=4; j++)
//     {
//       color(colors[i])
//       fd(30*i);
//       rt(90);
//     }
//   }
//   }
//   drawPolygon();

// //bai 10
// {
// var Array=prompt("Enter a squence of Name");
// var sum = Array.split(",");
// var sum1 = sum.map(x => "<"+x+">");
// alert(`${sum}"=>" ${sum1} `)
// }

// //bài 11
// let words =prompt('Nhap vao day so cần lọc');
// let array = words.split(',');

// const result = array.filter(x => x%2 !== 0);

// alert(words+'=>'+result )