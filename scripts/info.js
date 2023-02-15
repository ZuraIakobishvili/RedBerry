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
var error = [];
const pattern = /^[ა-ჰ]+$/;
//! First Name Validation

const firstNameSuccessIcon = document.getElementById('firstname-icon-success')
const firstNameDangerIcon = document.getElementById('firstname-icon-danger')
firstName.setAttribute('style', localStorage.getItem('firstNameStyles'))
firstNameSuccessIcon.style.display = localStorage.getItem('firstNameSuccessIconVisibile')
firstNameDangerIcon.style.display = localStorage.getItem('firstNameDangerIconVisibile')


firstName.addEventListener('input', ()=>{
    if(firstName.value.length > 2 && firstName.value.match(pattern)) {
      //! Border
      localStorage.setItem('firstNameStyles', 'border: 1px solid #98E37E')
      firstName.setAttribute('style', localStorage.getItem('firstNameStyles'))
      //!Icons
      localStorage.setItem('firstNameSuccessIconVisibile', 'block')
      localStorage.setItem('firstNameDangerIconVisibile', 'none')
      firstNameSuccessIcon.style.display = localStorage.getItem('firstNameSuccessIconVisibile')
      firstNameDangerIcon.style.display = localStorage.getItem('firstNameDangerIconVisibile')
      error.length = 0
    } else if(firstName.value.length <3  || !firstName.value.match(pattern)){
      //! Border
      localStorage.setItem('firstNameStyles', 'border: 1px solid #EF5050;')
      firstName.setAttribute('style', localStorage.getItem('firstNameStyles'))
      //! Icons
      localStorage.setItem('firstNameSuccessIconVisibile', 'none')
      localStorage.setItem('firstNameDangerIconVisibile', 'block')
      firstNameSuccessIcon.style.display = localStorage.getItem('firstNameSuccessIconVisibile')
      firstNameDangerIcon.style.display = localStorage.getItem('firstNameDangerIconVisibile')
      error.push('მხოლოდ ქართული სიმბოლოები')
    } 

    if(firstName.value.length == 0) {
      //! Border
      localStorage.setItem('firstNameStyles','border: 1px solid #BCBCBC;')
      firstName.setAttribute('style', localStorage.getItem('firstNameStyles'))
      //! Icons
      localStorage.setItem('firstNameSuccessIconVisibile', 'none')
      localStorage.setItem('firstNameDangerIconVisibile', 'none')
      firstNameSuccessIcon.style.display = localStorage.getItem('firstNameSuccessIconVisibile')
      firstNameDangerIcon.style.display = localStorage.getItem('firstNameDangerIconVisibile')
      error.push('სახელი უნდა შედგებოდეს მინიმუმ 2 ასოსგან')
    }
});

//!Last Name Validation
const lastNameSuccessIcon = document.getElementById('lastname-icon-success')
const lastNameDangerIcon = document.getElementById('lastname-icon-danger')
lastName.setAttribute('style', localStorage.getItem('lastNameStyles'))
lastNameSuccessIcon.style.display = localStorage.getItem('lastNameSuccessIconVisibile')
lastNameDangerIcon.style.display = localStorage.getItem('lastNameDangerIconVisibile')

lastName.addEventListener('input', ()=> {
  if(lastName.value.length > 2 && lastName.value.match(pattern)) {
    //! Border
    localStorage.setItem('lastNameStyles', 'border: 1px solid #98E37E')
    lastName.setAttribute('style', localStorage.getItem('lastNameStyles'))
    //! Icons
    localStorage.setItem('lastNameSuccessIconVisibile', 'block')
    localStorage.setItem('lastNameDangerIconVisibile', 'none')
    lastNameSuccessIcon.style.display = localStorage.getItem('lastNameSuccessIconVisibile')
    lastNameDangerIcon.style.display = localStorage.getItem('lastNameDangerIconVisibile')
    error.length = 0
  } else if(lastName.value.length <3  || !lastName.value.match(pattern)){
    //! Border
    localStorage.setItem('lastNameStyles', 'border: 1px solid #EF5050;')
    lastName.setAttribute('style', localStorage.getItem('lastNameStyles'))
    //! Icons
    localStorage.setItem('lastNameSuccessIconVisibile', 'none')
    localStorage.setItem('lastNameDangerIconVisibile', 'block')
    lastNameSuccessIcon.style.display = localStorage.getItem('lastNameSuccessIconVisibile')
    lastNameDangerIcon.style.display = localStorage.getItem('lastNameDangerIconVisibile')
    error.push('მხოლოდ ქართული სიმბოლოები')
  } 

  if(lastName.value.length == 0) {
    //! Border
    localStorage.setItem('lastNameStyles','border: 1px solid #BCBCBC;')
    lastName.setAttribute('style', localStorage.getItem('lastNameStyles'))
    //! Icons
    localStorage.setItem('lastNameSuccessIconVisibile', 'none')
    localStorage.setItem('lastNameDangerIconVisibile', 'none')
    lastNameSuccessIcon.style.display = localStorage.getItem('lastNameSuccessIconVisibile')
    lastNameDangerIcon.style.display = localStorage.getItem('lastNameDangerIconVisibile')
    error.push('გვარი უნდა შედგებოდეს მინიმუმ 2 ასოსგან')
  }
  });


