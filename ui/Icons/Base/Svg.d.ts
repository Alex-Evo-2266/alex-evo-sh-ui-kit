import { IconProps } from './iconProps';

type SVGProps = IconProps & {
    children: React.ReactNode;
    dpi?: string;
};
export declare const SVG: ({ className, onClick, children, dpi, size }: SVGProps) => import("react/jsx-runtime").JSX.Element;
export declare function getColor(props: IconProps): {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
};
export {};
