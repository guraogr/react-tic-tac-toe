import { useState } from 'react';
import Board from './Board';
import { History } from '../type/game';
import calculateWinner from '../helper/calculateWinner';

const Game = () => {
  const [history, setHistory] = useState<History[]>([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i: number) => {
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(history.concat([{ squares }]));
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
