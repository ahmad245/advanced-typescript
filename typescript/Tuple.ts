//Tuple types
//Tuple types allow you to express an array where the type of a fixed number of elements is known. Let’s see an example:
type tuple=['a',number,string[]];

const test0:tuple=['a',5,['ee']];

const test01=(...args:tuple)=>console.log(args);
test01('a',1,['aa']);

////////////////

