// import {useState} from 'react';


export default function GameBoard({onSelectSquare,board}) {
    
    // const [gameBoard,setGameBoard]=useState(initialGameBoard);

    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updateBoard=[...prevGameBoard.map(innerArray =>[...innerArray])];
    //         updateBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updateBoard;
    //     });
    //     // setGameBoard((prevGameBoard)=>{
    //     //     prevGameBoard[rowIndex][colIndex]='x';
    //     //     return prevGameBoard;
    //     // });
    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => (<li key={colIndex}> <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={col !==null}>{col}</button></li>))}
                </ol>
            </li>
            ))}
        </ol>
    );
}