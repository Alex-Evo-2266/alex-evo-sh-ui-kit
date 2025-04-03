import { JsonData } from '../../../model/jsonComponentModel';

export declare enum BaseType {
    NONE = "NONE",
    ARRAY = "ARRAY",
    OBJECT = "OBJECT"
}
export interface JsonComponentProps {
    name: string;
    data: JsonData;
    onChange: (data: JsonData) => void;
    onDelete: () => void;
    readonly?: boolean;
    baseType?: BaseType;
    onlyStringValue?: boolean;
}
export declare const JsonComponent: React.FC<JsonComponentProps>;
