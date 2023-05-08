


let marginTop = 50;
let boxMarginTop = -400;
let value;
let lastScrollPosition = 0;
let i = 0;
let click = 0;

// const createFormButton = document.querySelector('.create-form');
// const fullNameInput = document.querySelector('.fname');
// const listElement = document.querySelector('#list');

//     console.log(click)
//     createFormButton.addEventListener('click', () => {
//         fullNameInput.style.transition = 'visibility 0.5s ease-in-out';
//         fullNameInput.style.visibility = 'visible';
//         listElement.remove();
//     });
const createFormButton = document.querySelector('.create-form');
const fullNameInput = document.querySelector('.fname');
const listElement = document.querySelector('#list');
const formElement = document.querySelector(".form-one");

const createForm = () => {
    
    fullNameInput.style.visibility = 'visible';
    formElement.style.visibility = 'visible';
    listElement.remove();
    createFormButton.removeEventListener('click', createForm);
};

createFormButton.addEventListener('click', createForm);





window.addEventListener('scroll', function () {
    let currentScrollPosition = window.scrollY;
    let transparentDiv = document.querySelector('.chat-container');

    if (currentScrollPosition < lastScrollPosition) {
        transparentDiv.classList.add('scroll');
    } else {
        transparentDiv.classList.remove('scroll');
    }

    lastScrollPosition = currentScrollPosition;
});


let form = document.getElementById('first-name');
form.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        value = document.getElementById('first-name').value;
        if (value.match(/[a-zA-Z]+\s/)) {
            document.getElementById('formGPT').style.visibility = ('hidden');
            document.getElementById('first-name').style.visibility = ('hidden');
            document.getElementById('para').style.visibility = ('hidden');
            document.getElementById('pass').style.visibility = ('visible');
            // printBGToScreen();
            printToScreen();

        }
        else {
            let nameError = ', which doesnt match the requirment. Enter your first name, followed by a space, then your last name.'
            printToScreen(nameError);

        }

    }

});


let form1 = document.getElementById('pass');
form1.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        value = document.getElementById('pass').value;
        if (validatePassword(value) == true) {
            document.getElementById('pass').style.visibility = ('hidden');
            document.getElementById('mail').style.visibility = ('visible');

            printToScreen();

        }
        else {
            let passError = ', which doesnt match the requirement. <br> The password should consist of 4 letters,a number, and a special character.';
            printToScreen(passError);
        }

    }
});



let form2 = document.getElementById('mail');
form2.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        value = document.getElementById('mail').value;
        if (validateEmail(value) == true) {
            document.getElementById('mail').style.visibility = ('hidden');
            document.getElementById('website').style.visibility = ('visible');

            printToScreen();

        }
        else {
            let mailError = ', and it is not correct, please enter an email similar to this one: example@mail.com';
            printToScreen(mailError);
        }
    }
});

let form5 = document.getElementById('website');
form5.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        value = document.getElementById('website').value;
        if (validateWebsite(value) == true) {
            document.getElementById('website').style.visibility = ('hidden');
            document.getElementById('phone').style.visibility = ('visible');

            printToScreen();

        }
        else {
            let webError = ', and it is not a correct website address, here are examples of website: https://www.example.com , http://example.com/path/to/page ';
            printToScreen(webError);
        }
    }
});



let form3 = document.getElementById('phone');
form3.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        value = document.getElementById('phone').value;
        if (validatePhoneNumber(value) == true) {
            document.getElementById('phone').style.visibility = ('hidden');
            document.getElementById('coffee').style.visibility = ('visible');

            printToScreen();

        }
    }
});

let form4 = document.getElementById('coffee');
form4.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        value = document.getElementById('coffee').value;
        document.getElementById('coffee').style.visibility = ('hidden');
        document.getElementById('temper').style.visibility = ('visible');

        printToScreen();


    }
});

let form6 = document.getElementById('temper');
form6.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        value = document.getElementById('temper').value;
        document.getElementById('temper').style.visibility = ('hidden');
        document.getElementById('address').style.visibility = ('visible');

        printToScreen();


    }
});

