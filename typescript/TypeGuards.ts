//Type Guards typeof instanceof in 

//typeof
function showTypeTypeof(x: number | string) {
    if (typeof x === "number") {
        return `The result is ${x + x}`
    }
    throw new Error(`This operation can't be done on a ${typeof x}`)
}

showTypeTypeof("I'm not a number")
// Error: This operation can't be done on a string

showTypeTypeof(7)
    // Output: The result is 14
    //As you can see, we have a normal JavaScript conditional block that checks the type of the argument received with typeof. 
    //With that in place, you can now guard your type with this condition.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //  instanceof
    class Foo {
        bar() {
            return "Hello World"
        }
    }

class Bar {
    baz = "123"
}

function showTypeInstanceof(arg: Foo | Bar) {
    if (arg instanceof Foo) {
        console.log(arg.bar())
        return arg.bar()
    }

    throw new Error("The type is not supported")
}

showTypeInstanceof(new Foo())
// Output: Hello World

showTypeInstanceof(new Bar())
// Error: The type is not supported
//Like the previous example, this one is also a type guard that checks if the parameter received is part of the Foo class or not and handles it consequently.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//in
interface FirstType {
    x: number
}
interface SecondType {
    y: string
}

function showTypeIn(arg: FirstType | SecondType) {
    if ("x" in arg) {
        console.log(`The property ${arg.x} exists`)
        return `The property ${arg.x} exists`
    }
    throw new Error("This type is not expected")
}

showTypeIn({ x: 7 })
// Output: The property 7 exists

showTypeIn({ y: "ccc" })
// Error: This type is not expected
//The in operator allows you to check whether a property x exists or not on the object received as a parameter.


