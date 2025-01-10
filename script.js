
let input = document.getElementsByTagName('input')[0];
let btnadd = document.getElementsByTagName('button')[0];
let ul = document.getElementsByTagName('ul')[0];

// Trigger the ADD button click on pressing Enter
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btnadd.click();
    }
});

// ADD button click event
btnadd.addEventListener('click', function () {
    if (input.value === '') {
        alert("You must write something to add in list");
    } else {
        let btn = document.createElement('li');
        btn.textContent = input.value;
        ul.appendChild(btn);

        // Create Remove button
        let rmvbtn = document.createElement('button');
        rmvbtn.innerHTML = "\u00d7";  // Unicode character for a cross (×)
        btn.appendChild(rmvbtn);

        // Create check image
        let checkImg = document.createElement('img');
        checkImg.style.backgroundImage = 'url("640px-Circle_-_black_simple.svg (1).png")';
        checkImg.style.backgroundSize = 'cover';
        checkImg.style.backgroundPosition = 'start';
        btn.prepend(checkImg);

        saveData();
        input.value='';
    }
});

// UL click event (for checking and removing items)
ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");

        let checkImg = e.target.querySelector('img');
        if (e.target.classList.contains("checked")) {
            checkImg.style.backgroundImage = 'url("360_F_113168940_qG4M5jj4Fw16D1HI1QnLA2jEJd48M5F2.jpg")';
        } else {
            checkImg.style.backgroundImage = 'url("640px-Circle_-_black_simple.svg (1).png")';
        }
        saveData();
    } else if (e.target.tagName === 'IMG') {
        e.target.parentElement.classList.toggle("checked");

        if (e.target.parentElement.classList.contains("checked")) {
            e.target.style.backgroundImage = 'url("360_F_113168940_qG4M5jj4Fw16D1HI1QnLA2jEJd48M5F2.jpg")';
        } else {
            e.target.style.backgroundImage = 'url("640px-Circle_-_black_simple.svg (1).png")';
        }
        saveData();
    }
}, false);

// Save data to localStorage
function saveData() {
    localStorage.setItem("lorem77863261", ul.innerHTML);
}

// Show tasks from localStorage on page load
window.onload = function showTask() {
    ul.innerHTML = localStorage.getItem("lorem77863261");
}
