//Javascript file
//$(document).ready(function(){


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCW9_7VxmemvQ1Znm-uy6qD7_LTf2iz-3g",
  authDomain: "employee-data-management-7afbb.firebaseapp.com",
  databaseURL: "https://employee-data-management-7afbb.firebaseio.com",
  projectId: "employee-data-management-7afbb",
  storageBucket: "",
  messagingSenderId: "468777354917",
  appId: "1:468777354917:web:69bf1701aa1ecd60"
  };
  
firebase.initializeApp(config);
  
  // Grab variables from form fields
    var database = firebase.database();
 
    $("#addEmployee").on("click", function(event) {
      event.preventDefault(); 
  
    var empName = $("#empName").val().trim();
    var empRole = $("#empRole").val().trim();
    var monthRate = $("#monthRate").val().trim();
    var startDate = $("#startDate").val().trim();

    var convertedStart = moment(startDate, X);

    var newEmp = {
      employee: empName,
      role: empRole,
      rate: monthRate,
      date: convertedStart,
    };

  //push values intot database  
    database.ref().push(newEmp);

    console.log(newEmp.empName);
    console.log(newEmp.empRrole);
    console.log(newEmp.monthRate);
    console.log(newEmp.startDate);

    alert("Employee successfully added.");
  });

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());


  var empName = childSnapshot.val().name;
  var empRole = childSnapshot.val().role;
  var convertedStart = childSnapshot.val().date;
  var monthRate = childSnapshot.val().rate;
  })