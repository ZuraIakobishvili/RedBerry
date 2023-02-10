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




// Image upload 

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
    localStorage.setItem('firstNameError', 'Your first name is correct')
    localStorage.setItem("firstNameErrorStyles","color:#98E37E;");
    firstNameErrorMsg.innerHTML = localStorage.getItem('firstNameError')
    firstNameErrorMsg.setAttribute('style', localStorage.getItem("firstNameErrorStyles"))
    localStorage.setItem('icon-src', 'images/success-icon.svg');
    localStorage.setItem('iconStyles', 'first-name-success-icon');
    firstNameIcon.classList.add(localStorage.getItem('iconStyles'))
    firstNameIcon.src = localStorage.getItem('icon-src')

  } else {
    firstName.setAttribute("style", "border: 1px solid #EF5050;");
    localStorage.setItem("firstNameStyle","border: 1px solid #EF5050;");
    localStorage.setItem("firstNameError","Enter correct info");
    localStorage.setItem("firstNameErrorStyles","color:#EF5050;");
    firstNameErrorMsg.innerHTML = localStorage.getItem('firstNameError');
    firstNameErrorMsg.setAttribute('style', localStorage.getItem("firstNameErrorStyles"));
    localStorage.setItem('icon-src', 'images/danger-icon.svg');
    localStorage.setItem('iconStyles', 'first-name-danger-icon');
    firstNameIcon.classList.add(localStorage.getItem('iconStyles'))
    firstNameIcon.src = localStorage.getItem('icon-src')
    
  }

    if(firstName.value.length == 0) {
        firstName.setAttribute("style", "border: 1px solid #BCBCBC;");
        localStorage.setItem("firstNameStyle","border: 1px solid #BCBCBC;");
        localStorage.setItem('firstNameError', 'მინიუმ 2 ასო,ქართული ასოები');
        localStorage.setItem("firstNameErrorStyles","color:#BCBCBC;");
        firstNameErrorMsg.innerHTML = localStorage.getItem('firstNameError')
        firstNameErrorMsg.setAttribute('style',localStorage.getItem('firstNameErrorStyles'));
        localStorage.setItem('iconStyles', 'first-name-hidden-icon');
        firstNameIcon.classList.add(localStorage.getItem('iconStyles'))
    }

});
//Last Name Validation
const lastNameErrorMsg = document.getElementById('last-name-error')
if (localStorage.getItem("lastNameStyles")) {
    lastName.setAttribute("style", localStorage.getItem("lastNameStyles"));
  }
if(localStorage.getItem('lastNameErrorMsg')) {
    lastNameErrorMsg.innerHTML = localStorage.getItem('lastNameErrorMsg')
  }
if(localStorage.getItem('lastNameErrorStyles')) {
  lastNameErrorMsg.setAttribute('style', localStorage.getItem('lastNameErrorStyles'))
}


lastName.addEventListener("input", function () {
    if (lastName.value.match(pattern) && lastName.value.length > 2) {
      lastName.setAttribute("style", "border: 1px solid #98E37E;");
      localStorage.setItem("lastNameStyles","border: 1px solid #98E37E;");
      localStorage.setItem('lastNameErrorMsg', 'Your last name is correct');
      localStorage.setItem('lastNameErrorStyles','color:#98E37E;');
      lastNameErrorMsg.innerHTML = localStorage.getItem('lastNameErrorMsg');
      lastNameErrorMsg.setAttribute('style', localStorage.getItem('lastNameErrorStyles'));       

    } else {
        lastName.setAttribute("style", "border: 1px solid #EF5050;");
        localStorage.setItem("lastNameStyles","border: 1px solid #EF5050;");
        localStorage.setItem("lastNameErrorMsg","Enter correct info");
        localStorage.setItem("lastNameErrorStyles","color:#EF5050;");
        lastNameErrorMsg.innerHTML = localStorage.getItem('lastNameErrorMsg')
        lastNameErrorMsg.setAttribute('style', localStorage.getItem("lastNameErrorStyles"))
    }
  
    if(lastName.value.length == 0) {
        lastName.setAttribute("style", "border: 1px solid #BCBCBC;");
        localStorage.setItem("lastNameStyles","border: 1px solid #BCBCBC;");
        localStorage.setItem('lastNameErrorMsg', 'მინიუმ 2 ასო,ქართული ასოები');
        localStorage.setItem('lastNameErrorStyles', 'color:#2E2E2E')
        lastNameErrorMsg.innerHTML = localStorage.getItem('lastNameErrorMsg')
        lastNameErrorMsg.setAttribute('style', localStorage.getItem('lastNameErrorStyles'))
      }
  });


  //Email Validation
  const emailPattern = /^[A-Za-z0-9._%+-]+@redberry.ge$/ ;
  const emailErrorMsg = document.getElementById('email-error')

