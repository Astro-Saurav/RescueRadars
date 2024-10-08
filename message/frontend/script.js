// Get the modal
var modal = document.getElementById("emergencyModal");

// Get the button that opens the modal
var btn = document.getElementById("emergency-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Example action for emergency contact button
document.getElementById("contact-emergency").onclick = function() {
    var selectedContact = document.getElementById("emergency-select").value;
    alert("Contacting " + selectedContact + "...");
    modal.style.display = "none"; // Close the modal after contacting
};
