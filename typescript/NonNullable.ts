// NonNullable
// NonNullable<T>
// It allows you to remove null and undefined from the type T.
type NullAbleType = string | number | null | undefined;

const showNonNullAbleType = (args: NonNullable<NullAbleType>) => console.log(args);


showNonNullAbleType(1)
showNonNullAbleType('ah')
//showNonNullAbleType(null) // Error

//By the way, if you add the --strictNullChecks flag to the tsconfig file, TypeScript will apply non-nullability rules.