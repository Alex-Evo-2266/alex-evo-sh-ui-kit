import { JsonDataBaseTypes } from '../../../model/jsonComponentModel';

export interface JsonBaseContainerProps {
    name: string;
    data?: JsonDataBaseTypes;
    onChange: (data: JsonDataBaseTypes) => void;
    onDelete: () => void;
    readonly?: boolean;
}
export declare const JsonBaseContainer: React.FC<JsonBaseContainerProps>;
