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


// Description 

const description = document.getElementById('description')
const educationDescriptionValue = document.getElementById('education-description')

description.value = localStorage.getItem('educationDescription')
educationDescriptionValue.innerHTML = localStorage.getItem('educationDescription')

description.addEventListener('input', ()=> {
    localStorage.setItem('educationDescription', description.value)
    educationDescriptionValue.innerHTML = localStorage.getItem('educationDescription')
});


//! Validation 
var error = [];
const academySuccessIcon = document.getElementById('academy-success-icon')
const academyDangerIcon = document.getElementById('academy-danger-icon')
academy.setAttribute('style', localStorage.getItem('academyStyle'))
academySuccessIcon.style.display = localStorage.getItem('academySuccessIconStyles')
academyDangerIcon.style.display = localStorage.getItem('academyDangerIconStyles')

//! Academy
academy.addEventListener('input', ()=> {
    if(academy.value.length >= 2) {
        //! Border
        localStorage.setItem('academyStyle', 'border: 1px solid #98E37E;')
        academy.setAttribute('style', localStorage.getItem('academyStyle'))
        //! Icons
        localStorage.setItem('academySuccessIconStyles', 'block')
        localStorage.setItem('academyDangerIconStyles', 'none')
        academySuccessIcon.style.display = localStorage.getItem('academySuccessIconStyles')
        academyDangerIcon.style.display = localStorage.getItem('academyDangerIconStyles')

    } else if(academy.value.length < 3) {
        //! Border
        localStorage.setItem('academyStyle', 'border: 1px solid #EF5050;')
        academy.setAttribute('style', localStorage.getItem('academyStyle'))
        //! Icons
        localStorage.setItem('academySuccessIconStyles', 'none')
        localStorage.setItem('academyDangerIconStyles', 'block')
        academySuccessIcon.style.display = localStorage.getItem('academySuccessIconStyles')
        academyDangerIcon.style.display = localStorage.getItem('academyDangerIconStyles')
        error.push('უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს')
        
    }

    if(academy.value.length == 0) {
        //! Border
        localStorage.setItem('academyStyle', 'border: 1px solid #BCBCBC;')
        academy.setAttribute('style', localStorage.getItem('academyStyle'))
        //! Icons
        localStorage.setItem('academySuccessIconStyles', 'none')
        localStorage.setItem('academyDangerIconStyles', 'none')
        academySuccessIcon.style.display = localStorage.getItem('academySuccessIconStyles')
        academyDangerIcon.style.display = localStorage.getItem('academyDangerIconStyles')
        error.push('უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს')
    }
});

//! Degree Validation
degree.setAttribute('style', localStorage.getItem('degreeStyle'))
degree.addEventListener('input', ()=> {
    if(degree.value) {
        localStorage.setItem('degreeStyle', 'border: 1px solid #98E37E;')
        degree.setAttribute('style', localStorage.getItem('degreeStyle'))
    }
});


//! Finish date Validation
const educationFinishDate = document.getElementById('finish-date')
educationFinishDate.setAttribute('style', localStorage.getItem('educationStyles'))
educationFinishDate.addEventListener('input', ()=> {
    if(educationFinishDate.value) {
        localStorage.setItem('educationStyles', 'border: 1px solid #98E37E;')
        educationFinishDate.setAttribute('style', localStorage.getItem('educationStyles'))
    }
})

//! Education Description Validation
description.setAttribute('style', localStorage.getItem('descriptionStyles'))
description.addEventListener('input', ()=> {
    if(description.value.length >= 2 ){
        localStorage.setItem('descriptionStyles', 'border: 1px solid #98E37E;')
        description.setAttribute('style', localStorage.getItem('descriptionStyles'))
    } else if (description.value.length < 3) {
        localStorage.setItem('descriptionStyles', 'border: 1px solid #EF5050;')
        description.setAttribute('style', localStorage.getItem('descriptionStyles'))
    }

    if(description.value.length == 0) {
        localStorage.setItem('descriptionStyles', 'border: 1px solid #BCBCBC;')
        description.setAttribute('style', localStorage.getItem('descriptionStyles'))
    }
})

