import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState<string[] | null[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const onSquareClick = (i: number) => {
    const copySquares = squares.slice();
    copySquares[i] = xIsNext ? 'X' : 'O';
    setSquares(copySquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i: number) => <Square value={squares[i]} onClick={() => onSquareClick(i)} />;

  const status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
