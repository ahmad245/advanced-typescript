//Type predicates in TypeScript help you narrowing down your types based on conditionals. They’re similar to type guards, but work on functions. 
//They way the work is, if a function returns true, change the type of the paramter to something more useful.

const isString=(x) =>{
    return typeof x === 'string';
}

//Use the isString function inside another function:
const toUpperCase=(x)=>{
    if(isString(x)){
        x.toUpperCase() // x is still of type unknown , Property 'toUpperCase' does not exist on type 'unknown'
    }
}

//let's tell TypeScript explicitly that if isString evaluates to true , the type of the parameter is a string
const isString2=(x):x is string=>{
    return typeof x === 'string';
}

const toUpperCase2=(x:unknown)=>{
    if(isString2(x)){
        x.toLowerCase()
    }
}
//we validate that count is a number between 1 and 6. 
// but the problem is in switch we can put case 7 , case 8 , case ....
const pipsAreValid=(pips:number)=>pips===1||pips===2||pips===3||pips===4||pips===5||pips===6;
const evalThrow=(count:number)=>{
    if(pipsAreValid(count)){
        switch (count) {
            case 1:
            case 2:    
            case 3:    
            case 4:    
            case 5:    
                console.log('Not today');
                
                break;
            case 6:
                console.log('win!');
            case 7 :
               console.log('This does not work');
                break;         
        }
    }
}

// the soulion 
type Dice=1|2|3|4|5|6;
const pipsAreValid2=(pips:number) : pips is Dice=>pips===1||pips===2||pips===3||pips===4||pips===5||pips===6;
const evalThrow2=(count:number)=>{
    if(pipsAreValid2(count)){
        switch (count) {
            case 1:
            case 2:    
            case 3:    
            case 4:    
            case 5:    
                console.log('Not today');
                
                break;
            case 6:
                console.log('win!');
            // case 9 : // error
            //    console.log('This does not work');
                break;         
        }
    }
}