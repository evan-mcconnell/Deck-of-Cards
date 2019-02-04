//buisness logic
var suits = ["hearts", "spades", "clubs", "diamonds"]
var sets = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
var deck = 0;


//user logic
$(document).ready( function() {
  $("#deck-button").click( function(event) {
  event.preventDefault();
  deck = sets.forEach(function(set) {
    suits.forEach(function(suit) {
      $("ul#deck-list").append("<li>" + set + " of " + suit + "</li>");
    });
  });


  console.log(deck);
  });
});
