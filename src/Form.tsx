import * as React from "react";
import {calculatePrimes} from "./entities";

export interface FormErrors {
    [key: string]: string;
}

export interface IFormState {
    /*the form values*/
    firstValue:any;
    secondValue:any;
    /* used to display the type of error the validation input is returning*/
    errors: FormErrors;

    /* whether or not the user has clicked submit or not, used for rendering display text*/
    submitted?: boolean;
    answerArray:any;
}
interface IFormProps {

}



export class Form extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        const errors: FormErrors = {};
        const firstValue=null;
        const secondValue=null;
        const answerArray:any=[];
        const submitted:boolean=false;
        this.state = {
            firstValue,
            secondValue,
            errors,
            answerArray,
            submitted,
        };
    }

    private setFirstValue=(value:any)=>{
        if(!value||parseInt(value)<9999||parseInt(value)>0) {

            this.setState({firstValue: value, submitted: false, errors: {}})
        }
    };
    private setSecondValue=(value:any)=>{
        if(!value||parseInt(value)<9999||parseInt(value)>0) {
            this.setState({secondValue: value, submitted: false, errors: {}})
        }
    };


    private handleSubmit =(
        e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        const firstValue=parseInt(this.state.firstValue);
        const secondValue=parseInt(this.state.secondValue);
        if (this.validateForm(firstValue,secondValue)) {
            const primes = calculatePrimes(firstValue, secondValue);
            this.setState({answerArray: primes,errors:{},submitted:true});
        }

    };


    private validateForm(firstValue:number,secondValue:number): boolean {

        if((firstValue&&secondValue)&&(firstValue>=1&&secondValue>=1)) {
            if(firstValue>secondValue){
                this.setState({errors:{range:'Please ensure that the starting number is less than the ending number'}})
                return false;
            }

            return true;
        }
        else{
            this.setState({errors:{notNumber:'Please enter positive numbers under 10,000 in both fields'},submitted:true})
            return false
        }
    }
    private renderAlertComponent(firstValue:number,secondValue:number,submitted:any,answerArray:Array<any>,errors:any){
            if(errors.range){
                return <div className="alert alert-danger errorComponent" role="alert">
                    {errors.range}
                </div>
        }
        if(errors.notNumber){
        return <div className="alert alert-danger errorComponent" role="alert">
            {errors.notNumber}
        </div>

        }

        if(!firstValue||!secondValue){
            return  <div className="alert alert-info alertComponent" role="alert">
                Please enter two numbers between 1 and 10,000 to continue
            </div>
        }
        else if(!submitted&&!(answerArray.length>=1)){
            return <div className="alert alert-info alertComponent" role="alert">Click 'submit' to find the prime values between {firstValue} and {secondValue}</div>

        }
        else if(!submitted&&(answerArray.length>=1)){
            return <div className="alert alert-info alertComponent" role="alert">Click 'submit' to find the prime values between {firstValue} and {secondValue}</div>


        }
        else if(submitted&&answerArray.length>=1){
            return <div className="alert alert-info alertComponent" role="alert">
                The prime numbers between {firstValue} and {secondValue} are:

                <div className="primeWindow">{this.state.answerArray.map((i:number)=>{return <div key={i}>{i} <br /></div>})}</div>
            </div>
        }
        else if(submitted&&answerArray.length<1){
            return <div className="alert alert-info alertComponent" role="alert">
                Sorry! There aren't any prime numbers between {firstValue} and {secondValue}
            </div>
        }
    }

    public render() {
        const { submitted, errors,firstValue,secondValue,answerArray } = this.state;

        /*bootstrap css classes overridden with SASS */
        return (
            <form onSubmit={this.handleSubmit} noValidate={true}>
                <div className="container">

                    <div className="alert alert-info alertComponent" role="alert">
                        Enter a range of values to calculate the prime numbers between two numbers
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstValue">First Value</label>
                            <input
                                id={"firstValue"}
                                type="number"
                                min="0"
                                max="999"
                                value={this.state.firstValue}
                                onChange={(e)=>{this.setFirstValue(e.target.value)}}
                                className="form-control numberInputComponent"
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="secondValue">Second Value</label>
                        <input
                            id={"secondValue"}
                            type="number"
                            min="1"
                            max="999"
                            value={this.state.secondValue}
                            onChange={(e)=>{this.setSecondValue(e.target.value)}}
                            className="form-control numberInputComponent"
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    </div>
                    {this.renderAlertComponent(firstValue,secondValue,submitted,answerArray,errors)}

                </div>
            </form>
        );
    }
}