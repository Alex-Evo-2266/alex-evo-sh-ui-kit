export interface IColor {
    h: number;
    s: number;
    v: number;
}
export interface IColorRGB {
    r: number;
    g: number;
    b: number;
}
export declare function colorToCords(spectrumCanvas: HTMLCanvasElement | null, spectrumCursor: HTMLButtonElement, hueCanvas: HTMLCanvasElement | null, hueCursor: HTMLButtonElement, color: IColor): void;
export declare function initGradientShadeSpectrum(ctx: CanvasRenderingContext2D | null, canvas: HTMLCanvasElement, color?: string): void;
export declare function moveShadeSpectrum(canvas: HTMLCanvasElement | null, ctx: CanvasRenderingContext2D | null, cursor: HTMLButtonElement, onChange: (s: number, v: number) => void): void;
export declare function updateSpectrumCursor(cursor: HTMLButtonElement, x: number, y: number): void;
export declare function initGradientHueSpectrum(ctx: CanvasRenderingContext2D | null, canvas: HTMLCanvasElement | null): void;
export declare function moveHueSpectrum(ctx: CanvasRenderingContext2D | null, canvas: HTMLCanvasElement | null, hueCursor: HTMLButtonElement, onChange: (hue: number) => void): void;
export declare function updateHueCursor(hueCursor: HTMLButtonElement, y: number): void;
