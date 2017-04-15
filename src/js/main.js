/**
 * Created by nikita on 05.04.17.
 */
window.onload = function () {
    // body...
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn1 = document.getElementById('modal-button');
var btn2 = document.getElementById('modal-button2');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get Modal
var hamburgerMenu = document.getElementById('hamburger-menu');
var blclass = document.getElementsByClassName("blur-this");
// Get pseudoelement to open Modal
var openHM = document.getElementById("open-hm");

// Get the <span> element to close Modal
var closeHM = document.getElementsByClassName("close-hm")[0];
// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal.style.display = "block";
    for (var i = 0; i <blclass.length; i++) {
            blclass[i].classList.add('blur-class');
    }
}
btn2.onclick = function() {
        modal.style.display = "block";
        hamburgerMenu.style.display = "none";


    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    openHM.style.display = "block";
    document.getElementsByClassName("header__logo")[0].style.display = "inline-flex";
   for (var i = 0; i <blclass.length; i++) {
            blclass[i].classList.remove('blur-class');
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // When user clicks button, open Modal
openHM.onclick = function() {
    hamburgerMenu.style.display = "block";
    openHM.style.display = "none";
    for (var i = 0; i <blclass.length; i++) {
            blclass[i].classList.add('blur-class');
    }

    document.getElementsByClassName("header__logo")[0].style.display = "none";
};

// When user clicks Close (x), close Modal
closeHM.onclick = function() {
    hamburgerMenu.style.display = "none";
    openHM.style.display = "block";
   for (var i = 0; i <blclass.length; i++) {
            blclass[i].classList.remove('blur-class');
    }
    document.getElementsByClassName("header__logo")[0].style.display = "inline-flex";

};

// When user clicks anywhere outside of the Modal, close Modal
window.onclick = function(event) {
    if (event.target == hamburgerMenu) {
        hamburgerMenu.style.display = "none";
    }
}
}
