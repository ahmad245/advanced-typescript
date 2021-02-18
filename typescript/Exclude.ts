// Exclude
// Unlike Extract, the Exclude utility will construct a type by excluding properties that are already present in two different types.
// It excludes from T all fields that are assignable to U.

interface FirstType {
    id: number
    firstName: string
    lastName: string
  }
  
  interface SecondType {
    id: number
    address: string
    city: string
  }
  type ExcludeType = Exclude<keyof FirstType, keyof SecondType>

// Output; "firstName" | "lastName"