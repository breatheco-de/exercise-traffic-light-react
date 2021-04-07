import './App.css';
import React, { useState } from 'react';




function App() {
    const [displayRed, setRed] = useState(" ");
    const [displayYellow, setYellow] = useState(" ");
    const [displayGreen, setGreen] = useState(" ");
    let onRed = () => {
        setRed("selected");
        setYellow (" ");
        setGreen(" ");
    }
    const onYellow = () => {
        setRed(" ");
        setYellow ("selected");
        setGreen(" ");
    }
    const onGreen = () => {
        setRed(" ");
        setYellow (" ");
        setGreen("selected");
    }

    return (
        <>
            <div className="trafficTop"></div>
            <div className="trafficLight">
                <div className={`red light ${displayRed}`} onClick={onRed}></div>
                <div className={`yellow light ${displayYellow}`} onClick={onYellow}></div>
                <div className={`green light ${displayGreen}`} onClick={onGreen}></div>
            </div>
        </>
    );
}

export default App;
