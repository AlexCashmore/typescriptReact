import * as React from "react";
import { Navbar,Icon,NavItem,Row,Col,Button,CardPanel } from 'react-materialize';

export interface IFormState {
}
interface IFormProps {
    store:any,

}



export default class MessagingPanel extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
    }

    public render() {

        return (
            <CardPanel style={{height:600,backgroundColor:'white'}} className="no-padding">
                <div style={{color:'#4264ea',fontSize:20,fontWeight:500,paddingLeft:0}}>
                    <div style={{height:60,paddingTop:10,borderBottom:'1px solid #d0d0d0',backgroundColor:'#eeeeee'}}>
                        <div style={{float:'left',paddingLeft:70}}>Train Aider</div>
                        <div style={{marginRight:150,marginTop:5,float:'right',width:90}}>
                            <div style={{float:'left'}}><i className="material-icons">format_list_bulleted</i></div>
                            <div style={{float:'right',paddingTop:2}}><i className="material-icons">insert_comment</i></div>

                        </div>

                    </div>
                </div>

            </CardPanel>
        );
    }
}