
const pics = document.querySelector('.pics');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
pics.addEventListener('click', openModal);

function openModal(event) {
    
// Code to show modal  - Use event parameter 'e'   
    console.log(event.target);
    let imageSrc = event.target.src;
    

    //select img tag inside dialog, gove it src
    modalImage.src = imageSrc.replace("sm", "full");
    console.log(typeof(imageSrc));
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

let menuButton = document.getElementsByClassName("menu-btn")[0];
console.log(menuButton);

// event listener
menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    console.log(event);


    // toggle on/off the menu display

    // grab the nav from the DOM
    let nav = document.querySelector("nav");
    // toggle the .hide class on/off
    nav.classList.toggle("hide");
    // profit

    menuButton.classList.toggle("change");

}