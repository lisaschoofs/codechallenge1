var generateClicks = 0;

$(document).ready(function(){
  console.log("Let's do this!");
  eventListeners();
});


function eventListeners() {
  $(".button").on("click", function(){
    generateClicks += 1;
    $(".container").append("<div class='red'><p>Clicks = " + generateClicks + "</div>");
    $(".container").children().last().
    append("<button class='swap'>Swap</button><button id='delete'>Delete</button>");
  });

//sets up listener to switch background color between red & yellow
  $(".container").on("click", ".swap", function(){
      $(this).parent().toggleClass("yellow", "red");
  });
  //sets up delete button listener
  $(".container").on("click", "#delete", function(){
        $(this).parent().remove();
  });
}
