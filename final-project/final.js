// The link property in repairs will be used if I ever decide to sell said item(s). For now, they won't do anything.

const repairs = [
  {
    name: "Unbootable Wii",
    tags: ["Console", "Retro", "Repaired"],
    imgSrc:
      "pictures/Wii console repair.jpg",
    imgAlt: "Wii taken apart and booting",
    description:
      "This Wii just would not boot. No matter what I tried, I couldn't get it to work. It turned on, the light was green, but no display. And no controller would connect to it. After doing some research, I found out that it might be the bluetooth module. Sure enough, it was unplugged, and plugging it back in fixed it. While it was fun to take apart the Wii, it's a complicated system, with many screws and lots of parts. If you want/need to take one apart, just have patience. And keep the screws sorted and seperated, as they're not all the same length.",
    price:
      "None",
    link: "",
    difficulty: 4
  },
  {
    name: "Custom PC",
    tags: ["PC", "Custom", "Workstation", "Built"],
    imgSrc:
      "pictures/Custom steam machine pc.jpg",
    imgAlt: "Custom orange and black mini pc on a rocking chair",
    description:
      "Building PC's is super fun, as well as fixing/testing them. It's not super hard in my opinion, just time consuming. Really fun to see all that hard work turn a pile of parts into a working system that can do almost anything.",
    price:
      "None",
    link: "",
    difficulty: 3
  },
  {
    name: "PS5 Controller Stick Repair",
    tags: ["PS5", "Solder", "Controller", "Stick Repair", "Repaired"],
    imgSrc:
      "pictures/ps5 controller stick repair.jpg",
    imgAlt: "Broken ps5 controller sticks",
    description:
      "Replaced a PS5 controllers sticks so that the controller could be used again. I would say that desoldering is pretty tough. Can't keep heat on the board for too long, or else the pads/board might get damaged. I've damaged my fair share of electronics in the past, but the knowledge was worth it. The proccess itself isn't too bad, I just don't have the best current skills for such repairs. I mannaged though, and learned a great deal. Super satisfied with how it turned out, and I plan on starting a few other soldering projects here in a few weeks.",
    price:
      "None",
    link: "",
    difficulty: 5
  },
  {
    name: "DS Lite Shell Swap",
    tags: ["DS", "DS Lite", "Console", "Shell Swap", "Repaired"],
    imgSrc:
      "pictures/ds lite shell swap.jpg",
    imgAlt: "Three DS Lites with their shells swapped",
    description:
      "I shell swapped some DS Lites. It was a SUPER fun and rewarding project. I bought broken/semi broken DS Lites, replaced the screens, the touchscreen, buttons, and cleaned em up. It took a lot of patience and time, but all three function well and look great. Lots of little ribon cables and tough spots for re-routing wires, which gives it it's high difficulty rating.",
    price:
      "None",
    link: "",
    difficulty: 5
  },
  {
    name: "Switch One Pro Controller Shell Swap",
    tags: ["Nintendo Switch", "Controller", "Shell Swap"],
    imgSrc:
      "pictures/switch one controller shell swap.jpg",
    imgAlt: "Switch one controller shell swapped to look similar to an snes controller",
    description:
      "Again, a super fun and rewarding shell swap. it was fairly easy to do. Just took a few screws out, swaped the internals over to the new housing, screwed everything back in, and done. Controllers are by far the easiest things to shell swap in my opinion. I've shell swapped PS5 controllers, Switch Joy Cons, Switch pro controllers and DS Lites. Way too fun.",
    price:
      "None",
    link: "",
    difficulty: 2
  }
];

// For later use, if needed.

// {
//     name: "",
//     tags: ["", "", ""],
//     imgSrc:
//       "img pathing here",
//     imgAlt: "Image description here",
//     description:
//       "",
//     price:
//       "",
//       difficulty: 1
//   }



// Start of functions and such

function search() {

    let repairQuery = input.value;

    let filteredRepairs = repairs.filter(function(repair){
        return ( 
            repair.name.toLowerCase().includes(repairQuery.toLowerCase()) ||
            repair.description.toLowerCase().includes(repairQuery.toLowerCase()) || 
            repair.tags.find(tag => tag.toLowerCase().includes(repairQuery.toLowerCase()))
        );
    })

    function compareRepairs(a,b) {
    if (a.difficulty < b.difficulty) {
        return -1;
    } else if (a.difficulty > b.difficulty) {
        return 1;
    }
    return 0;
    }

    let sortedRepairs = filteredRepairs.sort(compareRepairs);

    // clear out any previous content
    repairContainer.innerHTML = '';
    // output onto screen
    sortedRepairs.forEach(function(repair){
      renderRepair(repair);
    })
}

let repairContainer = document.querySelector('#repair-container');
let input = document.querySelector('#search-box-input');

/* for the enter key to work in search box */
input.addEventListener('keypress', handleEnter);
function handleEnter(event) {
  if (event.key === 'Enter') {
    search();
  }
}


function tagTemplate(tags) {
    return tags.map((tag)=> `<button>${tag}</button>`).join(' ');
}

function difficultyTemplate(rating) {
		let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5"
>  Difficulty: `
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += `<span aria-hidden="true" class="icon-boot">⭐</span>`
      } else {
        html += `<span aria-hidden="true" class="icon-empty">☆</span>`
      }			
    }
    html += `</span>`
    return html
  }

function repairsTemplate(repair) {
    return `<div class="repair-card">
  <div class="repair-content">
    <h2>${repair.name}</h2>
    <div class="repair-tags">
      ${tagTemplate(repair.tags)}
    </div>
    <img src="${repair.imgSrc}" alt="${repair.imgAlt}">
    <p>${repair.description}</p>
    <p>Price: <a href = "${repair.link}">$${repair.price}</a></p>
    <p>${difficultyTemplate(repair.difficulty)}</p>
  </div>
</div>`
}

function renderRepair(repair) {
    let html = repairsTemplate(repair);
    repairContainer.innerHTML += html
}

// This will show all of the repair cards without the requirement to search them up to find them. Lists all of the repair cards at once before searching and filtering.
repairs.forEach(repair => {

  renderRepair(repair);

  });