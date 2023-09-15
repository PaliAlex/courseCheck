import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Wrapper } from "./styles";

export const App: React.FC = () => {
    return (
        <Wrapper>
            <h1>Hello worlddd</h1>
        </Wrapper>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
