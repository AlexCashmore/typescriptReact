import * as React from "react";
import  BusinessNavigator  from "./BusinessNavigator";
import  NotificationManager  from "./NotificationManager";
import  MessagingPanel  from "./MessagingPanel";
import BusinessHeader, {FormErrors, IFormState} from "./BusinessHeader";
import { Header } from "./Header";
import './App.scss';
import 'materialize-css';
import { Navbar,Icon,NavItem,Row,Col,Button,CardPanel } from 'react-materialize';
import {decorate, observable,action} from "mobx"
import {observer} from "mobx-react"
interface IFormProps {
    store:any;
}
class AdvisoryPortal extends React.Component<IFormProps, IFormState> {


    constructor(props: IFormProps) {
        super(props);
        const store:Array<any>=[];

    }
    componentDidMount(): void {
        /*console.log('some API request');
        const fakeData= [
            {id:0,name: "Saasdasd", inbox: 1,apps:2,data_is_shared:true,selected:true},
            {id:1,name: "SarsaddadsgTD", inbox: 7,apps:3,data_is_shared:true,selected:false},
            {id:2,name: "Somdfgdfggnage LTD", inbox: 2,apps:1,data_is_shared:true,selected:false},
            {id:3,name: "Lightdfging ", inbox: 4,apps:9,data_is_shared:false,selected:false},


        ];
        Object.assign(this.props.store.businessList, fakeData);
        console.log(this.props.store.businessList,fakeData)*/
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
