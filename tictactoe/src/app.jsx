import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="justify-center items-center w-16 h-16 border-2 border-red-500 text-4xl font-bold persolal-cursor"
      onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  const loser = !winner && squares.every((square) => square !== null);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!winner && !loser) {
    status = "No winner yet, Next player: " + (xIsNext ? "X" : "O");
  } else if (loser) {
    status = "No winner, It's a draw";
  }

  return (
    <>
      <div className="mt-[20px] mb-[20px] text-center font-bold">{status}</div>
      <div className="flex flex-row w-full board-row board-row ">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex flex-row w-full board-row board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex flex-row w-full board-row board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0 && move < 9) {
      description = "Move num#" + move;
    } else if (move === 9) {
      description = "Game Over";
    } else {
      description = "Let's Start";
    }
    return (
      <li key={move} className="m-[10px]">
        <button
          onClick={() => jumpTo(move)}
          className="p-[10px] border-red-500 border-3 rounded-3xl hover:bg-red-400 hover:text-white">
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-row justify-center items-center h-screen relative z-10">
      <div className="flex justify-center items-center ">
        <div className="text-center">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
      </div>
      <div className="m-[20px]">
        <ol className="p-[10px]">{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
