// Mapped types allow you to take an existing model and transform each of its properties into a new type.
//  Note that some utility types covered earlier are also mapped types.

type StringMap<T>={
    [P in keyof T]:string;
}


function showTypeMap(arg: StringMap<{ id: number; name: string }>) {
    console.log(arg)
  }
  
  //showTypeMap({ id: 1, name: "Test" })
  // Error: Type 'number' is not assignable to type 'string'.
  
  showTypeMap({ id: "testId", name: "This is a Test" })
  // Output: {id: "testId", name: "This is a Test"}
 // StringMap<> will transform whatever types that passed in into a string. That said, if we use it in the function showType(), the parameters received must be a string - otherwise, an error will be thrown by TypeScript.