if (localStorage.getItem("emailStyles")) {
    email.setAttribute("style", localStorage.getItem("emailStyles"));
  }
if(localStorage.getItem('emailErrorMsg')) {
  emailErrorMsg.innerHTML = localStorage.getItem('emailErrorMsg')
  }
if(localStorage.getItem('emailErrorStyles')) {
  emailErrorMsg.setAttribute('style', localStorage.getItem('emailErrorStyles'))
  }
email.addEventListener("input", function () {
    if (email.value.match(emailPattern) && email.value.length !== 0) {
      email.setAttribute("style", "border: 1px solid #98E37E;");
      localStorage.setItem("emailStyles","border: 1px solid #98E37E;");
      localStorage.setItem('emailErrorMsg', 'Your email is correct');
      localStorage.setItem('emailErrorStyles', 'color:#98E37E')
      emailErrorMsg.innerHTML = localStorage.getItem('emailErrorMsg');
      emailErrorMsg.setAttribute('style', localStorage.getItem('emailErrorStyles'));
      

    } else {
        email.setAttribute("style", "border: 1px solid #EF5050;");
        localStorage.setItem("emailStyles","border: 1px solid #EF5050;");
        localStorage.setItem('emailErrorMsg', 'Enter correct email');
        localStorage.setItem('emailErrorStyles', 'color:#EF5050' );
        emailErrorMsg.innerHTML = localStorage.getItem('emailErrorMsg');
        emailErrorMsg.setAttribute('style', localStorage.getItem('emailErrorStyles'));
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

  if (localStorage.getItem("phoneStyles")) {
    phoneNumber.setAttribute("style", localStorage.getItem("phoneStyles"));
  }
  if(localStorage.getItem('phoneErrorMsg')) {
    phoneErrorMsg.innerHTML = localStorage.getItem('phoneErrorMsg')
  }
  if(localStorage.getItem('phoneErrorStyles')) {
    phoneErrorMsg.setAttribute('style', localStorage.getItem('phoneErrorStyles'))
  }

  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.match(geoNumberPattern)) {
      phoneNumber.setAttribute("style", "border: 1px solid #98E37E;");
      localStorage.setItem("phoneStyles","border: 1px solid #98E37E;");
      localStorage.setItem('phoneErrorMsg', 'Your phone number is correct');
      localStorage.setItem('phoneErrorStyles', 'color:#98E37E');
      phoneErrorMsg.innerHTML = localStorage.getItem('phoneErrorMsg');
      phoneErrorMsg.setAttribute('style', localStorage.getItem('phoneErrorStyles'));
      
    } else {
        phoneNumber.setAttribute("style", "border: 1px solid #EF5050;");
        localStorage.setItem("phoneStyles","border: 1px solid #EF5050;");
        localStorage.setItem('phoneErrorMsg', 'Enter correct phone number');
        localStorage.setItem('phoneErrorStyles', 'color:#EF5050');
        phoneErrorMsg.innerHTML = localStorage.getItem('phoneErrorMsg');
        phoneErrorMsg.setAttribute('style', localStorage.getItem('phoneErrorStyles'))
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