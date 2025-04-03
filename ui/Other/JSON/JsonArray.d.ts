import { JsonDataArray } from '../../../model/jsonComponentModel';

export interface JsonArrayContainerProps {
    name: string;
    data: JsonDataArray;
    onChange: (data: JsonDataArray) => void;
    onDelete: () => void;
    readonly?: boolean;
    initComponent?: boolean;
    onlyStringValue?: boolean;
}
export declare const JsonArrayContainer: React.FC<JsonArrayContainerProps>;
