import { useState } from "react";

export default function Player ({initialName,symbol,isActive,onChangeName}){
    const [isEditing,setIsEditing]=useState(false);
    const [playerName,setPlayerName]=useState(initialName);
    
    function handleEditClick(){
        //setIsEditing(!isEditing); =>schedules a state update to true;
        setIsEditing(editing => !editing);// ye instant latest state value update kar deta hai.
       
       if(isEditing) onChangeName(symbol,playerName);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }
    let editablePlayerName=<span className="player-name">{playerName}</span>;
    //let btnCaption='Edit';

    if(isEditing){
        editablePlayerName=<input type="text" required value={playerName} onChange={handleChange}/>
        //btnCaption='Save';
    }
    return (
        <li className={isActive ?'active': undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ?'Save':'Edit'}</button>
        </li>
    );
}