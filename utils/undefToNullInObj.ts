/** 
 * Transform undefined entries to null in an object. 
 * Next.js doesn't accept undefined in the object entries. 
*/

export default function undefToNullInObj(input: Object): Object {
    for (let key in input) {
        if (!input.hasOwnProperty(key)) continue
        if (input[key] === undefined) {
            input[key] = null
        }
    }
    return input
}