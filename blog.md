So I've been watching "Queen's Gambit" on Netflix recently. And I've also been thinking about CSS driven animations recently. So I decided to combine the two and whip up a quick React app that will take the move history for a game and animate the moves on a chess board.

I kicked off `npx create-react-app chess-animation --use-npm --template=typescript` and while waiting for Npm to download packages googled "chess peice SVG" and found [This Wikimedia Site](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_kdt45.svg) that will do nicely.

The UI I have in mind is a two panel horizontal layout with the left 1/3 of the screen a list of the moves with an indicator on the current move. To the right is a game board with the peices moving around.

I'll need a data structure to hold the game state. An array of `PieceState` objects that match this interface might work:
```Typescript
enum PieceColor {
   White,
   Black
}
enum PieceType {
   Pawn,
   Rook,
   Knight,
   Bishop,
   Queen,
   King,
}
interface PieceState {
   x: number; //0 based top-left (css coordinates)
   y: number;
   color: PieceColor;
   type: PieceType;
   onBoard: Boolean;
}
```

Now I'll create a function that builds the inital game state and returns it. Then we'll create a React component `<Piece />` that we can use to render a `PieceState` to the screen.

Got it working, but there isn't much of a difference between `PieceState` and the props being passed to `<Piece/>` so I'll refactor `PieceState` to be called `PieceProps` and make them on in the same.


