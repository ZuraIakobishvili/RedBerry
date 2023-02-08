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
const successIcon = document.getElementById('firstNameSuccessIcon');
const dangerIcon = document.getElementById('firstNameDangerIcon');

if (localStorage.getItem("firstNameStyle")) {
    firstName.setAttribute("style", localStorage.getItem("firstNameStyle"));
  }

firstName.addEventListener("input", function () {
  if (firstName.value.match(pattern) && firstName.value.length > 2) {
    firstName.setAttribute("style", "border: 1px solid #98E37E;");
    localStorage.setItem("firstNameStyle","border: 1px solid #98E37E;");
    
    successIcon.style.visibility = 'visible';
    dangerIcon.style.visibility = 'hidden'
   
  } else {
    firstName.setAttribute("style", "border: 1px solid #EF5050;");
    localStorage.setItem("firstNameStyle","border: 1px solid #EF5050;");
    
    dangerIcon.style.visibility = 'visible'
    successIcon.style.visibility = 'hidden';
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

  const geoNumberPattern = /^\+995\d{9}$/

  if (localStorage.getItem("phoneStyles")) {
    phoneNumber.setAttribute("style", localStorage.getItem("phoneStyles"));
  }

  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.match(geoNumberPattern)) {
      phoneNumber.setAttribute("style", "border: 1px solid #98E37E;");
      localStorage.setItem("phoneStyles","border: 1px solid #98E37E;");
    } else {
        phoneNumber.setAttribute("style", "border: 1px solid #EF5050;");
        localStorage.setItem("phoneStyles","border: 1px solid #EF5050;");
    }
  
    if(phoneNumber.value.length == 0) {
        phoneNumber.setAttribute("style", "border: 1px solid #BCBCBC;");
        localStorage.setItem("phoneStyles","border: 1px solid #BCBCBC;");
      }
  });