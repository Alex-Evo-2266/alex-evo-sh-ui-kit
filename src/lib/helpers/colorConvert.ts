export function hexToRgb(hex:string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

export const getGlassColor = (hex?:string)=>{
    if(!hex)
        return "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))"
    const rgb = hexToRgb(hex)
    if (!rgb)
        return "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))"
    return `linear-gradient(135deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1), rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0))`
}