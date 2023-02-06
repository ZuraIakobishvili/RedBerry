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




// firstName.addEventListener('input', function(){
//     firstNameValue.innerHTML = firstName.value
//     localStorage.setItem('firstname',firstName.value)    
// })
// firstNameValue.innerHTML = localStorage.getItem('firstname')
// firstName.value = localStorage.getItem('firstname')

// lastName.addEventListener('input', function(){
//     lastNameValue.innerHTML = lastName.value
//     localStorage.setItem('lastname',lastName.value)
// })
// lastNameValue.innerHTML = localStorage.getItem('lastname')
// lastName.value = localStorage.getItem('lastname')

// email.addEventListener('input', function(){
//     emailValue.innerHTML = email.value
//     localStorage.setItem('email',email.value)
// })
// emailValue.innerHTML = localStorage.getItem('email') 
// email.value = localStorage.getItem('email') 

// phoneNumber.addEventListener('input', function(){
//     phoneNumberValue.innerHTML = phoneNumber.value
//     localStorage.setItem('phone',phoneNumber.value)
// })
// phoneNumberValue.innerHTML = localStorage.getItem('phone') 
// phoneNumber.value = localStorage.getItem('phone') 

// textarea.addEventListener('input', function(){
//     aboutMe.innerHTML = textarea.value
//     localStorage.setItem('aboutme',textarea.value )
// })
// aboutMe.innerHTML = localStorage.getItem('aboutme')
// textarea.value = localStorage.getItem('aboutme')