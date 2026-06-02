// Grab the form element from the DOM, print it out

const form = document.querySelector("#fsyForm");
console.log(form);

// Create an event listener on the form
// Calls a function when "submit"

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event);

    const firstName = form.firstName.value;
    console.log(firstName);

    // Retrieve the last name, email, print to console

    const lastName = form.lastName.value;
    const email = form.email.value;
    
    console.log(lastName);
    console.log(email);

    const campuses = form.campus;
    console.log(campuses[0].checked);
});