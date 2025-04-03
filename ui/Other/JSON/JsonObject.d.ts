import { JsonDataObject } from '../../../model/jsonComponentModel';

export interface JsonObjectContainerProps {
    name: string;
    data: JsonDataObject;
    onChange: (data: JsonDataObject) => void;
    onDelete: () => void;
    readonly?: boolean;
    initComponent?: boolean;
    onlyStringValue?: boolean;
}
export declare const JsonObjectContainer: React.FC<JsonObjectContainerProps>;
