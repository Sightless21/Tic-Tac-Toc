import './App.css';
import { useState } from 'react';

function Square({value, onSquareClick}) {
  return(
      <button className='square' onClick={onSquareClick}>
        {value}
        </button>
  );
}

export default function Borad() {

  const [xIsNext,setIsNext] = useState(true);
  const [squares,setSquare] = useState(Array(9).fill(null));

  function handleClick(i) {
    //Check this squares clicked ?
    if (squares[i]){
      return;
     }
    const nextSquares = squares.slice();
    if (xIsNext === true ? nextSquares[i] = 'X' : nextSquares[i] = 'O');
    /* if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    } */
    setIsNext(!xIsNext);
    setSquare(nextSquares);
  }
  return(
    <>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}
