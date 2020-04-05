import * as React from "react";
import  BusinessNavigator  from "./BusinessNavigator";
import  NotificationManager  from "./NotificationManager";
import  MessagingPanel  from "./MessagingPanel";
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
                            <div style={{padding:24,height:90,fontWeight:600}}><div style={{fontSize:24, float:'left'}}>My Clients</div>
                                <div style={{float:'left',paddingLeft:150,color:'#4264ea'}}>By Activity
                                    <span style={{marginLeft:60,marginTop:5}}><i className="material-icons">keyboard_arrow_down</i></span>
                                    </div>
                            </div>
                        </CardPanel>
                    </div>
                    <div style={{width:'66.6%'}} className="no-padding">
                        <CardPanel style={{height:90}} className="no-padding">
                            <span style={{padding:24,width:'50%',float:'left'}}>
                                <h3 style={{paddingLeft:5,fontWeight:600}}>Something Signage Ltd</h3>
                            </span>
                            <span style={{float:'right',width:'50%',marginTop:10}}>
                                <div style={{marginTop:15,float:'left',marginLeft:50}} className="actionButton">Action Station</div>
                                <div style={{marginTop:15,float:'right',marginRight:100}} className="disabledButton">Client info</div>


                            </span>

                        </CardPanel>
                    </div>
                </Row>
                <Row className="no-padding">

                    <BusinessNavigator />
                    <div style={{width:'33.3%',backgroundColor:'#eeeeee'}}>
                        <NotificationManager />
                    </div>
                    <div style={{width:'33.3%',backgroundColor:'#eeeeee'}}>
                        <MessagingPanel />
                    </div>

                </Row>
            </div>
        );
    }
}

export default App;
