//log-in
let modalSignUpBtn = document.getElementById(`modal_sign_up_btn`);
let modalSignInBtn = document.getElementById(`modal_sign_in_btn`);
let signOutBtn = document.getElementById(`sign_out_btn`);
let modalPasswordInput = document.getElementById(`sign_in_password_input`);
let modalNameInput = document.getElementById(`sign_in_name_input`);
let signUpBtn = document.getElementById(`sign_up_btn`);
let signInBtn = document.getElementById(`sign_in_btn`);
let modalSignUpStatusTitle = document.getElementById(`sign_up_status_title`);
let modalSignInStatusTitle = document.getElementById(`sign_in_status_title`);
let passwordInput = document.getElementById(`sign_up_password_input`);
let repeatPasswordInput = document.getElementById(`repeat_password_input`);
let nameInput = document.getElementById(`sign_up_name_input`);
let EmailInput = document.getElementById(`Email_name_input`);
let modalSignUp = document.getElementById('id01');
let modalSignIn = document.getElementById(`id02`);
let sideName = document.getElementById(`side_user_name`);
let bagRedDot = document.getElementById(`bag_red_dot`);
let Content_Title_Bag = document.getElementById(`content_title_bag`);
bagRedDot.style.display = `none`;
Content_Title_Bag.style.display = `none`;

// Nút đăng nhập
function signInOnClickCallback() {
    modalSignInStatusTitle.textContent = `Đăng nhập thành viên trang web`;
    modalSignInStatusTitle.style.color = `black`;
}
signInBtn.addEventListener(`click`, signInOnClickCallback);
// Nút đăng nhập trong phần Đăng nhập
// function modalSignInOnclickCallback() {
//     console.log(user)
//     for (let i = 0; i < user.length; i++) {
//         console.log(user[i])
//         if (user[i].email==modalNameInput.value && user[i].password==modalPasswordInput.value)
//         { signIn(i);
//               Content_Title_Bag.style.display = `block`;
//                 modalNameInput.value = null;
//                 modalPasswordInput.value = null;
//                 modalSignIn.style.display = `none`;     
//         } 
//         else {
//                 modalSignInStatusTitle.textContent = `Thông tin sai! Vui lòng điền lại`;
//                 modalSignInStatusTitle.style.color = `red`;
//                 modalNameInput.value = null;
//                 modalPasswordInput.value = null;   
//         }
//     }
// }

function modalSignInOnclickCallback() {
  // console.log(user)
  check = false;
  for (let i = 0; i < user.length; i++) {
      console.log(user[i])
      if (user[i].email==modalNameInput.value && user[i].password==modalPasswordInput.value)
      { signIn(i);
            Content_Title_Bag.style.display = `block`;
              modalNameInput.value = null;
              modalPasswordInput.value = null;
              modalSignIn.style.display = `none`;     

          check=true
            }
     
    }
      if(check==false){
              modalSignInStatusTitle.textContent = `Thông tin sai! Vui lòng điền lại`;
              modalSignInStatusTitle.style.color = `red`;
              modalNameInput.value = null;
              modalPasswordInput.value = null;   
      }
}
modalSignInBtn.addEventListener(`click`, modalSignInOnclickCallback);

function signIn(index) {
    signInBtn.style.display = `none`;
    signOutBtn.style.display = `block`;
    sideName.textContent = user[index].name;
    sideName.style.display = `block`;     

}
// Nút đăng xuất
function signOut() {
    signInBtn.style.display = `block`;
    signOutBtn.style.display = `none`;
    sideName.textContent = ``;
  Content_Title_Bag.style.display = `none`
}
signOutBtn.addEventListener(`click`, signOut);


//showPro
let mainProd = document.getElementById('main-content');
//fnc list
// function showList(productsData){

//     for(let prod of productsData){
//         let imageUrl = prod.imageUrl;
//         let name = prod.name;
//         // console.log(name)
//         let brand = prod.brand;
//         let price = prod.price;
//         let size = prod.size;
//         let sex = prod.sex;
//         let scent = prod.scent;
//         // let more = prod['link'][0].attributes.href;
//         product(imageUrl,name, brand,price,size,sex,scent);
//     }
// }
// console.log(showList);
// showList(productsData);
// fnc prod
// function product(imageUrl,name, brand,price,size,sex,scent){

    // console.log(mainProd)
//     mainProd.insertAdjacentHTML('beforeend',`
//     <div class="main-item">
//         <div class="main-pic">
//             <img wirdth="170" height="170" src="${imageUrl}" alt="${name}"/>
//         </div>
//         <div class="title">
//             <b>${brand}</b><br/>
//             <span>${price}</span>
//           <button class="add_btns" >buy</button>
//         </div>
//     </div>
// `);
// }

function update_table() {

   mainProd.innerHTML = ''; 
  // table_body.innerHTML = '';

  for (let data of productsData) {
    mainProd.insertAdjacentHTML('beforeend', `<tr><div class="main-item"> <div class="main-pic">
          <img class="img_pro" wirdth="170" height="170" src="${data.imageUrl}" alt="${data.name}"/>
      </div>
      <div class="title">
          <b>${data.brand}</b><br/>
          <span>${data.price}</span>
          
      </div></td><button class="add_btns">Buy</button></td></div></tr>`);
    };
}
update_table();







