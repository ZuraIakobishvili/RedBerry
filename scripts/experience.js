
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

// !VALIDATION
var error = [];
//! Position

const positionSuccessIcon = document.getElementById('position-icon-success')
const positionDangerIcon = document.getElementById('position-icon-danger')
position.setAttribute('style', localStorage.getItem('positionStyles'))
positionSuccessIcon.style.display = localStorage.getItem('positionSuccessIcon')
positionDangerIcon.style.display = localStorage.getItem('positionDangerIcon')

position.addEventListener('input', ()=> {
    if(position.value.length >= 2)  {
        //! Border 
        localStorage.setItem('positionStyles', 'border: 1px solid #98E37E;')
        position.setAttribute('style', localStorage.getItem('positionStyles'))
        //! Icons
        localStorage.setItem('positionSuccessIcon', 'block')
        localStorage.setItem('positionDangerIcon', 'none')
        positionSuccessIcon.style.display = localStorage.getItem('positionSuccessIcon')
        positionDangerIcon.style.display = localStorage.getItem('positionDangerIcon')
    } else if(position.value.length < 3) {
        //! Border
        localStorage.setItem('positionStyles', 'border: 1px solid #EF5050;')
        position.setAttribute('style', localStorage.getItem('positionStyles'))
        //! Icons
        localStorage.setItem('positionSuccessIcon', 'none')
        localStorage.setItem('positionDangerIcon', 'block')
        positionSuccessIcon.style.display = localStorage.getItem('positionSuccessIcon')
        positionDangerIcon.style.display = localStorage.getItem('positionDangerIcon')
        error.push('მინიმუმ 2 სიმბოლო')
    }

    if(position.value.length == 0) {
        //! Border
        localStorage.setItem('positionStyles','border: 1px solid #BCBCBC;' )
        position.setAttribute('style', localStorage.getItem('positionStyles'))
        //! Icons
        localStorage.setItem('positionSuccessIcon', 'none')
        localStorage.setItem('positionDangerIcon', 'none')
        positionSuccessIcon.style.display = localStorage.getItem('positionSuccessIcon')
        positionDangerIcon.style.display = localStorage.getItem('positionDangerIcon')
        error.push('მინიმუმ 2 სიმბოლო')
    }

})

//! employer Validation

const employerSuccessIcon = document.getElementById('employer-icon-success')
const employerDangerIcon = document.getElementById('employer-icon-danger')
employer.setAttribute('style', localStorage.getItem('employerStyles'))
employerSuccessIcon.style.display = localStorage.getItem('employerSuccessIcon')
employerDangerIcon.style.display = localStorage.getItem('employerDangerIcon')

employer.addEventListener('input', ()=> {
    if(employer.value.length >= 2)  {
        //! Border 
        localStorage.setItem('employerStyles', 'border: 1px solid #98E37E;')
        employer.setAttribute('style', localStorage.getItem('employerStyles'))
        //! Icons
        localStorage.setItem('employerSuccessIcon', 'block')
        localStorage.setItem('employerDangerIcon', 'none')
        employerSuccessIcon.style.display = localStorage.getItem('employerSuccessIcon')
        employerDangerIcon.style.display = localStorage.getItem('employerDangerIcon')
    } else if(employer.value.length < 3) {
        //! Border
        localStorage.setItem('employerStyles', 'border: 1px solid #EF5050;')
        employer.setAttribute('style', localStorage.getItem('employerStyles'))
        /employer
        localStorage.setItem('employerSuccessIcon', 'none')
        localStorage.setItem('employerDangerIcon', 'block')
        employerSuccessIcon.style.display = localStorage.getItem('employerSuccessIcon')
        employerDangerIcon.style.display = localStorage.getItem('employerDangerIcon')
        error.push('მინიმუმ 2 სიმბოლო')
    }

    if(employer.value.length == 0) {
        //! Border
        localStorage.setItem('employerStyles','border: 1px solid #BCBCBC;' )
        employer.setAttribute('style', localStorage.getItem('employerStyles'))
        //! Icons
        localStorage.setItem('employerSuccessIcon', 'none')
        localStorage.setItem('employerDangerIcon', 'none')
        employerSuccessIcon.style.display = localStorage.getItem('employerSuccessIcon')
        employerDangerIcon.style.display = localStorage.getItem('employerDangerIcon')
        error.push('მინიმუმ 2 სიმბოლო')
    }

})


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


//! Redirect on another page 

const form = document.getElementById('form')
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  if(position.value.length >= 2 && employer.value.length >= 2 && startDate.value.length!== 0 &&  finishDate.value.length !== 0 && description !== 0) {
    window.location.replace('education.html')
  } else {
    //! Position error message 
    if(position.value.length <2) {
        const positionError = document.getElementById('position-error-message')
        positionError.innerHTML = 'შეიყვანეთ სწორი მონაცემები'
        positionError.style.color = 'red';
    }   
    //! Employer error message
    if(employer.value.length <2) {
      const employerError = document.getElementById('employer-error-message')
      employerError.innerHTML = 'შეიყვანეთ სწორი ინფორმაცია'
      employerError.style.color = 'red'
    }
    //! Start Date error message
    if(!startDate.value) {
      const startDateError = document.getElementById('start-date-error')
      startDateError.innerHTML = 'აირჩიეთ რიცხვი'
      startDateError.style.color = 'red';
    }
    //!Finish Date Error Message
    if(!finishDate.value) {
        const finishDateError = document.getElementById('finish-date-error')
        finishDateError.innerHTML = 'აირჩიეთ რიცხვი'
        finishDateError.style.color = 'red';
    }
    //! Description Error Message
    if(!description.value) {
        const descriptionError = document.getElementById('description-error')
        descriptionError.innerHTML = 'შეიყვანეთ სწორი ინფორმაცია'
        descriptionError.style.color = 'red'
    }
}   
})