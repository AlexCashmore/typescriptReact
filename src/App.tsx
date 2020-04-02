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
                    <div style={{width:'33.3%'}} className="no-padding">
                        <CardPanel className="no-padding">
                            <h3 style={{padding:24}}>My Clients</h3>
                        </CardPanel>
                    </div>
                    <div style={{width:'66.6%'}} className="no-padding">
                        <CardPanel style={{height:80}} className="no-padding">
                            <span style={{padding:24,width:'50%',float:'left'}}>
                                <h3 style={{paddingLeft:5}}>Something Signage</h3>
                            </span>
                            <span style={{float:'right',padding:24,paddingRight:150}}><Button className="blue darken-2">Action</Button>
                                <Button style={{marginLeft:5}} className="blue darken-2">Client Info</Button></span>
                        </CardPanel>
                    </div>
                </Row>
                <Row className="no-padding">

                    <div style={{width:'33.3%',backgroundColor:'#FAFAFA'}} className="no-padding">
                        <CardPanel style={{height:600}} className="grey lighten-2 no-padding">
                            Table
                        </CardPanel>
                    </div>
                    <div style={{width:'66.6%',backgroundColor:'#FDFDFD'}}>
                        <CardPanel style={{height:600}} className="grey lighten-2 no-padding">...</CardPanel>
                    </div>

                </Row>
            </div>
        );
    }
}

export default App;
