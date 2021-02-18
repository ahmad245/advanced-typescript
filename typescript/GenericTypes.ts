//A generic type is a way of reusing part of a given type. It helps to capture the type T passed in as a parameter
const showTypeGeneric = <T>(args: T) => console.log(args);
showTypeGeneric<string>('ah');
showTypeGeneric<number>(1);
showTypeGeneric('generic')


interface GenericType<T> {
    id: number;
    name: T;
}

const showTypeGenericInterface1 = (args: GenericType<string>) => console.log(args);
const showTypeGenericInterface2 = (args: GenericType<number>) => console.log(args);
showTypeGenericInterface1({ id: 1, name: 'ah' })
showTypeGenericInterface2({ id: 1, name: 2 })

interface GenerricTowType<T, U> {
    id: T;
    name: U;
}

const showTypeGenericIterfaceTwoType1=(args:GenerricTowType<number,string>)=>console.log(args);
const showTypeGenericIterfaceTwoType2=(args:GenerricTowType<number,string[]>)=>console.log(args);
showTypeGenericIterfaceTwoType1({id:1,name:'ah'});
showTypeGenericIterfaceTwoType2({id:1,name:['ah','bs']});
