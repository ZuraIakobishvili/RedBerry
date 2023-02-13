
const firstNameFromLocalStorage = localStorage.getItem('firstname')
const lastNameFromLocalStorage = localStorage.getItem('lastname')
const emailFromLocalStorage = localStorage.getItem('email')
const phoneFromLocalStorage = localStorage.getItem('phone')
const imageFromLocalStorage = localStorage.getItem('image')
const aboutmeFromLocalStorage = localStorage.getItem('aboutme')

const firstNameStylesFromLocalStorage = localStorage.getItem('firstNameStyle')
const lastNameStylesFromLocalStorage = localStorage.getItem('firstNameStyles')
const emailStylesFromLocalStorage = localStorage.getItem('emailStyles')
const phoneStylesFromLocalStorage = localStorage.getItem('phoneStyles')

const firstNameValue = document.getElementById('firstNameValue');
const lastNameValue = document.getElementById('lastNameValue');
const emailValue = document.getElementById('emailValue');
const phoneNumberValue = document.getElementById('phoneNumberValue')
const aboutMe = document.getElementById('aboutMe');
const photoValue = document.getElementById('photoValue');


function insertFunction(position,value){
    position.innerHTML = value
}


insertFunction(firstNameValue, firstNameFromLocalStorage)
insertFunction(lastNameValue, lastNameFromLocalStorage)
insertFunction(emailValue, emailFromLocalStorage)
insertFunction(phoneNumberValue, phoneFromLocalStorage)
insertFunction(aboutMe, aboutmeFromLocalStorage)
// insertFunction(photoValue, imageFromLocalStorage)
const url = localStorage.getItem('image');
const img = new Image();
img.src = url;
photoValue.appendChild(img);
img.classList.add('photoStyle')

// Save data to localStorage and display it in input field
const experiencePosition = document.getElementById('experience-position');
const position = document.getElementById('position');
const experienceEmployer = document.getElementById('experience-employer');
const employer = document.getElementById('employer');
const startDate = document.getElementById('start-date');
const experienceStartDate = document.getElementById('experience-start-date');
const finishDate = document.getElementById('finish-date');
const experienceFinishDate = document.getElementById('experience-finish-date');
const description = document.getElementById('description');
const experienceDescription = document.getElementById('experience-description')

function insertData (inputName, insertPlaceName, storageName) {   
    inputName.addEventListener('input', function(){
        insertPlaceName.innerHTML = inputName.value
        localStorage.setItem(storageName,inputName.value)
})
    insertPlaceName.innerHTML = localStorage.getItem(storageName);
    inputName.value = localStorage.getItem(storageName);
}

insertData(position, experiencePosition, 'position')
insertData(employer , experienceEmployer, 'employer')
insertData(startDate, experienceStartDate, 'start-date')
insertData(finishDate, experienceFinishDate, 'finish-date')
insertData(description, experienceDescription, 'exp-description')

//back button
const backBtn = document.getElementById('back-btn')
backBtn.addEventListener('click', function(){
    window.localStorage.clear();
})

//Add more experince 

const addButton = document.getElementById('add-button')

addButton.addEventListener('click', function(){
    const addMoreExperience  = document.createElement('div')
    const experienceParent = document.getElementById('experience-parent')
    experienceParent.appendChild(addMoreExperience)
    addMoreExperience.innerHTML = `
    
    <div class="left-position">
                <p>თანამდებობა</p>
                <input type="text" id="position" placeholder="დეველოპერი, დიზაინერი, ა.შ.    ">
                <p>მინიმუმ 2 სიმბოლო </p>
            </div>
            <div class="left-employer">
                <p>დამსაქმებელი</p>
                <input type="text" id="employer" placeholder="დამსაქმებელი">
                <p>მინიმუმ 2 სიმბოლო</p>
            </div>
                <!-- dates -->
            <div class="exp-dates">
                <div class="start-date" id="">
                    <label for="start-date">დაწყების რიცხვი</label>
                    <input type="date" id="start-date" >
                </div>

                    <div class="finish-date">
                        <label for="finish-date">დამთავრების რიცხვი</label>
                        <input type="date" id="finish-date" >
                    </div>
            </div>
            <!-- Description -->
            <div class="description">
                <p>აღწერა</p>
                <textarea placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"     id="description"></textarea>
            </div>
            <div class="bottom-line"></div>
        </div>

            
    
    `
})

