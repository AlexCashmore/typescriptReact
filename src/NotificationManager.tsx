import * as React from "react";
import { Navbar,Icon,NavItem,Row,Col,Button,CardPanel } from 'react-materialize';
import {observer} from "mobx-react";

export interface IFormState {
}
interface IFormProps {
    store:any,
}



class NotificationManager extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
    }

    public render() {
        const {store}=this.props;
        const {apps,inbox} =store.businessList.filter((i)=>i.selected)[0];

        return (
            <CardPanel style={{height:600,backgroundColor:'#eeeeee',width:'100%'}} className="no-padding">
                <div style={{height:60}}>
                    <div style={{
                        width:'50%',float:'left',backgroundColor:'#eeeeee',height:60,fontSize:18,color:'#8e8e8e'}}>
                        <div style={{marginTop:15}}>
                            <span style={{float:'left',marginLeft:30,fontWeight:600}}>Notifications</span>
                            <div style={{float:'right',marginRight:50,fontSize:14}} className="circleBase standard orange"><span className="circleText">{inbox}</span></div>
                        </div>
                    </div>
                    <div style={{width:'50%',float:'right',backgroundColor:'#eeeeee',borderLeft:'1px solid grey',height:60,
                        fontSize:18,color:'#8e8e8e'}}>
                        <div style={{marginTop:15}}>
                            <span style={{marginLeft:30,fontWeight:600}}>Active Apps</span>
                            <div style={{float:'right',marginRight:50,fontSize:14}} className="circleBase standard"><span className="circleText">{apps}</span></div>
                        </div>
                    </div>
                </div>


            </CardPanel>
        );
    }
}
const NotificationManagerObserver=observer(NotificationManager);
export default NotificationManagerObserver;