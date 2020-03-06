import * as React from "react";
import { Form } from "./Form";
import './App.scss';

class App extends React.Component {
  public render() {
    return (<div>
          <span className="headerComponent">Prime Numbers</span>
          <Form />
        </div>
    );
  }
}

export default App;
