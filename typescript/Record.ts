// Record
// Record<K,T>
//Record<K, T> is funny. With it you can say that *every key K should be of type T. With it you can do things like
// This utility helps you to construct a type with a set of properties K of a given type T.
//  Record is really handy when it comes to mapping the properties of a type to another one.
interface EmployeeType {
    id: number
    fullname: string
    role: string
  }
  
  // every key must be number and of type EmployessType
  type employees= Record<number, EmployeeType>;
  const obj:employees = {
    0: { id: 1, fullname: "John Doe", role: "" },
    1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
    2: { id: 3, fullname: "Sara Duckson", role: "Developer" },
  }
  
  
  // example 2

  type Person =Record<'firstName'|'lastName',string>;
  let cc:Person={firstName:'ah',lastName:'ba'};
  
  // example 3

  interface MetaInfo{
    title:string;
    url:string;
  }
  type Episodes=Record<string,MetaInfo>;
  const epis:Episodes={
    'a':{title:'ab',url:'http'},
    'b':{title:'ab',url:'http'},
  }

  // example 4
  //We can create a function that transforms all values of an object to a string representation:
declare function allToString<T>(obj:T):Record<keyof T,string>;

const person = {
  firstName: 'Stefan',
  lastName: 'Baumgartner',
  age: Number.MAX_VALUE
}
const strPerson=allToString(person);


