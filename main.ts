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

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Friday) return 'Weekend'
    return 'Weekday'
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n < 0) reject(new Error('Negative number not allowed'))
        setTimeout(() => {
            resolve(n * n)
        }, 1000)
    })
}