let form7 = document.getElementById('address');
form7.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {

        value = document.getElementById('address').value;
        document.getElementById('address').style.visibility = ('hidden');
        document.getElementById('temp').style.visibility = ('visible');

        printToScreen();
        interactivePrintToScreen();
        i++;

    }
});

let form8 = document.getElementById('temp');
form8.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('temp').style.visibility = ('hidden');
        document.getElementById('tempt').style.visibility = ('visible');
        interactivePrintToScreen();

        i++;

    }
});

let form9 = document.getElementById('tempt');
form9.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {


        document.getElementById('tempt').style.visibility = ('hidden');
        document.getElementById('tempth').style.visibility = ('visible');

        interactivePrintToScreen();

        i++;

    }
});

let form10 = document.getElementById('tempth');
form10.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {


        // document.getElementById('tempt').style.visibility = ('hidden');
        // document.getElementById('tempth').style.visibility = ('visible');
        form10.disabled = true;
        interactivePrintToScreen();

        i++;

    }
});


// function printToScreen(x) {
//     const box = document.createElement('div');
//     box.classList.add('feedback-box');
//     // box.style.margin = 50 + 'px';
//     // box.style.marginTop = boxMarginTop + 'px';
//     // box.style.marginLeft = 250 + 'px';
//     // box.style.zIndex = '1';
//     // box.style.paddingBottom = 200 +'px';
//     document.getElementById('fb-box').appendChild(box);
//     if (x !== undefined) {
//         box.innerHTML = `the value you eneterd is ${value}  ${x}`;
//         boxMarginTop += 300;
//         return;
//     }

//     box.innerHTML = `the value you enterd is ${value}`;
//     boxMarginTop -= 300;

// }
function printToScreen(x) {
    const box = document.createElement("div");
    box.classList.add("feedback-box");
    document.getElementById("fb-box").appendChild(box);

    let text = "";
    if (x !== undefined) {
        text = `the value you entered is ${value}  ${x}`;
    } else {
        text = `the value you entered is ${value}`;
    }

    const chars = text.split("");
    let i = 0;
    const intervalId = setInterval(() => {
        const charContainer = document.createElement("span");
        charContainer.classList.add("char-container");
        const char = document.createElement("span");
        char.classList.add("char");
        char.innerHTML = chars[i];
        charContainer.appendChild(char);
        box.appendChild(charContainer);
        i++;
        if (i === chars.length) {
            clearInterval(intervalId);
        }
    }, 100);

    boxMarginTop += 300;
}








function interactivePrintToScreen() {
    const box = document.createElement('div');
    box.classList.add('feedback-box');
    box.style.justifyContent = 'flex-start';
    document.getElementById('fb-box').appendChild(box);
    if (i === 0) {

        const intf = createInterestsFieldset();
        box.appendChild(intf);
    }
    if (i === 1) {
        const genf = createGenderFieldset();
        box.appendChild(genf);

    }
    if (i === 2) {
        const agef = createAgeFieldset();
        box.appendChild(agef);
    }

}

function printBGToScreen() {
    const bg = document.createElement('div');
    bg.classList.add('background-color');
    bg.style.marginTop = marginTop + 'px';
    // bg.style.marginBottom = 35 +'px';
    bg.style.paddingBlock = 200 + 'px';
    document.getElementById('fb-box').appendChild(bg);
    // marginTop+=300;
}


function validatePassword(password) {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/;
    return regex.test(password);
}


function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function validatePhoneNumber(phoneNumber) {
    let regex = /^\d{9,10}$/;
    return regex.test(phoneNumber);
}


function validateWebsite(website) {
    var regex = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    return regex.test(website);
}




