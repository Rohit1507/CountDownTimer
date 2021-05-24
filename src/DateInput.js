import React from 'react';
import './DateInput.css';

function DateInput({getDate,setDateString,reset}){
    return(
        <div className = "Date--input">
            <input type = "text" onChange = {getDate} placeholder = "1 jan 2022 20:45:56" />
            <button type = "submit" onClick = {setDateString} >submit</button>
        </div>
        
    )
}

export default DateInput;