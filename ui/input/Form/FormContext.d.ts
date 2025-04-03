/// <reference types="react" />
export interface IContext<T> {
    value?: T;
    changeField?: (name: string, data: any) => void;
    errors?: {
        [key: string]: string;
    };
}
export declare const formContext: import('../../../../../node_modules/react').Context<IContext<any>>;
