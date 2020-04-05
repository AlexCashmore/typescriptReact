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



export default class BusinessNavigator extends React.Component<IFormProps, IFormState> {

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
                    <div style={{marginTop:60,float:'left',marginLeft:165}} className="actionButton">Add New Client</div>

                </CardPanel>
            </div>
        );
    }
}