function createInterestsFieldset() {
    const fieldset = document.createElement('fieldset');

    const legend = document.createElement('legend');
    legend.textContent = 'Interests:';
    fieldset.appendChild(legend);

    const netflixDiv = document.createElement('div');
    const netflixInput = document.createElement('input');
    netflixInput.type = 'checkbox';
    netflixInput.value = 'netflix';
    netflixInput.name = 'interests[]';
    const netflixLabel = document.createElement('label');
    netflixLabel.textContent = 'Netflix';
    netflixLabel.htmlFor = 'netflix';
    netflixDiv.appendChild(netflixInput);
    netflixDiv.appendChild(netflixLabel);
    fieldset.appendChild(netflixDiv);

    const footballDiv = document.createElement('div');
    const footballInput = document.createElement('input');
    footballInput.type = 'checkbox';
    footballInput.value = 'football';
    footballInput.name = 'interests[]';
    netflixInput.checked = true;
    const footballLabel = document.createElement('label');
    footballLabel.textContent = 'Football';
    footballLabel.htmlFor = 'football';
    footballDiv.appendChild(footballInput);
    footballDiv.appendChild(footballLabel);
    fieldset.appendChild(footballDiv);

    const pokerDiv = document.createElement('div');
    const pokerInput = document.createElement('input');
    pokerInput.type = 'checkbox';
    pokerInput.value = 'poker';
    pokerInput.name = 'interests[]';
    const pokerLabel = document.createElement('label');
    pokerLabel.textContent = 'Poker';
    pokerLabel.htmlFor = 'poker';
    pokerDiv.appendChild(pokerInput);
    pokerDiv.appendChild(pokerLabel);
    fieldset.appendChild(pokerDiv);



    return fieldset;
}


function createGenderFieldset() {
    // create the <fieldset> element
    const fieldset = document.createElement('fieldset');

    // create the <legend> element and set its text content
    const legend = document.createElement('legend');
    legend.textContent = 'Gender:';

    // create the first <div> element and its child elements
    const maleDiv = document.createElement('div');
    const maleInput = document.createElement('input');
    maleInput.type = 'radio';
    maleInput.id = 'male';
    maleInput.name = 'gender';
    maleInput.value = 'male';
    maleInput.checked = true;
    const maleLabel = document.createElement('label');
    maleLabel.htmlFor = 'male';
    maleLabel.textContent = 'Male';

    // create the second <div> element and its child elements
    const femaleDiv = document.createElement('div');
    const femaleInput = document.createElement('input');
    femaleInput.type = 'radio';
    femaleInput.id = 'female';
    femaleInput.name = 'gender';
    femaleInput.value = 'female';
    const femaleLabel = document.createElement('label');
    femaleLabel.htmlFor = 'female';
    femaleLabel.textContent = 'Female';

    // create the third <div> element and its child elements
    const otherDiv = document.createElement('div');
    const otherInput = document.createElement('input');
    otherInput.type = 'radio';
    otherInput.id = 'other';
    otherInput.name = 'gender';
    otherInput.value = 'other';
    const otherLabel = document.createElement('label');
    otherLabel.htmlFor = 'other';
    otherLabel.textContent = 'Other';

    // append the child elements to their respective parent elements
    maleDiv.appendChild(maleInput);
    maleDiv.appendChild(maleLabel);
    femaleDiv.appendChild(femaleInput);
    femaleDiv.appendChild(femaleLabel);
    otherDiv.appendChild(otherInput);
    otherDiv.appendChild(otherLabel);

    // append the <legend> and <div> elements to the <fieldset> element
    fieldset.appendChild(legend);
    fieldset.appendChild(maleDiv);
    fieldset.appendChild(femaleDiv);
    fieldset.appendChild(otherDiv);

    // return the completed <fieldset> element
    return fieldset;
}


function createAgeFieldset() {
    // create fieldset element
    const fieldset = document.createElement("fieldset");

    // create label element
    const label = document.createElement("label");
    label.htmlFor = "age";

    // create legend element
    const legend = document.createElement("legend");
    legend.textContent = "Pick your age:";
    label.appendChild(legend);

    // create select element
    const select = document.createElement("select");
    select.name = "age";
    select.id = "age";
    select.required = true;

    // create option elements and add them to the select element
    for (let i = 23; i <= 38; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        if (i === 26) {
            option.selected = true;
        }
        select.appendChild(option);
    }

    // add label and select elements to fieldset element
    fieldset.appendChild(label);
    fieldset.appendChild(select);

    return fieldset;
}

