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


// Image upload function
var uploadedImage  = '';
photo.addEventListener('change', function(){
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
        uploadedImage = reader.result;
        photoValue.style.backgroundImage = `url(${uploadedImage})`
        photoValue.style.borderRadius = '50%'
        localStorage.setItem(photo,photo.value)
    });
    reader.readAsDataURL(this.files[0]);
    photo.value = localStorage.getItem('photo')
})

// Validation

const pattern = /^[ა-ჰ]+$/;

if (localStorage.getItem("firstNameStyle")) {
    firstName.setAttribute("style", localStorage.getItem("firstNameStyle"));
  }

firstName.addEventListener("input", function () {
  if (firstName.value.match(pattern) && firstName.value.length > 2) {
    firstName.setAttribute("style", "border: 1px solid #98E37E;");
    localStorage.setItem("firstNameStyle","border: 1px solid #98E37E;");
  } else {
    firstName.setAttribute("style", "border: 1px solid #EF5050;");
    localStorage.setItem("firstNameStyle","border: 1px solid #EF5050;");
  }

    if(firstName.value.length == 0) {
        firstName.setAttribute("style", "border: 1px solid #BCBCBC;");
        localStorage.setItem("firstNameStyle","border: 1px solid #BCBCBC;");
    }
    
});

if (localStorage.getItem("lastNameStyles")) {
    lastName.setAttribute("style", localStorage.getItem("lastNameStyles"));
  }

lastName.addEventListener("input", function () {
    if (lastName.value.match(pattern) && lastName.value.length > 2) {
      lastName.setAttribute("style", "border: 1px solid #98E37E;");
      localStorage.setItem("lastNameStyles","border: 1px solid #98E37E;");
    } else {
        lastName.setAttribute("style", "border: 1px solid #EF5050;");
        localStorage.setItem("lastNameStyles","border: 1px solid #EF5050;");
    }
  
    if(lastName.value.length == 0) {
        lastName.setAttribute("style", "border: 1px solid #BCBCBC;");
        localStorage.setItem("lastNameStyles","border: 1px solid #BCBCBC;");
      }
  });

  const emailPattern = /^[A-Za-z0-9._%+-]+@redberry.ge$/ ;


if (localStorage.getItem("emailStyles")) {
    email.setAttribute("style", localStorage.getItem("emailStyles"));
  }

email.addEventListener("input", function () {
    if (email.value.match(emailPattern) && email.value.length !== 0) {
      email.setAttribute("style", "border: 1px solid #98E37E;");
      localStorage.setItem("emailStyles","border: 1px solid #98E37E;");
    } else {
        email.setAttribute("style", "border: 1px solid #EF5050;");
        localStorage.setItem("emailStyles","border: 1px solid #EF5050;");
    }
  
    if(email.value.length == 0) {
        email.setAttribute("style", "border: 1px solid #BCBCBC;");
        localStorage.setItem("emailStyles","border: 1px solid #BCBCBC;");
      }
  });
