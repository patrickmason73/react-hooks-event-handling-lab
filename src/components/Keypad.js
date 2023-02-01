// Code Keypad Component Here
import React from "react";

function Keypad (){
function keypadHandler() {
    console.log('Entering password...')
}
    return (
        <div>
            <input type="password" onChange={keypadHandler}></input>
        </div>
    )
}

export default Keypad;