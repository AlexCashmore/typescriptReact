import * as React from "react";

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



export class BusinessNavigator extends React.Component<IFormProps, IFormState> {

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

    private renderAlertComponent(firstValue:string,secondValue:string,submitted:boolean|undefined,answerArray:Array<any>,errors:any) {
    }

    public render() {
        const { submitted, errors,firstValue,secondValue,answerArray } = this.state;

        return (
                <div className="container">

                    Example

                </div>
        );
    }
}