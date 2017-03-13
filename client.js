var generateClicks = 0;

$(document).ready(function(){
  console.log("Let's do this!");
  eventListeners();
});

function eventListeners() {
  $(".button").on("click", function(){
    generateClicks += 1;
    $(".container").append("<div class='red'><p>Clicks = " + generateClicks + "</div>");
    $(".container").children().last().append("<button id='swap'>Swap</button><button id='delete'>Delete</button>");
  });

  //sets up delete button listener
  $(".container").on("click", "#delete", function(){
        $(this).parent().remove(); //remove parent?
  });
}



// Follow the steps below to complete the code challenge:
//
// Inside the <div> element you created in step two, append two <button> elements. The text of the two buttons should read Swap and Delete.
//
// Clicking a Swap <button> should change its parent background-color from Red to Yellow.
//
// Clicking a Delete <button> should remove its parent <div> container (and all of its contents).
