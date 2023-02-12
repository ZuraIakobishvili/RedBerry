const firstName =  document.getElementById('firstName');
const lastName =  document.getElementById('lastName');
const photo = document.getElementById('photoUpload');
const textarea = document.getElementById('textarea');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');

const firstNameValue = document.getElementById('firstNameValue');
const lastNameValue = document.getElementById('lastNameValue');
const emailValue = document.getElementById('emailValue');
const phoneNumberValue = document.getElementById('phoneNumberValue')
const aboutMe = document.getElementById('aboutMe');
const photoValue = document.getElementById('photoValue');



// Save data to localStorage and display it in input field

function insertData (inputName, insertPlaceName, storageName) {   
    inputName.addEventListener('input', function(){
        insertPlaceName.innerHTML = inputName.value
        localStorage.setItem(storageName,inputName.value)
})
    insertPlaceName.innerHTML = localStorage.getItem(storageName);
    inputName.value = localStorage.getItem(storageName);
}

insertData(firstName,firstNameValue,'firstname');
insertData(lastName,lastNameValue,'lastname');
insertData(email,emailValue,'email');
insertData(phoneNumber,phoneNumberValue,'phone');
insertData(textarea,aboutMe,'aboutme');




//Image upload 

const uploadImage = document.getElementById('photoUpload');

photoUpload.addEventListener('change' , () => {
    const file = photoUpload.files[0]; 
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', () => {
        const url = fileReader.result       
        const img = new Image();
        img.src = url;
        photoValue.appendChild(img);
    })

})

photoUpload.addEventListener('change' , () => {
  const file = photoUpload.files[0]; 
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener('load', () => {
      const url = fileReader.result
      localStorage.setItem('image', url);
  })
});

const url = localStorage.getItem('image');
const img = new Image();
img.src = url;
photoValue.appendChild(img);



// Validation

const pattern = /^[ა-ჰ]+$/;
//First Name Validation
const firstNameErrorMsg = document.getElementById('first-name-error')
const firstNameIcon = document.getElementById('first-name-icon');

if (localStorage.getItem("firstNameStyle")) {
    firstName.setAttribute("style", localStorage.getItem("firstNameStyle"));
  }
if(localStorage.getItem('firstNameErrorStyles')) {
    firstNameErrorMsg.setAttribute('style',localStorage.getItem('firstNameErrorStyles'))
  }
if(localStorage.getItem('firstNameError')) {
  firstNameErrorMsg.innerHTML = localStorage.getItem('firstNameError')
}
if(localStorage.getItem('icon-src')) {
  firstNameIcon.src = localStorage.getItem('icon-src')
}
if(localStorage.getItem('iconStyles')) {
  firstNameIcon.classList.add(localStorage.getItem('iconStyles'))
}

firstName.addEventListener("input", function () {
  if (firstName.value.match(pattern) && firstName.value.length > 2) {
    firstName.setAttribute("style", "border: 1px solid #98E37E;");
    localStorage.setItem("firstNameStyle","border: 1px solid #98E37E;");
    localStorage.setItem('firstNameError', 'Your first name is correct');
    localStorage.setItem("firstNameErrorStyles","color:#98E37E;");
    firstNameErrorMsg.setAttribute('style', localStorage.getItem("firstNameErrorStyles"));
    localStorage.setItem('iconStyles', 'first-name-success-icon');
    localStorage.setItem('icon-src', 'images/success-icon.svg');
    firstNameErrorMsg.innerHTML = localStorage.getItem('firstNameError');
    firstNameIcon.classList.add(localStorage.getItem('iconStyles'));
    firstNameIcon.src = localStorage.getItem('icon-src');

  } else {
    firstName.setAttribute("style", "border: 1px solid #EF5050;");
    localStorage.setItem("firstNameStyle","border: 1px solid #EF5050;");
    localStorage.setItem("firstNameError","Enter correct info");
    localStorage.setItem("firstNameErrorStyles","color:#EF5050;");
    localStorage.setItem('icon-src', 'images/danger-icon.svg');
    localStorage.setItem('iconStyles', 'first-name-danger-icon');
    firstNameErrorMsg.innerHTML = localStorage.getItem('firstNameError');
    firstNameErrorMsg.setAttribute('style', localStorage.getItem("firstNameErrorStyles"));
    firstNameIcon.classList.add(localStorage.getItem('iconStyles'))
    firstNameIcon.src = localStorage.getItem('icon-src');
    
  }

    if(firstName.value.length == 0) {
        firstName.setAttribute("style", "border: 1px solid #BCBCBC;");
        localStorage.setItem("firstNameStyle","border: 1px solid #BCBCBC;");
        localStorage.setItem('firstNameError', 'მინიუმ 2 ასო,ქართული ასოები');
        localStorage.setItem("firstNameErrorStyles","color:#BCBCBC;position:relative;bottom:323px");
        localStorage.setItem('iconStyles', 'first-name-hidden-icon');
        firstNameErrorMsg.innerHTML = localStorage.getItem('firstNameError');
        firstNameErrorMsg.setAttribute('style',localStorage.getItem('firstNameErrorStyles'));
        firstNameIcon.classList.add(localStorage.getItem('iconStyles'));
    }

});
//Last Name Validation
const lastNameErrorMsg = document.getElementById('last-name-error');
const lastNameIcon = document.getElementById('last-name-icon')

