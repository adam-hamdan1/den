let noMessages = [
    "Stop Playing Games",
    "Bitch Please",
    "Ok Enough.",
    "PLEEEEEASE?",
    "Stop Saying NO!",
    "BAS"
];

let currentIndex = 0; // Initialize the index for the messages array

function answerYes() {
    document.getElementById('response').textContent = "Chalo G!!! ILY";
    document.getElementById('response').classList.add('active'); // Add 'active' class

    // Hide the "No" button
    document.getElementById('noButton').style.display = 'none';

    document.getElementById('noButton').focus();

}

function answerNo() {
    document.getElementById('response').textContent = noMessages[currentIndex];
    document.getElementById('response').classList.add('active'); // Add 'active' class
    if (currentIndex < noMessages.length - 1) {
        currentIndex++; // Move to the next message if not at the end of the array
    }
}

function showQuestion() {
    // Check if the "Yes" button was clicked
    var response = confirm("Are you sure you want to answer the question?");
    if (response) {
        // Change background image if the user confirms
        document.body.style.backgroundImage = "url('den_burger.jpeg')";
        
        // Show the actual question and response buttons
        document.getElementById('question').style.display = 'block';
        document.getElementById('buttons').style.display = 'flex';
    }
}

