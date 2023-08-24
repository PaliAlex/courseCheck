import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const App: React.FC = () => {
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