// ! POSITION VALIDATION
const positionErrorMsg = document.getElementById('position-error-message')
const positionIcon = document.getElementById('position-icon')
position.setAttribute('style', localStorage.getItem('positionBorderStyle'))
positionErrorMsg.innerHTML = localStorage.getItem('positionErrorMsg')
positionErrorMsg.setAttribute('style' ,localStorage.getItem('positionErrorMsgStyles'))
positionIcon.src = localStorage.getItem('position-src')
positionIcon.classList.add(localStorage.getItem('positionIconStyle'))

position.addEventListener('input', ()=> {
if(position.value.length > 2) {
    //  position border style
    localStorage.setItem('positionBorderStyle', 'border: 1px solid #98E37E;')
    position.setAttribute('style', localStorage.getItem('positionBorderStyle'))
    //  position error message 
    localStorage.setItem('positionErrorMsg', 'Correct position name')
    positionErrorMsg.innerHTML = localStorage.getItem('positionErrorMsg')
    localStorage.setItem('positionErrorMsgStyles', 'color:#98E37E;')
    positionErrorMsg.setAttribute('style' ,localStorage.getItem('positionErrorMsgStyles'))
    //  position success icon 
    localStorage.setItem('position-src', 'images/success-icon.svg')
    positionIcon.src = localStorage.getItem('position-src')
    localStorage.setItem('positionIconStyle', 'position-icon-success')
    positionIcon.classList.add(localStorage.getItem('positionIconStyle'))

} else {
    //  position border style
    localStorage.setItem('positionBorderStyle', 'border: 1px solid #EF5050;')
    position.setAttribute('style', localStorage.getItem('positionBorderStyle'))
   //  position error message 
   localStorage.setItem('positionErrorMsg', 'Incorrect position name')
   positionErrorMsg.innerHTML = localStorage.getItem('positionErrorMsg')
   localStorage.setItem('positionErrorMsgStyles', 'color:#EF5050;')
   positionErrorMsg.setAttribute('style' ,localStorage.getItem('positionErrorMsgStyles'))
   //  position danger icon 
   localStorage.setItem('position-src', 'images/danger-icon.svg')
   positionIcon.src = localStorage.getItem('position-src')
   localStorage.setItem('positionIconStyle', 'position-icon-danger')
   positionIcon.classList.add(localStorage.getItem('positionIconStyle'))
}
if(position.value.length == 0) {
        //  position border style
        localStorage.setItem('positionBorderStyle', 'border: 1px solid #BCBCBC;')
        position.setAttribute('style', localStorage.getItem('positionBorderStyle'))
        //  position error message 
        localStorage.setItem('positionErrorMsg', 'მინიმუმ 2 სიმბოლო')
        positionErrorMsg.innerHTML = localStorage.getItem('positionErrorMsg')
        localStorage.setItem('positionErrorMsgStyles', 'color:#2E2E2E;')
        positionErrorMsg.setAttribute('style' ,localStorage.getItem('positionErrorMsgStyles'))
        //  position danger icon 
        localStorage.setItem('position-src', 'images/danger-icon.svg')
        positionIcon.src = localStorage.getItem('position-src')
        localStorage.setItem('positionIconStyle', 'position-icon-hidden')
        positionIcon.classList.add(localStorage.getItem('positionIconStyle'))
        
    }

});

//! Company Validation



const employerErrorMsg = document.getElementById('employer-error-message')
const employerIcon = document.getElementById('employer-icon')
employer.setAttribute('style', localStorage.getItem('employerBorderStyle'))
employerErrorMsg.innerHTML = localStorage.getItem('employerErrorMsg')
employerErrorMsg.setAttribute('style' ,localStorage.getItem('employerErrorMsgStyles'))
employerIcon.src = localStorage.getItem('employer-src')
employerIcon.classList.add(localStorage.getItem('employerIconStyle'))

