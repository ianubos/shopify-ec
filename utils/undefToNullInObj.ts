export default function undefToNullInObj(input: Object): Object {
    for (let key in input) {
        if (!input.hasOwnProperty(key)) continue
        if (input[key] === undefined) {
            input[key] = null
        }
    }
    return input
}