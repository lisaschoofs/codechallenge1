var generateClicks = 0;

$(document).ready(function(){
  console.log("Let's do this!");
  eventListeners();
});

function eventListeners() {
  $(".button").on("click", function(){
    generateClicks += 1;
    $(".container").append("<div class='red'><p>Clicks = " + generateClicks + "</div>");
    $(".container").children().last().append("<button class='swap'>Swap</button><button id='delete'>Delete</button>");
  });

//sets up listener to switch background color to yellow
  $(".container").on("click", ".swap", function(){
      $(this).parent().addClass("yellow");
  });
  //sets up delete button listener
  $(".container").on("click", "#delete", function(){
        $(this).parent().remove();
  });
}



// Follow the steps below to complete the code challenge:
//
// Clicking a Swap <button> should change its parent background-color from Red to Yellow.
//
// Clicking a Delete <button> should remove its parent <div> container (and all of its contents).
