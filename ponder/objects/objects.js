// Works, changes the contents of the container without trying to change the container itself.
// const aCourse = {
//     age = 33;
// }

// aCourse.age = 34;


// DOES NOT WORK. Tries to change the container.
// const age = 33;
// AGE = 34;


// Javascript object to hold multiple sections of one course

const aCourse = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    sections: [
        {sectionNum: 1,
        roomNum: "STC 231",
        enrolled: 12,
        days: "TTh",
        instructor: "Sister Anderson"},
        
        {sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 0,
        days: "TTh",
        instructor: "Brother Warner"}
    ],

    enrollStudent: function(sectionNum) {
        // sectionNum represents the section the user wants to add students to 
        // Find that section in our array, add a student to it
        this.sections.forEach(function(selection) {
            if(sectionNum.sectionNum == sectionNum) {
                sectionNum.enrolled++;
                return;
            }
        });

        // Alternative
        this.sections.find(section => section.sectionNum == sectionNum).enrolled++;
        renderSections(this.sections);
    }
}

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
