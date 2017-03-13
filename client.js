$(document).ready(function(){
  console.log("Let's do this!");
  eventListeners();
});

function eventListeners() {
  $(".button").on("click", function(){
    $(".container").append("<div></div>");
  });

}
