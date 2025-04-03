import { JsonData } from '../../../model/jsonComponentModel';
import { BaseType } from './JsonComponent';

export interface JsonContainerBaseProps {
    name: string;
    data?: JsonData | string[] | {
        [key: string]: string;
    };
    onChange?: (data: JsonData | string[] | {
        [key: string]: string;
    }) => void;
    onDelete?: () => void;
    readonly?: boolean;
    baseType?: BaseType;
    onlyStringValue?: boolean;
}
export type JsonContainerProps = JsonContainerBaseProps;
export declare const JsonContainer: React.FC<JsonContainerProps>;
