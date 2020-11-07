//log-in
let modalSignUpBtn = document.getElementById(`modal_sign_up_btn1`);
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
let see_more = document.getElementById(`see_more`);
bagRedDot.style.display = `none`;
Content_Title_Bag.style.display = `none`;

// Nút đăng nhập
function signInOnClickCallback() {
    modalSignInStatusTitle.textContent = `Đăng nhập thành viên trang web`;
    modalSignInStatusTitle.style.color = `black`;
}
signInBtn.addEventListener(`click`, signInOnClickCallback);
// Nút đăng nhập trong phần Đăng nhập
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
  signUpBtn.style.display = `none`;
    signOutBtn.style.display = `block`;
    sideName.textContent = user[index].name;
    sideName.style.display = `block`;     

}


// ----------------logn-up-------------------------
function modalSignUpOnclickCallback(e){
  e.preventDefault()
  modalSignUp.style.display = `none`;
  signInBtn.style.display = `none`;
  signUpBtn.style.display = `none`;
  signOutBtn.style.display = `block`;
  sideName.textContent = nameInput.value; 
  sideName.style.display = `block`
  Content_Title_Bag.style.display = `block`;   
}
modalSignUpBtn.addEventListener(`click`,modalSignUpOnclickCallback)



// Nút đăng xuất
function signOut(e) {
  e.preventDefault()
    signInBtn.style.display = `block`;
    signUpBtn.style.display = `block`;
    signOutBtn.style.display = `none`;
    sideName.style.display = `none`;
  Content_Title_Bag.style.display = `none`
}
signOutBtn.addEventListener(`click`, signOut);


//showPro
let mainProd = document.getElementById('main-content');

function update_table() {

   mainProd.innerHTML = ''; 
  // table_body.innerHTML = '';

  for (let i=0; i< productsData.length; i++) {
    mainProd.insertAdjacentHTML('beforeend', `<tr><div class="main-item"> <div class="main-pic">
          <img class="img_pro" wirdth="170" height="170" src="${productsData[i].imageUrl}" alt="${productsData[i].name}"/>
      </div>
      <div class="title">
          <b>${productsData[i].name}</b><br/>
          <span>${productsData[i].price} vnđ</span>
          
      </div></td><div class="perfume_btns"><button class="add_btns" style="backgroud-color: red;">Buy</button><button class="view_btns" onclick="document.getElementById('view').style.display='block'">View</button></div></td></div></tr>`);
    };
}
update_table();

//-----------see_more----------------------

// function seemore() {

  // mainProd.innerHTML = ''; 
//  table_body.innerHTML = '';

//  for (let i=12; i< productsData.length; i++) {
//    mainProd.insertAdjacentHTML('beforeend', `<tr><div class="main-item"> <div class="main-pic">
//          <img class="img_pro" wirdth="170" height="170" src="${productsData[i].imageUrl}" alt="${productsData[i].name}"/>
//      </div>
//      <div class="title">
//          <b>${productsData[i].name}</b><br/>
//          <span>${productsData[i].price} vnđ</span>
         
//      </div></td><div class="perfume_btns"><button class="add_btns" style="backgroud-color: red;">Buy</button><button class="view_btns" onclick="document.getElementById('view').style.display='block'">View</button></div></td></div></tr>`);
//    };
//    see_more.style.display = `none`
// }
// see_more.addEventListener(`click`,seemore)


// //DOM add-delete

const table_body = document.getElementById('body');
const add_btns = document.getElementsByClassName('add_btns');
const remove_btns = document.getElementsByClassName('remove_btn');
const tableChoice = document.getElementById('table_choice');
const number_product = document.getElementsByClassName('number_ipt');
const ContainerCartItems = document.getElementById('container_cart_items');
const product_choice=[ ];
// add_btns.style.display=`none`;

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

  //view
const view = document.getElementById('view_perfume');
const click_view = document.getElementsByClassName('view_btns');

