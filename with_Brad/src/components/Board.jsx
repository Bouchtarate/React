import { useState } from "react";
import "../style/Board.css";

function Square() {
  const [number, setNumber] = useState(null);
  function handleClick() {
    setNumber("X");
  }
  return (
    <button className="Square" onClick={handleClick}>
      {number}
    </button>
  );
}
const Board = () => {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};
export default Board;
