function formatString(input: string, toUpper?: boolean): string {
    if(toUpper || typeof toUpper === 'undefined') 
        return input.toUpperCase()
    return input.toLowerCase()
}

type Item = {
    title: string
    rating: number
}
function filterByRating(items: Item[]): Item[] {
    return items.filter((item: Item) => item.rating >= 4)
}

class Vehicle {
    constructor(private make: string, private year: number) {}

    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`)
    }
}

class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year)
    }

    getModel() {
        console.log(`Model: ${this.model}`)
    }
}

function processValue(value: string | number): number {
    if (typeof value === 'string') return value.length
    return 2 * value
}

interface Product {
    name: string;
    price: number;
}
  
function getMostExpensiveProduct(products: Product[]): Product | null {    
    if (products.length === 0) return null
    return products.reduce((prev, current) => (prev.price > current.price) ? prev : current)
}