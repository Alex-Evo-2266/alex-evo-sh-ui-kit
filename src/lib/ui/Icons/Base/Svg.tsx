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