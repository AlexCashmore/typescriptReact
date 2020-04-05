import * as React from "react";
import { Navbar,Icon,NavItem,Row,Col,Button,CardPanel } from 'react-materialize';
import {observer} from "mobx-react";

export interface IFormState {
}
interface IFormProps {
    store:any;


}

class BusinessHeader extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        const store:Array<any>=[];
    }

    public render() {
        const {store}=this.props;

        return (
            <CardPanel style={{height:90}} className="no-padding">
                            <span style={{padding:24,width:'50%',float:'left'}}>
                                <h3 style={{paddingLeft:5,fontWeight:300}}>{store.businessList.filter((i)=>i.selected)[0].name}</h3>
                            </span>
                <span style={{float:'right',width:'50%',marginTop:10}}>
                                <div style={{marginTop:15,float:'left',marginLeft:50}} className="actionButton">Action Station</div>
                                <div style={{marginTop:15,float:'right',marginRight:100}} className="disabledButton">Client info</div>


                            </span>

            </CardPanel>
        );
    }
}
const BusinessHeaderObserver = observer(BusinessHeader);
export default BusinessHeaderObserver