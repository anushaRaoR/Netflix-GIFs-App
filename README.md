Objective : The main objective of this project is to create a dynamic web page by making use of Giphy API. The application will have the buttons pertaining to the Netflix shows already displayed. It will allow us to search for a particular show and by clicking on the ‘Submit’, it will add the show button in the list of the already displayed show buttons. 

A user-input box is provided such that the user can enter the name of their favorite shows and by clicking on ‘submit’, the show will be added to the array which creates the buttons for the show. 

The following can be done in the app :

-When the user clicks on any button pertaining to a particular show, it will fetch 9 static giphy images from the Giphy API.

-When the user clicks on any image, then it should play the gif.

-When the user clicks on the same image again, then it should stop playing the gif.


Requirements :

-AJAX for calling the Giphy API to fetch the images.

-CSS Bootstrap for a proper grid system.

-Jquery used for DOM manipulations.

-HTML for the structure and presentation of the page.

-Javascript for adding dynamic and interactive elements to the web page.


Steps :

-Created 3 files namely giphy.html : for the basic structure of the webpage, giphy.css : for styling the elements specified in the html file, giphy.js  : for the manipulations pertaining to the web page as per the objective.

-A folder called ‘images’ was created in the project file so as to store the netflix images as giphy-left.gif and giphy-right.gif. 

-All the DOM manipulations were done in the giphy.js file by making use of jQuery.

-AJAX was used to request the Giphy API to get access to the images of the shows searched. A function was created such that it made an AJAX request to the Giphy API and the JSON body returned the urls of the static and animated images of the shows along with the ratings.

-As the requirement was to fetch 9 giphy images, the limit was restricted to 9 in the API link.

-The query parameter in the API was filled with the search term which was entered in the user-input box.
