const simpleAdd=(x:number,y:number)=>x+y;
simpleAdd(5,6);
const curriedAdd=(x:number)=>(y:number)=>x+y;
const curriedAddFn=curriedAdd(4)
const resultCurriedAddValue=curriedAddFn(2);


/**
 * Parameters Obtain the parameters of a function type in a tuple
 */
const fn00=(name:string,age:number,single:boolean)=>true;
type test02=Parameters<typeof fn00> // [string,number,boolean]

type Head<T extends any[]>=T extends [any,...any[]] ? T[0] : never;