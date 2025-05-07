type Item = {
    title: string
    rating: number
}

function filterByRating(items: Item[]): Item[] {
    return items.filter((item: Item) => item.rating >= 4)
}