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
