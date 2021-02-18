//This utility type will transform all properties of the type T in order to make them not reassignable with a new value.
interface ReadonlyType {
    id: number
    name: string
  }
  
  function showTypeReadonly(args: Readonly<ReadonlyType>) {
  //  args.id = 4 //  Error: Cannot assign to 'id' because it is a read-only property
    console.log(args)
  }
  //Besides that, you can also use the keyword readonly in front of a property to make it not reassignable.
  interface ReadonlyType2 {
    readonly id: number
    name: string
  }