// //DOM add-delete

const table_body = document.getElementById('body');
const add_btns = document.getElementsByClassName('add_btns');
const remove_btns = document.getElementsByClassName('remove_btn');
const tableChoice = document.getElementById('table_choice');
const number_product = document.getElementsByClassName('number_ipt');
const ContainerCartItems = document.getElementById('container_cart_items');
const product_choice=[ ];

// function update_table() {

//     // table_body.innerHTML = '';

//     for (let data of productsData) {
//         table_body.insertAdjacentHTML('beforeend', `<tr><td>${data.name}</td><td>${data.brand}</td><td>${data.price}</td><td><td>${data.size}</td><td>${data.sex}</td><td>${data.scent}</td></td><button class="add_btns">Add</button></td></tr>`);
//       };
// }
// update_table();

// button Add table choice
  for (let i = 0; i < add_btns.length; i++) {
        add_btns[i].addEventListener('click', () => {
           let choice ={name:productsData[i].name, brand:productsData[i].brand, price:productsData[i].price, size:productsData[i].size,sex:productsData[i].sex,scent:productsData[i].scent}
           const isAdded = product_choice.find(product => product.name === choice.name)
           const maxlength=product_choice.length
           if (isAdded){
            alert('bạn đã thêm sản phẩm này rồi');
           }
           else if(maxlength==5)
           {
            alert('Xin lỗi giỏ hàng đã đầy'); 
           }
           else{
           ShowModal();
           product_choice.push(choice);
           update_tableChoice()
           }
        })
  }
function  update_tableChoice(){

  ContainerCartItems.innerHTML = '';

    for (let prod of product_choice) {
      ContainerCartItems.insertAdjacentHTML('beforeend',`<tr><td>${prod.name}</td><td>${prod.brand}</td><td>${prod.price}</td><td><input style="width=2px" type="number" min="1" placeholder="number" id="box"  class="number_ipt"></td><td><button onclick="Remove()" class="remove_btn">Delete</button></td></tr>`)
       
      }
} 

 // button remove table choice
function Remove(){
 for (let i = 0; i < remove_btns.length; i++) {
        remove_btns[i].addEventListener('click', () => {
            product_choice.splice(i, 1);
          console.log(product_choice)
           update_tableChoice();
        });
 }
}

function Sum() {
  let sum=0;
   for(let t=0 ;t<number_product.length;t++)
    {
    sum+=product_choice[t].price*number_product[t].value;
    }
    console.log(sum)
     document.getElementById('sum').innerHTML=sum+" vnd";
  }

// //Slideshow
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

//male choice
const MaleChoice = document.getElementById('male_choice');
var maleproduct =  productsData.filter(function(male) {
    return male.sex == `male`;
});

console.log(maleproduct)

function update_maleproduct() {

  mainProd.innerHTML = '';

    for (let promale of maleproduct) {
      mainProd.insertAdjacentHTML('beforeend', `<tr><div class="main-item"> <div class="main-pic">
      <img class="img_pro" wirdth="170" height="170" src="${promale.imageUrl}" alt="${ promale.name}"/>
  </div>
  <div class="title">
      <b>${ promale.brand}</b><br/>
      <span>${ promale.price}</span>
      
  </div></td><button class="add_btns">Buy</button></td></div></tr>`);
      };
}

//female choice

const FemaleChoice = document.getElementById('male_choice');
var femaleproduct =  productsData.filter(function(female) {
    return female.sex == `female`;
});

// console.log(femaleproduct)

function update_femaleproduct() {

  mainProd.innerHTML = '';

    for (let profemale of femaleproduct) {
      mainProd.insertAdjacentHTML('beforeend', `<tr><div class="main-item"> <div class="main-pic">
      <img class="img_pro" wirdth="170" height="170" src="${profemale.imageUrl}" alt="${ profemale.name}"/>
  </div>
  <div class="title">
      <b>${ profemale.brand}</b><br/>
      <span>${ profemale.price}</span>
      
  </div></td><button class="add_btns">Buy</button></td></div></tr>`);
      };
}

//unisex choice

var unisexproduct =  productsData.filter(function(unisex) {
    return unisex.sex == `unisex`;
});

// console.log(femaleproduct)

function update_unisexproduct() {

  mainProd.innerHTML = '';

    for (let prounisex of unisexproduct) {
      mainProd.insertAdjacentHTML('beforeend', `<tr><div class="main-item"> <div class="main-pic">
      <img class="img_pro" wirdth="170" height="170" src="${prounisex.imageUrl}" alt="${prounisex.name}"/>
  </div>
  <div class="title">
      <b>${ prounisex.brand}</b><br/>
      <span>${ prounisex.price}</span>
      
  </div></td><button class="add_btns">Buy</button></td></div></tr>`);
      };
}




let name = document.getElementById('name')
let email = document.getElementById('email')
let comments = document.getElementById('comments')

function ShowModal(){
  var MyModal = document.getElementById('myModal')
  name.value="";
  email.value="";
  comments.value="";
 MyModal.style.display=`block`
}

// When the user clicks on <span> (x), close the modal
 function CloseModal() {
  var MyModal = document.getElementById('myModal')
  MyModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function() {
//   var MyModal = document.getElementById('myModal')
//   MyModal.style.display = "none";
//   }
