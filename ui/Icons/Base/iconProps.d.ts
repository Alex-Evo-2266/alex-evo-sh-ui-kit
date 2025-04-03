/// <reference types="react" />
export type IconProps = {
    className?: string;
    size?: string;
    onClick?: (evien: React.MouseEvent<SVGSVGElement>) => void;
    primaryColor?: string;
    secondaryColor?: string;
    tertiaryColor?: string;
    baseColor?: string;
};