for (let i=0; i<click_view.length; i++) {
  click_view[i].addEventListener('click',()=>{
    // function view_perfume() {

  view.innerHTML = ''; 

  //  for (let i=0; i<productsData.length; i++) {
     view.insertAdjacentHTML('beforeend', `<div class="info_text"> <div class="info_img">
           <img class="img_pro_view" wirdth="170" height="170" src="${productsData[i].imageUrl}" alt="${productsData[i].name}"/>
       </div>
       <div class="title_view">
           <div><b style="color: red;">${productsData[i].name}</b></div>
           <div><b> Brand:</b> <span>${productsData[i].brand}</span></div>
           <div><b> Size:</b> <span>${productsData[i].size}</span></div>
           <div> <b> Sex:</b> <span>${productsData[i].sex}</span></div>
           <div><b> Scent:</b> <span>${productsData[i].scent}</span></div>
           <div><span><b> Price</b>: ${productsData[i].price} vnđ</span></div>
           <button class="close_btns" onclick="document.getElementById('view').style.display='none'">Close</button>
           
        </div>`);
    //  };
  // }
  // view_perfume();
  })
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
  slides[slideIndex - 1].style.display = `block`;
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

// //male choice
// const MaleChoice = document.getElementById('male_choice');
// var maleproduct =  productsData.filter(function(male) {
//     return male.sex == `male`;
// });

// console.log(maleproduct)

// function update_maleproduct() {

//   mainProd.innerHTML = '';

//     for (let promale of maleproduct) {
//       mainProd.insertAdjacentHTML('beforeend', `<tr><div class="main-item"> <div class="main-pic">
//       <img class="img_pro" wirdth="170" height="170" src="${promale.imageUrl}" alt="${ promale.name}"/>
//   </div>
//   <div class="title">
//       <b>${ promale.brand}</b><br/>
//       <span>${ promale.price}</span>
      
//   </div></td><button class="add_btns">Buy</button></td></div></tr>`);
//       };
// }

// //female choice

// const FemaleChoice = document.getElementById('male_choice');
// var femaleproduct =  productsData.filter(function(female) {
//     return female.sex == `female`;
// });

// // console.log(femaleproduct)

// function update_femaleproduct() {

//   mainProd.innerHTML = '';

//     for (let profemale of femaleproduct) {
//       mainProd.insertAdjacentHTML('beforeend', `<tr><div class="main-item"> <div class="main-pic">
//       <img class="img_pro" wirdth="170" height="170" src="${profemale.imageUrl}" alt="${ profemale.name}"/>
//   </div>
//   <div class="title">
//       <b>${ profemale.brand}</b><br/>
//       <span>${ profemale.price}</span>
      
//   </div></td><button class="add_btns">Buy</button></td></div></tr>`);
//       };
// }

// //unisex choice

// var unisexproduct =  productsData.filter(function(unisex) {
//     return unisex.sex == `unisex`;
// });

// // console.log(femaleproduct)

// function update_unisexproduct() {

//   mainProd.innerHTML = '';

//     for (let prounisex of unisexproduct) {
//       mainProd.insertAdjacentHTML('beforeend', `<tr><div class="main-item"> <div class="main-pic">
//       <img class="img_pro" wirdth="170" height="170" src="${prounisex.imageUrl}" alt="${prounisex.name}"/>
//   </div>
//   <div class="title">
//       <b>${ prounisex.brand}</b><br/>
//       <span>${ prounisex.price}</span>
      
//   </div></td><button class="add_btns">Buy</button></td></div></tr>`);
//       };
// }




let name = document.getElementById('name')
let email = document.getElementById('email')
let comments = document.getElementById('comments')

function ShowModal(){
  var MyModal = document.getElementById('myModal')
  name.value="";
  email.value="";
  comments.value="";
 MyModal.style.display=`block`
 setTimeout(function() {
   MyModal.style.display = 'none'
 }, 1000)
}

// When the user clicks on <span> (x), close the modal
 function CloseModal() {
  var MyModal = document.getElementById('myModal')
  MyModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function() {
//   var view1 = document.getElementById('view')
//   view1.style.display = "none";
//   }

// tìm kiếm theo tên
let input_search = document.getElementById('input_place')
function getInputValue(){
  mainProd.innerHTML ='';
  var inputVal = input_search.value.toLowerCase();
  for(let i = 0 ; i < productsData.length ;i++){
    let y = productsData[i].name.toLowerCase()
      if(y == inputVal){
        // update_table();
        mainProd.insertAdjacentHTML('beforeend', `<tr><div class="main-item"> <div class="main-pic">
        <img class="img_pro" wirdth="170" height="170" src="${productsData[i].imageUrl}" alt="${productsData[i].name}"/>
    </div>
    <div class="title">
        <b>${productsData[i].name}</b><br/>
        <span>${productsData[i].price} vnđ</span>
        
    </div></td><div class="perfume_btns"><button class="add_btns" style="backgroud-color: red;">Buy</button><button class="view_btns" onclick="document.getElementById('view').style.display='block'">View</button></div></td></div></tr>`);

        searchResult(productsData[i].name);
        
    }
  }
}

let Productslist = document.getElementById('Productslist')
function searchResult (name){console.log(name)
  Productslist.insertAdjacentHTML('beforeEnd',
  `
      <option value="${name}" />              
  `
  )
}
let arrayName = [];

function fillArr(){
  for( let i = 0 ; i <productsData.length;i++){
    arrayName.push(productsData[i].name.toLowerCase())
  }
  // console.log(arrayName)
  for(let i = 0 ; i < productsData.length; i++){
    searchResult(productsData[i].name)
  }
}
console.log(fillArr())


