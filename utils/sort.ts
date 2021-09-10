
export function sortByAlphabet(items: string[]): string[] {
    return items.sort((a, b) => a.localeCompare(b))
}
