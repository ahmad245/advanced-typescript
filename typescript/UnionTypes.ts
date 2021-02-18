//Union types allow you to have different types annotation within a given variable.
interface Product{
    name:string;
    price:number
}
interface Category{
   title:string;
   type:string;
}
type ActionProduct=Product|Category;

type UnionType=string | number ;


const showTypeUnion=(args:UnionType)=>console.log(args);
showTypeUnion('ah');
showTypeUnion(1);
