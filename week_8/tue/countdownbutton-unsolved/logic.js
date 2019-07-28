// Initialize Firebase (YOUR OWN APP)
var config = {
  apiKey: "AIzaSyAYfH6pZXAzm5klNDj_Xy-nkky_DN50-ho",
  authDomain: "counter-click-1c4c9.firebaseapp.com",
  databaseURL: "https://counter-click-1c4c9.firebaseio.com",
  projectId: "counter-click-1c4c9",
  storageBucket: "counter-click-1c4c9.appspot.com",
  messagingSenderId: "374800152238",
  appId: "1:374800152238:web:cfc7c2392acc791b"
};

firebase.initializeApp(config);

// Create a variable to reference the database
// var database = ...
var database = firebase.database();

// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------
$("#click-button").on("click", function() {
  clickCounter--;

    database.ref().set({
    clickCount: clickCounter
  });
});
// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
    database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());

// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
// database.ref().on("value", function(snapshot)) {}

// We are now inside our .on function...

// Console.log the "snapshot" value (a point-in-time representation of the database), is an object
// This "snapshot" allows the page to get the most current values in firebase.
clickCounter = snapshot.val().clickCount;   

// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________

// Console Log the value of the clickCounter

// Change the HTML using jQuery to reflect the updated clickCounter value

// Then include Firebase error logging
// HINT: }, function(errorObject) -- any time you page can't make a connection to the database, error msg will show
$("#click-value").text(snapshot.val().clickCount);
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
database.ref().set({
  clickCount: clickCounter

});

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  
  }); 

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
