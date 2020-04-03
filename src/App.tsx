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
                                <h3 style={{paddingLeft:5}}>Something Signages</h3>
                            </span>
                            <span style={{float:'right',width:'50%',marginTop:10}}>
                                <div style={{marginTop:15,float:'left',marginLeft:50}} className="actionButton">Action Station</div>
                                <div style={{marginTop:15,float:'right',marginRight:100}} className="disabledButton">Client info</div>


                            </span>

                        </CardPanel>
                    </div>
                </Row>
                <Row className="no-padding">

                    <div style={{width:'33.3%',backgroundColor:'#FAFAFA'}} className="no-padding">
                        <CardPanel style={{height:600}} className="no-padding">
                            <table className="highlight">
                                <thead style={{backgroundColor:'#eeeeee'}}>
                                <tr style={{color:'#8e8e8e'}}>
                                    <th style={{width:5}}></th>
                                    <th>Client Name</th>
                                    <th>Inbox</th>
                                    <th>Apps</th>
                                    <th>Data <br />Share</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr style={{border:'bottom 1px solid'}}>
                                    <td style={{backgroundColor:'#13dfe0'}}>{' '}</td>
                                    <td>Salted Herring LTD</td>
                                    <td><div className="circleBase standard orange"><span className="circleText">1</span></div></td>
                                    <td><div className="circleBase standard"><span className="circleText">3</span></div></td>
                                    <td><div className="circleBase standard"></div></td>
                                </tr>
                                <tr>
                                    <td />
                                    <td>Sartoria Design</td>
                                    <td><div className="circleBase standard orange"><span className="circleText">2</span></div></td>
                                    <td><div className="circleBase standard"><span className="circleText">7</span></div></td>
                                    <td><div className="circleBase standard"></div></td>

                                </tr>
                                <tr>
                                    <td />
                                    <td>Something Signage</td>
                                    <td><div className="circleBase standard orange"><span className="circleText">6</span></div></td>
                                    <td><div className="circleBase standard"><span className="circleText">5</span></div></td>
                                    <td><div className="circleBase standard"></div></td>

                                </tr>
                                <tr>
                                    <td/>
                                    <td>Lightbulb Advertising</td>
                                    <td><div className="circleBase standard orange"><span className="circleText">8</span></div></td>
                                    <td><div className="circleBase standard"><span className="circleText">4</span></div></td>

                                        <td><div className="circleBase standard"><span className="circleTextIcon">
                                            <i style={{color:'#13dfe0',fontWeight:800}} className="material-icons">done</i>
                                        </span></div></td>


                                </tr>
                                </tbody>
                            </table>
                        </CardPanel>
                    </div>
                    <div style={{width:'66.6%',backgroundColor:'#eeeeee'}}>
                        <CardPanel style={{height:600,backgroundColor:'#eeeeee'}} className="no-padding"></CardPanel>
                    </div>

                </Row>
            </div>
        );
    }
}

export default App;
