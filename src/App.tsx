import React, { useEffect, useState } from 'react';
import buildInitialGameState from './buildInitialGameState';
import Piece, { PieceColor, PieceProps, PieceType } from './Piece/Piece';
import styles from './App.module.css';
import { ppid } from 'process';

function advancePawn(currentState: PieceProps[]): PieceProps[] {
  return currentState.map((pp: PieceProps) => {
    if (pp.color === PieceColor.White
      && pp.type === PieceType.Pawn
      && pp.x === 0) {
      return {
        ...pp,
        y: pp.y - 2
      };
    }
    return pp;
  });
}

function App() {
  const [boardState, setBoardState] = useState(buildInitialGameState);
  useEffect(() => {
    setTimeout(() => {
      setBoardState(advancePawn);
    }, 5000)
  })
  return (
    <main>
      <section className={styles.board}>
        {boardState.map((pieceState: PieceProps, index: number) =>
          <Piece key={index} {...pieceState} />
        )}
      </section>
    </main>
  );
}

export default App;