if (localStorage.getItem("lastNameStyles")) {
    lastName.setAttribute("style", localStorage.getItem("lastNameStyles"));
  }
if(localStorage.getItem('lastNameErrorMsg')) {
    lastNameErrorMsg.innerHTML = localStorage.getItem('lastNameErrorMsg');
  }
if(localStorage.getItem('lastNameErrorStyles')) {
  lastNameErrorMsg.setAttribute('style', localStorage.getItem('lastNameErrorStyles'));
}
if(localStorage.getItem('lastname-src')) {
  lastNameIcon.src = localStorage.getItem('lastname-src');
}
if(localStorage.getItem('lastNameIconStyles')) {
  lastNameIcon.classList.add(localStorage.getItem('lastNameIconStyles'));
}


lastName.addEventListener("input", function () {
    if (lastName.value.match(pattern) && lastName.value.length > 2) {
      lastName.setAttribute("style", "border: 1px solid #98E37E;");
      localStorage.setItem("lastNameStyles","border: 1px solid #98E37E;");
      localStorage.setItem('lastNameErrorMsg', 'Your last name is correct');
      localStorage.setItem('lastNameErrorStyles','color:#98E37E;position:relative;bottom:20px;');
      localStorage.setItem('lastname-src', 'images/success-icon.svg')
      localStorage.setItem('lastNameIconStyles', 'last-name-success-icon');
      lastNameErrorMsg.innerHTML = localStorage.getItem('lastNameErrorMsg');
      lastNameErrorMsg.setAttribute('style', localStorage.getItem('lastNameErrorStyles'));   
      lastNameIcon.classList.add(localStorage.getItem('lastNameIconStyles'));
      lastNameIcon.src = localStorage.getItem('lastname-src');
      
      
     

    } else {
        lastName.setAttribute("style", "border: 1px solid #EF5050;");
        localStorage.setItem("lastNameStyles","border: 1px solid #EF5050;");
        localStorage.setItem("lastNameErrorMsg","Enter correct info");
        localStorage.setItem("lastNameErrorStyles","color:#EF5050;position:relative;bottom:15px");
        localStorage.setItem('lastname-src', 'images/danger-icon.svg');
        localStorage.setItem('lastNameIconStyles', 'last-name-danger-icon');
        lastNameErrorMsg.innerHTML = localStorage.getItem('lastNameErrorMsg')
        lastNameErrorMsg.setAttribute('style', localStorage.getItem("lastNameErrorStyles"));
        lastNameIcon.classList.add(localStorage.getItem('lastNameIconStyles'));
        lastNameIcon.src = localStorage.getItem('lastname-src');
    }
  
    if(lastName.value.length == 0) {
        lastName.setAttribute("style", "border: 1px solid #BCBCBC;");
        localStorage.setItem("lastNameStyles","border: 1px solid #BCBCBC;");
        localStorage.setItem('lastNameErrorMsg', 'მინიუმ 2 ასო,ქართული ასოები');
        localStorage.setItem('lastNameErrorStyles', 'color:#2E2E2E;position:relative;bottom:330px;');
        lastNameErrorMsg.innerHTML = localStorage.getItem('lastNameErrorMsg');
        lastNameErrorMsg.setAttribute('style', localStorage.getItem('lastNameErrorStyles'));
        localStorage.setItem('lastNameIconStyles', 'last-name-icon-hidden');
        lastNameErrorMsg.classList.add(localStorage.getItem('lastNameIconStyles'));
      }
  });


  //Email Validation
  const emailPattern = /^[A-Za-z0-9._%+-]+@redberry.ge$/ ;
  const emailErrorMsg = document.getElementById('email-error')
  const emailIcon = document.getElementById('email-icon')

if (localStorage.getItem("emailStyles")) {
    email.setAttribute("style", localStorage.getItem("emailStyles"));
  }
if(localStorage.getItem('emailErrorMsg')) {
  emailErrorMsg.innerHTML = localStorage.getItem('emailErrorMsg')
  }
if(localStorage.getItem('emailErrorStyles')) {
  emailErrorMsg.setAttribute('style', localStorage.getItem('emailErrorStyles'))
  }
if(localStorage.getItem('emailIconSrc')) {
  emailIcon.src = localStorage.getItem('emailIconSrc')
}
if(localStorage.getItem('emailIconStyles')){
  emailIcon.classList.add(localStorage.getItem('emailIconStyles'))
}

