import * as React from "react";
import AdvisoryPortal from './AdvisoryPortal';
import './App.scss';
import 'materialize-css';
import {decorate, observable,action} from "mobx"
import {observer} from "mobx-react"
import Store from './Store'


class App extends React.Component {
    public render() {
        return (<div>
                <AdvisoryPortal store={appStore} />
            </div>
        );
    }
}

const appStore = new Store();

export default App;
