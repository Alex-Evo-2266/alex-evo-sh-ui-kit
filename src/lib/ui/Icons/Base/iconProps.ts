export type IconProps = React.SVGAttributes<SVGSVGElement> & {
    className?: string
    size?: string
    onClick?: (evien:React.MouseEvent<SVGSVGElement>)=>void
    primaryColor?: string
    secondaryColor?: string
    tertiaryColor?: string
    baseColor?: string
    dpi?: string
}
