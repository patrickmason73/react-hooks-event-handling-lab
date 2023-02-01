// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function eyesOnMeHandlerBlur() {
        console.log('Hey! Eyes on me!')
    }
    function eyesOnMeHandlerFocus() {
        console.log('Good!')
    }
    return (
        <div>
            <button onBlur={eyesOnMeHandlerBlur} onFocus={eyesOnMeHandlerFocus}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;