import { HEXtoRGB } from "./colorConvert";



export function interpolateColor(factor: number, colorRange: string, startColor?: string){
    if (factor === 0) return startColor ?? "#e0e0e0"
    if (factor === 1) return colorRange;

    const color = startColor? HEXtoRGB(startColor): null

    const r1 = color?.r ?? 224, g1 = color?.g ?? 224, b1 = color?.b ?? 224;
    const r2 = parseInt(colorRange.substring(1, 3), 16);
    const g2 = parseInt(colorRange.substring(3, 5), 16);
    const b2 = parseInt(colorRange.substring(5, 7), 16);

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    return `rgb(${r}, ${g}, ${b})`;
}
