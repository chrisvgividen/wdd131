// Yep. Had to use ai for a decent chunck of this.
// I worked on it for almost 6 hours and just couldn't get the js to function on my own. 
// I honestly have no clue how I should be going about the js, because it makes sense when I look at it. But as soon as I have to write my own, I can't seem to do it. 


const creatureCard = {
    name: "Shrek",
    creaturePicture: "shrek.webp",
    class: "Swamp Boi",
    level: 5,
    health: 100,


    attackedHealth: function() {
        if (this.health > 0){
            this.health = this.health - 20;
            if (this.health < 0) this.health = 0;
            this.updateDisplay();
        }
    },


    levelUp: function() {
        this.level = this.level + 1;
        this.updateDisplay();
    },


    updateDisplay: function() {
        const imgOfCreature = document.querySelector(".image");
        imgOfCreature.src = this.creaturePicture;
        imgOfCreature.alt = "Picture of ${this.name}";

        const creatureName = document.querySelector(".name");
        creatureName.textContent = this.name;

        const allStats = document.querySelector(".stats");
        allStats.innerHTML = `
            <p><strong>Class: </strong>${this.class}</p>
            <p><strong>Level: </strong>${this.level}</p>
            <p><strong>Health: </strong>${this.health}</p>
        `
    }
};


creatureCard.updateDisplay();

document.getElementById("attacked").addEventListener("click", () => {
    creatureCard.attackedHealth();
});

document.getElementById("level").addEventListener("click", () => {
    creatureCard.levelUp();
});