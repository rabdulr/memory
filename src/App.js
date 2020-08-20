import React, {useRef, useState, useEffect} from 'react';
import tone from 'tone';

const App = () => {
    const [isLoaded, setLoaded] = useState(false);
    const squares = ['C4', 'C#4', 'D4']
    // const synth = new Tone;
    // synth.oscillator.type = "sine";
    // synth.toMaster();
    const key = useRef();
    console.log('Tone', tone)

    return (
        <div>
            <h3>Memory</h3>
            <hr/>
            <div id='squares'>
                <ul>
                    { squares.map(square => {
                        return (
                            <li data-note={`${square}`} className='square' key={`${square}`} onClick={() => console.log(key.current)}>Click me!</li>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
};

export default App;