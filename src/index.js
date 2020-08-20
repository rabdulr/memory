import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('#root');
const App = () => {
    return (
        <div>
            <h3>Hello!</h3>
            <hr/>
        </div>
    )
}

ReactDOM.render(<App />, root);