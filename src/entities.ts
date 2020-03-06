
export function isPrime(numberToTest:number) {
    let isPrime = true;
    if(numberToTest<=1){
        return false
    }
    for(let i=2; i<=Math.ceil(numberToTest/2); i++)
    {
        if((numberToTest%i)==0) {return false;}
    }
    return isPrime;
}

export function calculatePrimes(start:any,end:any){
    const answerArray =[];
    let iterator = start;
    while(iterator<=end)
    {
        if(isPrime(iterator)) {answerArray[answerArray.length] = iterator;}
        iterator+=1

    }
    return answerArray

}