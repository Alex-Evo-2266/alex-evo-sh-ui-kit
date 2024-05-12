export type JsonFormat = JsonFormatBaseTypes | JsonFormatArray | JsonFormatObject

export type JsonFormatBaseTypes = "string" | "number" | "boolean"

export type JsonFormatArray = JsonFormat[]

export interface JsonFormatObject{
    [key:string]:JsonFormat
}


export type JsonData = JsonDataBaseTypes | JsonDataArray | JsonDataObject

export type JsonDataBaseTypes = string | number | boolean

export type JsonDataArray = JsonData[]

export interface JsonDataObject{
    [key:string]:JsonData
}