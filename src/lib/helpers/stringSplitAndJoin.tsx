export const splitValue = (value: string, sep: string = ",") => {
    if(value === '')
        return []
    return value.split(sep).map(item=>item.trim())
}

export const joinValue = (value: string[], sep:string = ",") => {
    return value.join(sep)
}