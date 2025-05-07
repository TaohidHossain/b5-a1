function concatArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = []
    for (const array of arrays) {
        for(const element of array) {
            result.push(element)
        }
    }
    return result
}