export declare function HSLtoHSV(h: any, s?: any, l?: any): {
    h: number;
    s: number;
    v: number;
};
export declare function HSVtoHSL(h: any, s?: any, v?: any): {
    h: any;
    s: any;
    l: number;
};
export declare function HSVtoRGB(h: any, s?: any, v?: any): {
    r: number;
    g: number;
    b: number;
};
interface IrgbToHex {
    r: number;
    g: number;
    b: number;
}
export declare function RGBtoHEX(color: IrgbToHex): string;
export declare function RGBtoHSV(r: any, g?: any, b?: any): {
    h: number;
    s: number;
    v: number;
};
export declare function HEXtoRGB(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
export declare const hexToRgb: typeof HEXtoRGB;
export declare const getGlassColor: (hex?: string) => string;
export {};
