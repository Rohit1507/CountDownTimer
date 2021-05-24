import React from 'react';
import './Timer.css';

function Timer({day,hour,minute,second}){
    return(
        <div className = "Timer--conatiner">
            <div className = "count--down--time">
                <h1>Count Down Timer</h1>
                <p>Timer Ends After</p>
                <span>{`${day}Days`}</span>
                <span>{`${hour}Hours`}</span>
                <span>{`${minute}Minutes`}</span>
                <span>{`${second}Seconds`}</span>
            </div>
        </div>
    )
    
}

export default Timer;