import * as React from "react";
import { Navbar,Icon,NavItem,Row } from 'react-materialize';


export interface HeaderErrors {
    [key: string]: string;
}

export interface IHeaderState {
    /*the Header values*/
    firstValue:string;
    secondValue:string;
    /* used to display the type of error the validation input is returning*/
    errors: HeaderErrors;

    /* whether or not the user has clicked submit or not, used for rendering display text*/
    submitted?: boolean;
    answerArray:Array<any>;
}
interface IHeaderProps {

}



export class Header extends React.Component<IHeaderProps, IHeaderState> {

    constructor(props: IHeaderProps) {
        super(props);
        const errors: HeaderErrors = {};
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

    private renderAlertComponent(firstValue:string,secondValue:string,submitted:boolean|undefined,answerArray:Array<any>,errors:any) {
    }

    public render() {
        const { submitted, errors,firstValue,secondValue,answerArray } = this.state;

        return (
            <Row className="no-padding">
                    <span className="headerComponent" style={{margin:0,width:'100%',height:150,backgroundColor:'#4264ea',color:'#13dfe0'}}>
                        <span style={{marginLeft:45,color:'white'}}><b>Aider</b></span> Advisor
                        <div style={{float:'right',marginRight:75,marginTop:5,color:'white',fontSize:18}}>
                            <div style={{float:'left'}}>McEnroe <br/> <div style={{fontSize:14}}>Accurate Accounting LTD</div></div>
                            <div style={{float:'right',color:'#13dfe0'}}><Icon small>keyboard_arrow_down</Icon>
</div>
                        </div>

                    </span>

            </Row>
        );
    }
}