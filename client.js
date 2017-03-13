$(document).ready(function(){
  console.log("Let's do this!");
  eventListeners();
});

function eventListeners() {
  $(".button").on("click", function(){
    $(".container").append("<div class='red'></div>");
  });

}



// Follow the steps below to complete the code challenge:
//
// Inside the <div> element you created in the previous step, create a <p> element that shows how many times you have clicked the button from the first step.
//
// Inside the <div> element you created in step two, append two <button> elements. The text of the two buttons should read Swap and Delete.
//
// Clicking a Swap <button> should change its parent background-color from Red to Yellow.
//
// Clicking a Delete <button> should remove its parent <div> container (and all of its contents).
