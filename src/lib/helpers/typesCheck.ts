
export function isString (val:unknown): val is string{
    return typeof(val) === 'string'
}

export function isNumber (val:unknown): val is number{
    return typeof(val) === 'number'
}

export function isBoolean (val:unknown): val is boolean{
    return typeof(val) === 'boolean'
}