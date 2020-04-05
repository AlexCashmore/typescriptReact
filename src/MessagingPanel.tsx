import * as React from "react";
import { Navbar,Icon,NavItem,Row,Col,Button,CardPanel } from 'react-materialize';

export interface FormErrors {
    [key: string]: string;
}

export interface IFormState {
    /*the form values*/
    firstValue:string;
    secondValue:string;
    /* used to display the type of error the validation input is returning*/
    errors: FormErrors;

    /* whether or not the user has clicked submit or not, used for rendering display text*/
    submitted?: boolean;
    answerArray:Array<any>;
}
interface IFormProps {

}



export default class MessagingPanel extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        const errors: FormErrors = {};
        const firstValue='';
        const secondValue='';
        const answerArray:Array<any>=[];
        const submitted:boolean=false;
        this.state = {
            firstValue,
            secondValue,
            errors,
            answerArray,
            submitted,
        };
    }

    public render() {
        const { submitted, errors,firstValue,secondValue,answerArray } = this.state;

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