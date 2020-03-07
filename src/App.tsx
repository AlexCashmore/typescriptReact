import * as React from "react";
import { Form } from "./Form";
import './App.scss';

class App extends React.Component {
    public render() {
        return (<div>
                <span className="headerComponent">A Prime Example</span>
                <Form />
            </div>
        );
    }
}

export default App;
