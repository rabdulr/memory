import React, {useRef, createRef, useState, useEffect} from 'react';
import * as Tone from 'tone';

const App = () => {
    const [active, setActive ] = useState();
    const squares = ['C4', 'C#4', 'D4'];
    let inputRef = useRef(squares.map(createRef));
    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toDestination();

    const handleClick = (event, idx) => {
        // inputRef.current[idx].value = `Hello ${idx}!`
        const {current} = inputRef.current[idx];
        setActive(current.dataset.note);
        // console.log( current.dataset.note )
        synth.triggerAttackRelease(current.dataset.note, .5)
    }

    const randomPlay = () => {
        const randArray = squares.map(() => squares[Math.floor(Math.random() * squares.length)]);
        const sequence = new Tone.Sequence((time, note) => {
            squares.find((square, idx) => {
                if(square === note) {
                    setActive(note);
                }
            })
            setTimeout(() => {setActive('')}, 200)
            synth.triggerAttackRelease(note, 0.5);
        }, randArray).start("+0.0");
        sequence.loop = 1;
        Tone.Transport.start(); 
    }

    return (
        <div>
            <h3>Memory</h3>
            <hr/>
            <div id='squares'>
                <button onClick={randomPlay}>Random Play of Array</button>
                <h5>Array Count: {squares.length} </h5>
                    { squares.map((square, idx) => {
                        return (
                            <button
                                data-note={`${square}`} 
                                className={active === square ? 'active' : ''} 
                                key={square} 
                                ref={inputRef.current[idx]}
                                value={square}
                                onClick={(event) => handleClick(event, idx)}
                                >
                                    {square}
                            </button>
                        )
                    })}
            </div>
        </div>
    )
};

export default App;