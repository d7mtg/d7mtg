export const stripExtension = str => {
    const dot = str.lastIndexOf('.')
    if (dot >= 0)
        return str.substring(0, dot)
    return str
}