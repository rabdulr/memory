import React, {useRef, createRef, useState, useEffect} from 'react';
import * as Tone from 'tone';

const App = () => {
    const squares = ['C4', 'C#4', 'D4'];
    let inputRef = useRef(squares.map(createRef));
    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toDestination();
    console.log(inputRef.current)

    const handleClick = (event, idx) => {
        // inputRef.current[idx].value = `Hello ${idx}!`
        const {current} = inputRef.current[idx];
        // console.log( current.dataset.note )
        synth.triggerAttack(current.dataset.note)
        setInterval(() => {
            synth.triggerRelease();
        }, 500)
    }

    return (
        <div>
            <h3>Memory</h3>
            <hr/>
            <div id='squares'>
                <button onClick={randomPlay}>Random Play of Array</button>
                <h5>Array Count: {squares.length} </h5>
                <ul>
                    { squares.map((square, idx) => {
                        return (
                            <li 
                                data-note={`${square}`} 
                                className={`square${idx}`} 
                                key={`${square}`} 
                                ref={inputRef.current[idx]}
                                value={square}
                                onClick={(event) => handleClick(event, idx)}
                                >
                                    {square}
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
};

export default App;