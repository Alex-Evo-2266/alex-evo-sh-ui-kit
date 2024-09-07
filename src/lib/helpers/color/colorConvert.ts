
export function HSLtoHSV(h:any, s?:any, l?:any):{h:number, s:number, v:number} {
  if (arguments.length === 1) {
      s = h.s, l = h.l, h = h.h;
  }
  var _h = h,
      _s,
      _v;

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  _v = (l + s) / 2;
  _s = (2 * s) / (l + s);

  return {
      h: _h,
      s: _s,
      v: _v
  };
}

export function HSVtoHSL(h:any, s?: any, v?: any) {
  if (arguments.length === 1) {
    s = h.s, v = h.v, h = h.h;
  }
  var l = (2 - s) * v / 2;

  if (l != 0) {
      if (l == 1) {
          s = 0;
      } else if (l < 0.5) {
          s = s * v / (l * 2);
      } else {
          s = s * v / (2 - l * 2);
      }
  }

  return {h, s, l};
}

export function HSVtoRGB(h:any, s?:any, v?:any) {
var r, g, b, i, f, p, q, t;
if (arguments.length === 1) {
  s = h.s, v = h.v, h = h.h;
}
i = Math.floor(h * 6);
f = h * 6 - i;
p = v * (1 - s);
q = v * (1 - f * s);
t = v * (1 - (1 - f) * s);
switch (i % 6) {
  case 0: r = v, g = t, b = p; break;
  case 1: r = q, g = v, b = p; break;
  case 2: r = p, g = v, b = t; break;
  case 3: r = p, g = q, b = v; break;
  case 4: r = t, g = p, b = v; break;
  case 5: r = v, g = p, b = q; break;
}
return {
  r: Math.round(r * 255),
  g: Math.round(g * 255),
  b: Math.round(b * 255)
};
}


function valueToHex(c:number):string {
  let hex:string = c.toString(16);
  if(hex.length === 1)
    hex = '0' + hex
  return hex
}

interface IrgbToHex{
r: number
g: number
b: number
}

export function RGBtoHEX(color:IrgbToHex) {
return(valueToHex(color.r) + valueToHex(color.g) + valueToHex(color.b));
}

export function RGBtoHSV(r:any, g?:any, b?:any):{h:number, s:number, v:number} {
  if (arguments.length === 1) {
      g = r.g, b = r.b, r = r.r;
  }
  var max = Math.max(r, g, b), min = Math.min(r, g, b),
      d = max - min,
      h,
      s = (max === 0 ? 0 : d / max),
      v = max / 255;

  switch (max) {
      case min: h = 0; break;
      case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
      case g: h = (b - r) + d * 2; h /= 6 * d; break;
      case b: h = (r - g) + d * 4; h /= 6 * d; break;
  }

  return {
      h: h as number,
      s: s,
      v: v
  };
}

export function HEXtoRGB(hex:string) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(_, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export const hexToRgb = HEXtoRGB

export const getGlassColor = (hex?:string)=>{
  if(!hex)
      return "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))"
  const rgb = hexToRgb(hex)
  if (!rgb)
      return "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))"
  return `linear-gradient(135deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1), rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0))`
}