employer.addEventListener('input', ()=> {
if(employer.value.length > 2) {
    //  position border style
    localStorage.setItem('employerBorderStyle', 'border: 1px solid #98E37E;')
    employer.setAttribute('style', localStorage.getItem('employerBorderStyle'))
    //  position error message 
    localStorage.setItem('employerErrorMsg', 'Correct employer name')
    employerErrorMsg.innerHTML = localStorage.getItem('employerErrorMsg')
    localStorage.setItem('employerErrorMsgStyles', 'color:#98E37E;')
    employerErrorMsg.setAttribute('style' ,localStorage.getItem('employerErrorMsgStyles'))
    //  position success icon 
    localStorage.setItem('employer-src', 'images/success-icon.svg')
    employerIcon.src = localStorage.getItem('employer-src')
    localStorage.setItem('employerIconStyle', 'employer-icon-success')
    employerIcon.classList.add(localStorage.getItem('employerIconStyle'))
} else {
    //  position border style
    localStorage.setItem('employerBorderStyle', 'border: 1px solid #EF5050;')
    employer.setAttribute('style', localStorage.getItem('employerBorderStyle'))
   //  position error message 
   localStorage.setItem('employerErrorMsg', 'Incorrect employer name')
   employerErrorMsg.innerHTML = localStorage.getItem('employerErrorMsg')
   localStorage.setItem('employerErrorMsgStyles', 'color:#EF5050;')
   employerErrorMsg.setAttribute('style' ,localStorage.getItem('employerErrorMsgStyles'))
   //  position danger icon 
   localStorage.setItem('employer-src', 'images/danger-icon.svg')
   employerIcon.src = localStorage.getItem('employer-src')
   localStorage.setItem('employerIconStyle', 'employer-icon-danger')
   employerIcon.classList.add(localStorage.getItem('employerIconStyle'))
}
if(employer.value.length == 0) {
        //  position border style
        localStorage.setItem('employerBorderStyle', 'border: 1px solid #BCBCBC;')
        employer.setAttribute('style', localStorage.getItem('employerBorderStyle'))
        //  position error message 
        localStorage.setItem('employerErrorMsg', 'მინიმუმ 2 სიმბოლო')
        employerErrorMsg.innerHTML = localStorage.getItem('employerErrorMsg')
        localStorage.setItem('employerErrorMsgStyles', 'color:#2E2E2E;')
        employerErrorMsg.setAttribute('style' ,localStorage.getItem('employerErrorMsgStyles'))
        //  position danger icon 
        localStorage.setItem('employer-src', 'images/danger-icon.svg')
        employerIcon.src = localStorage.getItem('employer-src')
        localStorage.setItem('employerIconStyle', 'employer-icon-hidden')
        employerIcon.classList.add(localStorage.getItem('employerIconStyle'))
        
    }

});

//! Start date Validation - startDate

const startDateErrorMsg = document.getElementById('start-date-error')
startDate.setAttribute('style', localStorage.getItem('startDateStyle'))
startDate.addEventListener('input', ()=> {
    if(startDate.value) {
        localStorage.setItem('startDateStyle', 'border: 1px solid #98E37E;')
        startDate.setAttribute('style', localStorage.getItem('startDateStyle'))
    } else {
        localStorage.setItem('startDateStyle', 'border: 1px solid #BCBCBC;')
        startDate.setAttribute('style', localStorage.getItem('startDateStyle'))
        localStorage.setItem('startDateErrorMsg', 'Choose start date')

    }
});


//! Finish date Validation 
//! Start date Validation - startDate

const finishDateErrorMsg = document.getElementById('finish-date-error')
finishDate.setAttribute('style', localStorage.getItem('finishDateStyle'))
finishDate.addEventListener('input', ()=> {
    if(finishDate.value) {
        localStorage.setItem('finishDateStyle', 'border: 1px solid #98E37E;')
        finishDate.setAttribute('style', localStorage.getItem('finishDateStyle'))
    } else {
        localStorage.setItem('finishDateStyle', 'border: 1px solid #BCBCBC;')
        finishDate.setAttribute('style', localStorage.getItem('finishDateStyle'))
        localStorage.setItem('finishDateErrorMsg', 'Choose finish date')

    }
});

//! Description Validatio 

const descriptionErrorMsg = document.getElementById('description-error')
description.setAttribute('style', localStorage.getItem('descriptionBorder'))
description.addEventListener('input', ()=> {
    if(description.value.length !== 0) {
        localStorage.setItem('descriptionBorder', 'border: 1px solid #98E37E;')
        description.setAttribute('style', localStorage.getItem('descriptionBorder'))
    } else {
        localStorage.setItem('descriptionBorder', 'border: 1px solid #BCBCBC;')
        description.setAttribute('style', localStorage.getItem('descriptionBorder'))
        localStorage.setItem('finishDateErrorMsg', 'Choose finish date')

    }
});