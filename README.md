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
