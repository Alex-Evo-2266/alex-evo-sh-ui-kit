import { IconProps } from "./iconProps";
import './icon.scss'
import React from "react";

export const SVG = React.forwardRef<SVGSVGElement, IconProps>(({className, onClick, children, dpi = "24", size, ...props},ref) => (
    <svg 
        role={props.role} 
        style={{width: size, height: size}} 
        onClick={onClick} 
        className={`${className} icon-base`} 
        viewBox={`0 0 ${dpi} ${dpi}`} 
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...{...props}}
    >
        {children}
    </svg>
  ))

export function getColor(props:IconProps) {
    return {
        primaryColor: props.primaryColor ?? props.baseColor ?? "var(--On-surface-color)",
        secondaryColor: props.secondaryColor ?? props.baseColor ?? "var(--On-surface-variant-color)",
        tertiaryColor: props.tertiaryColor ?? props.baseColor ?? "var(--On-surface-color)"
    }
}