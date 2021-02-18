// Partial<T>
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
// Partial allows you to make all properties of the type T optional. It will add a ? mark next to every field.
interface PartialType{
    id:number;
    firstName:string;
    lastName:string;
}

const showTypePartial=(args:Partial<PartialType>)=>console.log(args);
showTypePartial({})
showTypePartial({id:1})
showTypePartial({id:1,firstName:'ah'})
showTypePartial({id:1,firstName:'ah',lastName:''})


// rebuild Patrial
type PartialCustom<T>={
  [P in keyof T]?:T[P]
}

  
