// Omit
// Omit<T, K>
// The Omit utility is the opposite of the Pick type. And instead of selecting elements, it will remove K properties from the type T.

interface OmitType{
    id:number;
    firstName:string;
    lastName:string;
}

const showOmitType=(args:Omit<OmitType,'firstName'|'id'>)=>console.log(args);
showOmitType({lastName:'bs'})
//showOmitType({id:1}) // / Error: Object literal may only specify known properties, and 'id' does not exist in type 'Omit<OmitType, "id">'

