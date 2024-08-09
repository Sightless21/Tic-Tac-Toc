import './App.css';
import { useState } from 'react';

function Square({value}) {
  return(
      <button className='square'>{value}</button>
  );
}

export default function Borad() {

  const [square,SetSquare] = useState(Array(9).fill(null));
  return(
    <>
      <div className='board-row'>
        <Square value={square[0]}/>
        <Square value={square[1]}/>
        <Square value={square[3]}/>
      </div>
      <div className='board-row'>
        <Square value={square[4]}/>
        <Square value={square[5]}/>
        <Square value={square[6]}/>
      </div>
      <div className='board-row'>
        <Square value={square[7]}/>
        <Square value={square[8]}/>
        <Square value={square[9]}/>
      </div>
    </>
  );
}
