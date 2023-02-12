
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
