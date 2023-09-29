import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './main.css';
import { Wrapper } from "./styles";
import { Page } from "../src/components/page";

export const App: React.FC = () => {
    return (
        <Wrapper>
            <Page />
        </Wrapper>
    )
}

ReactDOM.render(<App />, document.getElementById("app-root"));
