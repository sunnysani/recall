# Recall

Reveal paired card in your turn. Recall card you or your enemy Reveal. Play the game at [recall.games](recall.games).

## About Game

### Game Architecture (General)

#### Player
- name (string)
- color (enum)
- point (number)
- score (number)

#### Card
- id (number)
- Image (object/string), 
- revealed (boolean)

### Pass and Play

#### Variables
- Player Count
- Card Pair Count
- Mode (Standard or Reveal and Switch)

#### Mechanic
- Map<number, Card> cardMap : Map/Dictionary of Card with Card id as key and Card object as value
- number[] cardList : List of numbers that contains the position of cards
- Player opens 2 cards. It passes selected index of cardList they chooses
    - If player opens the same card pair, the player gets point and set the card revealed to true and hide the card 
    - If not, player doesn't get point and card closes
        - Map.get(number).revealed : if it's revealed, it's hidden in the game's deck
- When all card has been revealed, game is over. +1 Score for the winner
- Game restarts

### Multiplayer

#### Variables
- Player UID
- Player Name

#### Mechanic

To be built. Uses socket to connect with server.
