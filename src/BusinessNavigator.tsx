import * as React from "react";
import { Navbar,Icon,NavItem,Row,Col,Button,CardPanel } from 'react-materialize';
import {observer} from "mobx-react";

export interface IFormState {
}
interface IFormProps {
    store:any;

}
class BusinessNavigator extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        const store:Array<any>=[];
    }
    private businessRenderer(store:any){
        return store.businessList.map((e:any, i:any) =>
            <tr style={{border:'bottom 1px solid',cursor:'pointer'}} onClick={()=>{store.selectBusiness(e.id)}}>
                <td style={{backgroundColor:e.selected?'#13dfe0':'white'}}>{' '}</td>
                <td>{e.name}</td>
                <td><div className="circleBase standard orange"><span className="circleText">{e.inbox}</span></div></td>
                <td><div className="circleBase standard"><span className="circleText">{e.apps}</span></div></td>
                <td><div className="circleBase standard"><span className="circleTextIcon">
                    {e.data_is_shared? <i style={{color:'#13dfe0',fontWeight:800}} className="material-icons">done</i>:null}
                                        </span></div></td>
            </tr>
        )
    }

    public render() {
        const {store}=this.props;

        return (
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
                        {this.businessRenderer(store)}
                        </tbody>
                    </table>
                    <div style={{marginTop:60,float:'left',marginLeft:165}} className="actionButton">Add New Client</div>

                </CardPanel>
            </div>
        );
    }
}
const BusinessNavigatorObserver = observer(BusinessNavigator);
export default BusinessNavigatorObserver