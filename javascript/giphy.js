$(document).ready(function() {

//The topics searched to be added in an array
var topics = [];

// Function using AJAX request to the Giphy API
 function displayNetflixShow() {

	var x = $(this).data("search");
	console.log(x);
// The limit here is specifies as 9 as 9 giphy images should be fetched from the giphy API and the query parameter will be replaced by the search term
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=9";

	console.log(queryURL);

	$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	var results = response.data;
        	console.log(results);
        	for (var i = 0; i < results.length; i++) {
        	
        	var showDiv = $("<div class='col-md-4'>");

        	var rating = results[i].rating;
        	var defaultAnimatedSrc = results[i].images.fixed_height.url;
        	var staticSrc = results[i].images.fixed_height_still.url;
        	var showImage = $("<img>");
        	var p = $("<p>").text("Rating: " + rating);

        	showImage.attr("src", staticSrc);
        	showImage.addClass("netflixGiphy");
        	showImage.attr("data-state", "still");
        	showImage.attr("data-still", staticSrc);
        	showImage.attr("data-animate", defaultAnimatedSrc);
        	showDiv.append(p);
        	showDiv.append(showImage);
        	$("#gifArea").prepend(showDiv);

        }
	});
}

  //When we click on the Submit button ,the click event takes the term from form input and trims, adds to topics array and the button is displayed
	$("#addShow").on("click", function(event) {
        event.preventDefault();
        var newShow = $("#netflixInput").val().trim();
        topics.push(newShow);
        console.log(topics);
        $("#netflixInput").val('');
        displayButtons();
      });

  // The Function will iterate through the topics array in order to display button with array values in "myButtons" 
	function displayButtons() {
    $("#myButtons").empty();
    for (var i = 0; i < topics.length; i++) {
      var a = $('<button class="btn btn-primary">');
      a.attr("id", "show");
      a.attr("data-search", topics[i]);
      a.text(topics[i]);
      $("#myButtons").append(a);
    }
  }


  displayButtons();

  //When we Click on button with id of "show" , it will execute displayNetflixShow function
  $(document).on("click", "#show", displayNetflixShow);

  //When we Click on the gifs with class of "netflixGiphy", it will execute pausePlayGifs function
  $(document).on("click", ".netflixGiphy", pausePlayGifs);

  //This Function will check the "data-state" attribute and based on the status of the state will make changes in the image source to "data-animate" or "data-still"
  function pausePlayGifs() {
  	 var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } 
      else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
  }
}

});