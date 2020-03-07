import * as React from "react";
import {calculatePrimes} from "./entities";
import ChartWrapper from "./ChartWrapper";

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
    primesCountInRange:Array<any>;
    primesRangeArray:Array<any>;
}
interface IFormProps {

}



export class Form extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        const errors: FormErrors = {};
        const firstValue='';
        const secondValue='';
        const answerArray:Array<any>=[];
        const primesCountInRange:Array<any>=[];
        const primesRangeArray:Array<any>=[];
        const submitted:boolean=false;
        this.state = {
            firstValue,
            secondValue,
            errors,
            answerArray,
            primesCountInRange,
            primesRangeArray,
            submitted,
        };
    }

    private setFirstValue=(value:string)=>{
        if(!value||parseInt(value)<9999||parseInt(value)>0) {

            this.setState({firstValue: value, submitted: false, errors: {}})
        }
    };
    private setSecondValue=(value:string)=>{
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
            const {primesMatrix,primesRange}=this.generatePrimeCountsInRange(firstValue,secondValue,primes);
            this.forceUpdate()
            this.setState({answerArray: primes,errors:{},submitted:true,primesCountInRange:primesMatrix,primesRangeArray:primesRange});
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
    private renderAlertComponent(firstValue:string,secondValue:string,submitted:boolean|undefined,answerArray:Array<any>,errors:any){
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
                The {this.state.answerArray.length} prime numbers between {firstValue} and {secondValue} are:

                <div className="primeWindow">{this.state.answerArray.map((i:number)=>{return <div key={i}>{i} <br /></div>})}</div>
            </div>
        }
        else if(submitted&&answerArray.length<1){
            return <div className="alert alert-info alertComponent" role="alert">
                Sorry! There aren't any prime numbers between {firstValue} and {secondValue}
            </div>
        }
    }
    generatePrimeCountsInRange(firstValue:any,secondValue:any,answerArray:any){
            const primesMatrix = [];
            const primesRange = [];
            if(parseInt(secondValue)-parseInt(firstValue)<=500) {
                for (let i = 0; i <= secondValue; i++) {
                    const primes = calculatePrimes(parseInt(firstValue), i);
                    if (i >= firstValue) {
                        primesMatrix.push({x: i, y: primes.length});
                        primesRange.push(i)
                    }
                }
            }
            return {primesMatrix, primesRange};

        }

    public render() {
        const { submitted, errors,firstValue,secondValue,answerArray,primesCountInRange,primesRangeArray } = this.state;
        const color ='#ffb489';
        const chartData=primesCountInRange.length>1?primesCountInRange:[];
        const chartLabels=primesRangeArray;

        const chartConfig = {
            labels:chartLabels,
            datasets: [{
                label: 'Primes',
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1,
                hoverBackgroundColor: color,
                hoverBorderColor: color,
                fill: false,
                showLine: true,
                hidden: false,
                data: chartData,
            }],
        };

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
                <span className="headerComponent">Prime Number Visualizer</span>
                <div className="chartContainer"> <ChartWrapper
                    type="line"
                    data={chartConfig}
                    options={{
                        animationTime: 0,
                        hoverMode: "index",
                        stacked: false,
                        legend: {
                            display: true,
                            position: "bottom",
                        },
                        scales: {

                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: `Range`,
                                },
                                display:true,
                                ticks: {
                                    display:true,
                                    stepSize: 1,
                                    suggestedMin: this.state.firstValue||0,
                                    suggestedMax: this.state.secondValue||20,
                                },
                            }],
                            yAxes:[{
                                scaleLabel: {
                                    display: true,
                                    labelString: `Prime occurance distribution`,
                                },
                            }]
                        },
                        tooltips: {
                            mode: "nearest",
                            intersect: true,
                            enabled: true,
                            callbacks: {
                                label(tooltipItems:any, data:any) {
                                    // moment("30-Jun-2016", "DD-MMM-YYYY").format("DD-MM-YYYY") <- Firefox
                                    return `${tooltipItems.yLabel} ${data.datasets[tooltipItems.datasetIndex].label} occuring in between ${data.labels[0]} and ${tooltipItems.xLabel}, `;
                                },
                            },
                        },
                    }
                    }
                /></div>
            </form>
        );
    }
}