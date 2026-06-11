// When the button is clicked, change all the die images to the gif animation

document.getElementById("rollButton").addEventListener("click", event => {
    console.log("Yay it worked");

    // Get the images
    const images = document.querySelectorAll("#gameboard img");
    
    // Change the src
    images.forEach(image => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        };
    });


    // Timer??
    // Wait two seconds, then call this anonymous functions
    setTimeout(() => {
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
        };
    });
    }, 2000);
});



function isDieUnlocked(dieImage) {
    // Retrieve list of checkboxes
    const checkboxes = document.querySelectorAll("#gameboard input");

    // Filter our checked
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);

    // Compare list to dieImage, if there's a match, return true
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
};