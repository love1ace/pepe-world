/**
 * @namespace Card object
 */
MemoryGame.Card = function(value, isMatchingCard) {
  this.value = value;
  this.isRevealed = false;
  if (isMatchingCard) {
    this.isMatchingCard = true;
  }

  this.reveal = function() {
    this.isRevealed = true;
  }

  this.conceal = function() {
    this.isRevealed = false;
  }
};
