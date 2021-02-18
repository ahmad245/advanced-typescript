// Extract
// Extract<T, U>
// Extract allows you to construct a type by picking properties that are present in two different types. 
//The utility will extract from T all properties that are assignable to U.

interface FirstType{
    id:number;
    firstName:string;
    lastName:string;
}

interface SecondType{
    id:number;
    address:string;
    city:string;
}
type ExtractType=Extract<keyof FirstType,keyof SecondType> // "id"
