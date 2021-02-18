//An intersection type is a way of combining multiple types into one.
//This means that you can merge a given type A with a type B or more and get back a single type with all properties.

type LeftType={
    id:number;
    left:string;
}
type RightType={
    id:number;
    right:string;
}
type IntersectionType=LeftType & RightType;

const showType=(args:IntersectionType)=>console.log(args);

showType({id:1,left:'ah',right:'bs'})
