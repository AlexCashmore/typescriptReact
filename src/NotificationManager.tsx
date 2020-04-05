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



export default class NotificationManager extends React.Component<IFormProps, IFormState> {

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
            <CardPanel style={{height:600,backgroundColor:'#eeeeee',width:'100%'}} className="no-padding">
                <div style={{height:60}}>
                    <div style={{
                        width:'50%',float:'left',backgroundColor:'#eeeeee',height:60,fontSize:18,color:'#8e8e8e'}}>
                        <div style={{marginTop:15}}>
                            <span style={{float:'left',marginLeft:30,fontWeight:600}}>Notifications</span>
                            <div style={{float:'right',marginRight:50,fontSize:14}} className="circleBase standard orange"><span className="circleText">4</span></div>
                        </div>
                    </div>
                    <div style={{width:'50%',float:'right',backgroundColor:'#eeeeee',borderLeft:'1px solid grey',height:60,
                        fontSize:18,color:'#8e8e8e'}}>
                        <div style={{marginTop:15}}>
                            <span style={{marginLeft:30,fontWeight:600}}>Active Apps</span>
                            <div style={{float:'right',marginRight:50,fontSize:14}} className="circleBase standard"><span className="circleText">3</span></div>
                        </div>
                    </div>
                </div>


            </CardPanel>
        );
    }
}