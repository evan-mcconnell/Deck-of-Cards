//buisness logic
var suits = ["hearts", "spades", "clubs", "diamonds"]
var sets = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
var deck = [];

var makeDeck = function() {
  sets.forEach(function(set) {
    suits.forEach(function(suit) {
      deck.push("<li>" + set + " of " + suit + "</li>");
    });
  });
};

//user logic
$(document).ready( function() {
  $("#deck-button").click( function(event) {
  event.preventDefault();
    makeDeck();
    deck.forEach(function(card) {
    $("ul#deck-list").append(card);
    });
  });
});
