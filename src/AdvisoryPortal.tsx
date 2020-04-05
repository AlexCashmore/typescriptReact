import * as React from "react";
import  BusinessNavigator  from "./BusinessNavigator";
import  NotificationManager  from "./NotificationManager";
import  MessagingPanel  from "./MessagingPanel";
import BusinessHeader from "./BusinessHeader";
import { Header } from "./Header";
import './App.scss';
import 'materialize-css';
import { Navbar,Icon,NavItem,Row,Col,Button,CardPanel } from 'react-materialize';
import {decorate, observable,action} from "mobx"
import {observer} from "mobx-react"
interface IFormProps {
    store:any;
}
class AdvisoryPortal extends React.Component<IFormProps> {


    constructor(props: IFormProps) {
        super(props);
        const store:Array<any>=[];

    }
    componentDidMount(): void {
        /*
        //after some API request//
        const fakeData= [
        ];
        Object.assign(this.props.store.businessList, fakeData);
        console.log(this.props.store.businessList,fakeData)
        */
    }

    public render() {
        const appStore=this.props.store;
        return (<div>
                <Header />
                <Row className="no-padding">
                    <div style={{width:'33.3%'}} className="no-padding">
                        <CardPanel className="no-padding">
                            <div style={{padding:24,height:90,fontWeight:300}}><div style={{fontSize:24, float:'left'}}>My Clients</div>
                                <div style={{float:'left',paddingLeft:150,color:'#4264ea'}}>By Activity
                                    <span style={{marginLeft:60,marginTop:5}}><i className="material-icons">keyboard_arrow_down</i></span>
                                    </div>
                            </div>
                        </CardPanel>
                    </div>
                    <div style={{width:'66.6%'}} className="no-padding">
                        <BusinessHeader store={appStore} />
                    </div>
                </Row>
                <Row className="no-padding">

                    <BusinessNavigator store={appStore} />
                    <div style={{width:'33.3%',backgroundColor:'#eeeeee'}}>
                        <NotificationManager store={appStore} />
                    </div>
                    <div style={{width:'33.3%',backgroundColor:'#eeeeee'}}>
                        <MessagingPanel store={appStore} />
                    </div>

                </Row>
            </div>
        );
    }
}


const ObservedAdvisoryPortal=observer(AdvisoryPortal);
export default ObservedAdvisoryPortal;