//!Email Validation

const emailPattern = /^[A-Za-z0-9._%+-]+@redberry.ge$/ ;
const emailSuccessIcon = document.getElementById('email-icon-success')
const emailDangerIcon = document.getElementById('email-icon-danger')
email.setAttribute('style', localStorage.getItem('emailStyles'))
emailSuccessIcon.style.display = localStorage.getItem('emailSuccessIconVisibility')
emailDangerIcon.style.display = localStorage.getItem('emailDangerIconVisibility')


email.addEventListener('input', ()=> {
  if(email.value.match(emailPattern)) {
    //! Border
    localStorage.setItem('emailStyles', 'border: 1px solid #98E37E')
    email.setAttribute('style', localStorage.getItem('emailStyles'))
    //! Icons 
    localStorage.setItem('emailSuccessIconVisibility', 'block')
    localStorage.setItem('emailDangerIconVisibility', 'none')
    emailSuccessIcon.style.display = localStorage.getItem('emailSuccessIconVisibility')
    emailDangerIcon.style.display = localStorage.getItem('emailDangerIconVisibility')
  } else if(!email.value.match(emailPattern)) {
    //! Border
    localStorage.setItem('emailStyles', 'border: 1px solid #EF5050')
    email.setAttribute('style', localStorage.getItem('emailStyles'))
    //! Icons
    localStorage.setItem('emailSuccessIconVisibility', 'none')
    localStorage.setItem('emailDangerIconVisibility', 'block')
    emailSuccessIcon.style.display = localStorage.getItem('emailSuccessIconVisibility')
    emailDangerIcon.style.display = localStorage.getItem('emailDangerIconVisibility')
    error.push('შეიყვანეთ სწორი ელექტრონული მისამართი')
  }

   if(email.value.length == 0) {
    //! Border
    localStorage.setItem('emailStyles', 'border: 1px solid #BCBCBC')
    email.setAttribute('style', localStorage.getItem('emailStyles'))
    //! Icons 
    localStorage.setItem('emailSuccessIconVisibility', 'none')
    localStorage.setItem('emailDangerIconVisibility', 'none')
    emailSuccessIcon.style.display = localStorage.getItem('emailSuccessIconVisibility')
    emailDangerIcon.style.display = localStorage.getItem('emailDangerIconVisibility')
    error.push('სავალდებულო ველი')
   }
    
  });

//! Phone number validation
const geoNumberPattern = /^\+995\d{9}$/
const phoneSuccessIcon = document.getElementById('phone-icon-success')
const phoneDangerIcon = document.getElementById('phone-icon-danger')
phoneNumber.setAttribute('style', localStorage.getItem('phoneStyles'))
phoneSuccessIcon.style.display = localStorage.getItem('phoneSuccessIconVisibility')
phoneDangerIcon.style.display = localStorage.getItem('phoneDangerIconVisibility')

  phoneNumber.addEventListener('input', ()=> {
    if (phoneNumber.value.match(geoNumberPattern)) {
      //! Border 
      localStorage.setItem('phoneStyles', 'border: 1px solid #98E37E')
      phoneNumber.setAttribute('style', localStorage.getItem('phoneStyles'))
      //! Icons
      localStorage.setItem('phoneSuccessIconVisibility', 'block')
      localStorage.setItem('phoneDangerIconVisibility', 'none')
      phoneSuccessIcon.style.display = localStorage.getItem('phoneSuccessIconVisibility')
      phoneDangerIcon.style.display = localStorage.getItem('phoneDangerIconVisibility')
    } else if(!phoneNumber.value.match(geoNumberPattern)) {
      //!Border
      localStorage.setItem('phoneStyles', 'border: 1px solid #EF5050')
      phoneNumber.setAttribute('style', localStorage.getItem('phoneStyles'))
      //! Icons
      localStorage.setItem('phoneSuccessIconVisibility', 'none')
      localStorage.setItem('phoneDangerIconVisibility', 'block')
      phoneSuccessIcon.style.display = localStorage.getItem('phoneSuccessIconVisibility')
      phoneDangerIcon.style.display = localStorage.getItem('phoneDangerIconVisibility')
      error.push('უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს')
    }

    if(phoneNumber.value.length == 0) {
      //! Border
      localStorage.setItem('phoneStyles', 'border: 1px solid #BCBCBC')
      phoneNumber.setAttribute('style', localStorage.getItem('phoneStyles'))
      //! Icons 
      localStorage.setItem('phoneSuccessIconVisibility', 'none')
      localStorage.setItem('phoneDangerIconVisibility', 'none')
      phoneSuccessIcon.style.display = localStorage.getItem('phoneSuccessIconVisibility')
      phoneDangerIcon.style.display = localStorage.getItem('phoneDangerIconVisibility')
    }

  });

  //Back button 
  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', ()=> {
    localStorage.clear();
  })
