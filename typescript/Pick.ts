//Pick
//Pick<T, K>
//It allows you to create a new type from an existing model T by selecting some properties K of that type.

interface PickType{
    id:number;
    firstName:string;
    lastName:string;
}

const showPickType1=(args:Pick<PickType,'id'|'firstName'>)=>console.log(args);

showPickType1({id:1,firstName:'ah'})
