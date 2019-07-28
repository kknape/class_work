// alert("testing-1-2-3-testing");

//variables
    var authKey = "HrAefUHojCnwMBoQZoMIMbW8bI61uolO";
    var queryTerm = "";
    var numResults = 0;
    var startYear = 0;
    var endYear = 0;
    var queryUrlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

//variable to track number of articles
    var articleCounter = 0;

//functions
   function runQuery(numArticle, queryURL){

    //ajax functions
    $.ajax ({url: queryURL, method: "GET"})
        .done(function(NYTData) {
            console.log(queryURL);
            console.log(NYTData);
        })   
   } 



//main processes

//retrieve user inputs and convert to variables
$("#searchBtn").on("click", function(){
    alert("test");
    runQuery(10, "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=HrAefUHojCnwMBoQZoMIMbW8bI61uolO&q=election");
    return false;
})

//use variables to run ajax calls
//break down the nyt object into usabel fields
//dynamically generate html content
//dealing with edge cases