email.addEventListener("input", function () {
    if (email.value.match(emailPattern) && email.value.length !== 0) {
      email.setAttribute("style", "border: 1px solid #98E37E;");
      localStorage.setItem("emailStyles","border: 1px solid #98E37E;");
      localStorage.setItem('emailErrorMsg', 'Your email is correct');
      localStorage.setItem('emailErrorStyles', 'color:#98E37E')
      emailErrorMsg.innerHTML = localStorage.getItem('emailErrorMsg');
      emailErrorMsg.setAttribute('style', localStorage.getItem('emailErrorStyles'));
      localStorage.setItem('emailIconSrc', 'images/success-icon.svg')
      emailIcon.src = localStorage.getItem('emailIconSrc')
      localStorage.setItem('emailIconStyles', 'email-icon-success')
      emailIcon.classList.add(localStorage.getItem('emailIconStyles'))
      
      

    } else {
        email.setAttribute("style", "border: 1px solid #EF5050;");
        localStorage.setItem("emailStyles","border: 1px solid #EF5050;");
        localStorage.setItem('emailErrorMsg', 'Enter correct email');
        localStorage.setItem('emailErrorStyles', 'color:#EF5050' );
        emailErrorMsg.innerHTML = localStorage.getItem('emailErrorMsg');
        emailErrorMsg.setAttribute('style', localStorage.getItem('emailErrorStyles'));
        localStorage.setItem('emailIconSrc', 'images/danger-icon.svg');
        emailIcon.src = localStorage.getItem('emailIconSrc');
        localStorage.setItem('emailIconStyles', 'email-danger-icon');
        emailIcon.classList.add(localStorage.getItem('emailIconStyles'))

    }
  
    if(email.value.length == 0) {
        email.setAttribute("style", "border: 1px solid #BCBCBC;");
        localStorage.setItem("emailStyles","border: 1px solid #BCBCBC;");
        localStorage.setItem('emailErrorMsg', 'უნდა მთავრდებოდეს @redberry.ge-ით ')
        localStorage.setItem('emailErrorStyles', 'color:#2E2E2E');
        emailErrorMsg.innerHTML = localStorage.getItem('emailErrorMsg');
        emailErrorMsg.setAttribute('style',localStorage.getItem('emailErrorStyles'))
      }
  });

  //Phone number validation
  const geoNumberPattern = /^\+995\d{9}$/
  const phoneErrorMsg = document.getElementById('phone-error')
  const phoneIcon = document.getElementById('phone-icon')
  if (localStorage.getItem("phoneStyles")) {
    phoneNumber.setAttribute("style", localStorage.getItem("phoneStyles"));
  }
  if(localStorage.getItem('phoneErrorMsg')) {
    phoneErrorMsg.innerHTML = localStorage.getItem('phoneErrorMsg')
  }
  if(localStorage.getItem('phoneErrorStyles')) {
    phoneErrorMsg.setAttribute('style', localStorage.getItem('phoneErrorStyles'))
  }
  if(localStorage.getItem('phoneIconSrc')) {
    phoneIcon.src = localStorage.getItem('phoneIconSrc')
  }
  if(localStorage.getItem('phoneIconStyles')) {
    phoneIcon.classList.add(localStorage.getItem('phoneIconStyles'))
  }

  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.match(geoNumberPattern)) {
      phoneNumber.setAttribute("style", "border: 1px solid #98E37E;");
      localStorage.setItem("phoneStyles","border: 1px solid #98E37E;");
      localStorage.setItem('phoneErrorMsg', 'Your phone number is correct');
      localStorage.setItem('phoneErrorStyles', 'color:#98E37E');
      phoneErrorMsg.innerHTML = localStorage.getItem('phoneErrorMsg');
      phoneErrorMsg.setAttribute('style', localStorage.getItem('phoneErrorStyles'));
      localStorage.setItem('phoneIconSrc', 'images/success-icon.svg');
      phoneIcon.src = localStorage.getItem('phoneIconSrc');
      localStorage.setItem('phoneIconStyles', 'phone-icon-success');
      phoneIcon.classList.add(localStorage.getItem('phoneIconStyles'));
      
    } else {
        phoneNumber.setAttribute("style", "border: 1px solid #EF5050;");
        localStorage.setItem("phoneStyles","border: 1px solid #EF5050;");
        localStorage.setItem('phoneErrorMsg', 'Enter correct phone number');
        localStorage.setItem('phoneErrorStyles', 'color:#EF5050');
        phoneErrorMsg.innerHTML = localStorage.getItem('phoneErrorMsg');
        phoneErrorMsg.setAttribute('style', localStorage.getItem('phoneErrorStyles'));
        localStorage.setItem('phoneIconSrc', 'images/danger-icon.svg');
        phoneIcon.src = localStorage.getItem('phoneIconSrc');
        localStorage.setItem('phoneIconStyles', 'phone-icon-danger');
        phoneIcon.classList.add(localStorage.getItem('phoneIconStyles'));
    }
  
    if(phoneNumber.value.length == 0) {
        phoneNumber.setAttribute("style", "border: 1px solid #BCBCBC;");
        localStorage.setItem("phoneStyles","border: 1px solid #BCBCBC;");
        localStorage.setItem('phoneErrorMsg', 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს');
        localStorage.setItem('phoneErrorStyles', 'color:#2E2E2E');
        phoneErrorMsg.innerHTML = localStorage.getItem('phoneErrorMsg');
        phoneErrorMsg.setAttribute('style', localStorage.getItem('phoneErrorStyles'));
      }
  });

  //Back button 
  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', ()=> {
    localStorage.clear();
  })