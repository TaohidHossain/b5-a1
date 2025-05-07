function formatString(input: string, toUpper?: boolean): string {
    if(toUpper || typeof toUpper === 'undefined') 
        return input.toUpperCase()
    return input.toLowerCase()
}
