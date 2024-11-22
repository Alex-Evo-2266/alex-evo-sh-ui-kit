import { IconProps } from "./iconProps";
import './icon.scss'

type SVGProps = IconProps & {
    children: React.ReactNode
    dpi?: string
}

export const SVG = ({className, onClick, children, dpi = "24", size}:SVGProps) => (
    <svg style={{width: size, height: size}} onClick={onClick} className={`${className} icon-base`} viewBox={`0 0 ${dpi} ${dpi}`} xmlns="http://www.w3.org/2000/svg">
        {children}
    </svg>
  );

export function getColor(props:IconProps) {
    return {
        primaryColor: props.primaryColor ?? props.baseColor ?? "var(--On-surface-color)",
        secondaryColor: props.secondaryColor ?? props.baseColor ?? "var(--On-surface-color)",
        tertiaryColor: props.tertiaryColor ?? props.baseColor ?? "var(--On-surface-color)"
    }
}