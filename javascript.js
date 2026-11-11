
// Welcome Message
window.onload = function() {
    alert("Welcome to SharePlate - Food Wastage Management!");
};

// Donation Form
document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let name = document.querySelector('input[type="text"]').value;

    let food = document.querySelectorAll('input[type="text"]')[1].value;

    let quantity = document.querySelectorAll('input[type="text"]')[2].value;

    let location = document.querySelectorAll('input[type="text"]')[3].value;

    let contact = document.querySelector('input[type="tel"]').value;

    // Display confirmation
    alert(
        "Thank you for donating food!\n\n" +
        "Name: " + name + "\n" +
        "Food: " + food + "\n" +
        "Quantity: " + quantity + "\n" +
        "Location: " + location + "\n" +
        "Contact: " + contact
    );

    // Clear form
    this.reset();

});

// Welcome Button Message
function showMessage() {
    alert("Thank you for helping people and reducing food wastage!");
}
