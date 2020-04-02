import * as React from "react";
import { BusinessNavigator } from "./BusinessNavigator";
import { Header } from "./Header";
import './App.scss';
import 'materialize-css';
import { Navbar,Icon,NavItem,Row,Col,Button,CardPanel } from 'react-materialize';

class App extends React.Component {
    public render() {
        return (<div>
                <Header />
                <Row className="no-padding">
                    <Col s={4} className="no-padding">
                        <CardPanel className="no-padding">
                            <h3 style={{padding:24}}>My Clients</h3>
                        </CardPanel>
                        {/*<BusinessNavigator />*/}
                    </Col>
                    <Col s={4} className="no-padding">
                            <h3 style={{padding:24}}>Something Signage</h3>
                    </Col>

                            <Col s={4} className="no-padding">
                                <div style={{padding:24}}><div style={{float:'left',marginLeft:150}}>
                                    <Button>Action Station</Button></div>
                                    <div style={{float:'right',marginRight:150}}>
                                        <Button>Client info</Button></div></div>
                            </Col>
                </Row>
            </div>
        );
    }
}

export default App;
