// Get the retirement date
var retirementDate = new Date("June 20, 2024").getTime();

// Update the countdown every second
var countdown = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining
  var timeRemaining = retirementDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the HTML elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Check if the countdown is finished
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Retirement time has arrived!";
  }
}, 1000);

// // Handle comment submission
// document.getElementById("comment-form").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the comment input value
//   var commentInput = document.getElementById("comment-input").value;

//   // Create a new list item to display the comment
//   var commentListItem = document.createElement("li");
//   commentListItem.classList.add("comment");
//   commentListItem.textContent = commentInput;

//   // Append the comment to the comments list
//   document.getElementById("comments-list").appendChild(commentListItem);

//   // Clear the comment input
//   document.getElementById("comment-input").value = "";
// });