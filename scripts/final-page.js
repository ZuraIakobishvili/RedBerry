


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
const academyFromLocalStorage = localStorage.getItem('academy')
const degreeFromLocalStorage = localStorage.getItem('degree')
const educationFinishDateFromLocalStorage = localStorage.getItem('educationDate')
const educationDescriptionFromLocalStorage = localStorage.getItem('educationDescription')

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
const academyValue = document.getElementById('education-collage')
const degreeValue = document.getElementById('education-degree')
const educationFinishDateValue = document.getElementById('education-finish-date')
const educationDescriptionValue = document.getElementById('education-description')
 

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
insertFunction(academyValue, academyFromLocalStorage)
insertFunction(degreeValue, degreeFromLocalStorage)
insertFunction(educationFinishDateValue, educationFinishDateFromLocalStorage)
insertFunction(educationDescriptionValue, educationDescriptionFromLocalStorage)

const url = localStorage.getItem('image');
const img = new Image();
img.src = url;
photoValue.appendChild(img);