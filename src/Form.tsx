import * as React from "react";

export interface FormErrors {
    [key: string]: string;
}

export interface IFormState {
    firstValue:any;
    secondValue:any;
    errors: FormErrors;
    submitted?: boolean;
    /*the prime values*/
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

            this.setState({firstValue: value, submitted: false, errors: {}})

    };
    private setSecondValue=(value:any)=>{

            this.setState({secondValue: value, submitted: false, errors: {}})

    };

    private handleSubmit =(
        e: React.FormEvent<HTMLFormElement>
    )=> {
        e.preventDefault();

    };

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
                                className="form-control"
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
                            className="form-control"
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
                </div>
            </form>
        );
    }
}