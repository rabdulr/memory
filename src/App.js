import React, {useRef, useState, useEffect} from 'react';
import * as Tone from 'tone';

const App = () => {
    const [count, setCount] = useState(0)
    const squares = ['C4', 'C#4', 'D4']
    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toMaster();


    return (
        <div>
            <h3>Memory</h3>
            <hr/>
            <div id='squares'>
                <ul>
                    { squares.map(square => {
                        return (
                            <li 
                                data-note={`${square}`} 
                                className='square' 
                                key={`${square}`} 
                                >{square}
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
};

export default App;