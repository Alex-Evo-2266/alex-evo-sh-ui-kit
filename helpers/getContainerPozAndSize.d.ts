export interface IOptionModalWindowCord {
    marginBottom?: number;
    marginRight?: number;
}
export interface IContainerData {
    height: number;
    width: number;
    left: number;
    top: number;
}
export declare const getContainerData: (container: HTMLElement | null) => IContainerData | undefined;
export declare const getModalWindowCord: (x: number, y: number, container: HTMLElement | null, option?: IOptionModalWindowCord) => {
    x: number;
    y: number;
};
