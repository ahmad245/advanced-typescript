// Required
// Required<T>
// Unlike Partial, the Required utility makes all properties of the type T required.

interface RequiredType{
    id:number;
    firstname?:string;
    lastName?:string;
}

const showRequiredType=(args:Required<RequiredType>)=>console.log(args);
showRequiredType({id:1,firstname:'ah',lastName:'bs'});
//showRequiredType({id:1}) // error
