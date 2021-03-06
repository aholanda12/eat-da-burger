// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).on("click", ".change-eat", function(event) {
  event.preventDefault();
  console.log("Button Clicked")
    var id = $(this).data("id");
    var newEat = 1;

    var newEatState = {
      devoured: newEat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed devoured to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(document).on("submit", ".create-form", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Button Clicked")

    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
