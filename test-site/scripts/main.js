let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/download.jfif') {
        myImage.setAttribute('src', 'images/cat-getty-images.jpg');
    } else {
        myImage.setAttribute('src', 'images/download.jfif');
    }
}

let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name: ');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeader.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeader.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}