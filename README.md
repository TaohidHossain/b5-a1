# :link: The Keyof Type Operator in TypeScript

**Keyof** operator returns all properties of given type as a union type.
Let first understand what is union type.

A union type is a combination of two or more types.

`type stringOrnumber = string | number`

Above code defines a union type of string or number. Whenever we will use this type we can use either string or number. But TypeScript is very powerfull. Sometimes we have to constrain the program to use some specific values. We can do it using Enum keyword. But we can also make our own custom types.
:heavy_exclamation_mark: We can make our own type using type literals.

`type theme = "light" | "dark" | "default"`

The theme type will represent either light, dark or default as type.

Now let assume we have an object `type objType = {id: string, title: string}`. We want to make all properties of this object as a literal type. Ofcoues we can hard code it. But we can dynamically program this using **keyof** operator.

```
type properties = keyof objType // type properties = "id" | "title"
```

## :mag: Use Case of Keyof Operator

One possible usecase is type narrowing. For example:

```
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "John", age: 30 };

console.log(getProperty(person, "name")); // Output: "John"
console.log(getProperty(person, "age")); // Output: 30
```

Here generic type K's scope is narrowed down to the properties of generic type T's.


# :link: Type Inference in TypeScript

Type inference is a feature in typescript that determines the type of variables or functions automatically. Some the type of a variable is very straightforward to understand eg. inializing a variable with premitive types. Defining type on these cases will be very mundane and time expensive. So typescript inferes these types.
```
const x = 5; // type of x is number
const y = "hello"; // type of y is string
const obj = { name: "John", age: 30 }; // type of obj is { name: string, age: number }
```

## Benefits of Type Inference
- Faster development
- Improve readability
- Less boilerplate code

But typescript is dumb like git(Very powerfull but dumb). Sometimes typeScript will get confues and will infer a type as any. One posible situation is given below.
```
class Animal {...}
class Tiger extetends Animal {...}
class Monkey extetends Animal {...}
class Elephant extetends Animal {...}

let zoo = [new Tiger(...), new Monkey(...), new Elephant(...)]
// typeof zoo = [Tiger | Monkey | Elephant]

```
But if any super type is present in code then typeScript infers correctly

```
let zoo = let zoo = [new Animal(...), new Tiger(...), new Monkey(...), new Elephant(...)]
// typeof zoo = Animal[]
```