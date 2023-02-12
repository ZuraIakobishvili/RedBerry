const backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click', ()=>{
    window.localStorage.clear();
})


const firstNameFromLocalStorage = localStorage.getItem('firstname')
const lastNameFromLocalStorage = localStorage.getItem('lastname')
const emailFromLocalStorage = localStorage.getItem('email')
const phoneFromLocalStorage = localStorage.getItem('phone')
const imageFromLocalStorage = localStorage.getItem('image')
const aboutmeFromLocalStorage = localStorage.getItem('aboutme')
const positionFromLocalStorage = localStorage.getItem('position')
const employerFromLocalStorage = localStorage.getItem('employer')
const startDateFromLocalStorage = localStorage.getItem('start-date')
const finishDateFromLocalStorage = localStorage.getItem('finish-date')
const expDescriptionDateFromLocalStorage = localStorage.getItem('exp-description')


const firstNameValue = document.getElementById('firstNameValue');
const lastNameValue = document.getElementById('lastNameValue');
const emailValue = document.getElementById('emailValue');
const phoneNumberValue = document.getElementById('phoneNumberValue')
const aboutMe = document.getElementById('aboutMe');
const photoValue = document.getElementById('photoValue');
const positionValue = document.getElementById('experience-position')
const employerValue = document.getElementById('experience-employer')
const startDateValue = document.getElementById('experience-start-date')
const finishDateValue = document.getElementById('experience-finish-date')
const expDescriptionValue = document.getElementById('experience-description')



function insertFunction(position,value){
    position.innerHTML = value
}


insertFunction(firstNameValue, firstNameFromLocalStorage)
insertFunction(lastNameValue, lastNameFromLocalStorage)
insertFunction(emailValue, emailFromLocalStorage)
insertFunction(phoneNumberValue, phoneFromLocalStorage)
insertFunction(aboutMe, aboutmeFromLocalStorage)
// insertFunction(photoValue, imageFromLocalStorage)
insertFunction(positionValue, positionFromLocalStorage)
insertFunction(employerValue, employerFromLocalStorage)
insertFunction(startDateValue, startDateFromLocalStorage)
insertFunction(finishDateValue,finishDateFromLocalStorage)
insertFunction(expDescriptionValue, expDescriptionDateFromLocalStorage)

const url = localStorage.getItem('image');
const img = new Image();
img.src = url;
photoValue.appendChild(img);
img.classList.add('photoStyle')

//academy
const academy = document.getElementById('academy')
const academyValue = document.getElementById('education-collage')

if(localStorage.getItem('academy')) {
    academyValue.innerHTML = localStorage.getItem('academy')
}
academy.value = localStorage.getItem('academy')

academy.addEventListener('input', function(){
    localStorage.setItem('academy', academy.value)
    academyValue.innerHTML = localStorage.getItem('academy')
    localStorage.setItem('academyStyles', 'education')
})

//degree
const degree = document.getElementById('degree')
const degreeValue = document.getElementById('education-degree')

if(localStorage.getItem('degree')) {
    degreeValue.innerHTML = localStorage.getItem('degree')
}
degree.value = localStorage.getItem('degree')

degree.addEventListener('input', ()=>{
    localStorage.setItem('degree', degree.value)
    degreeValue.innerHTML = localStorage.getItem('degree')
})
    
//finish date 

const educationDate = document.getElementById('finish-date')
const educationDateValue = document.getElementById('education-finish-date')

educationDate.value = localStorage.getItem('educationDate')
educationDateValue.innerHTML = localStorage.getItem('educationDate')

educationDate.addEventListener('input', ()=>{
    localStorage.setItem('educationDate', educationDate.value)
    educationDateValue.innerHTML = localStorage.getItem('educationDate')
})



