
interface IAdaptivGridItemProps {
    children?: React.ReactNode;
}
declare const GridLayoutItem: ({ children }: IAdaptivGridItemProps) => import("react/jsx-runtime").JSX.Element;
export interface IAdaptivGridProps {
    children?: React.ReactNode;
    className?: string;
    gridRowGap?: string;
    gridColumnGap?: string;
    itemMinWith?: string;
    itemMaxWith?: string;
    itemWith?: string;
    minWith?: string;
}
declare const GridLayout: ({ minWith, children, className, gridRowGap, gridColumnGap, itemMinWith, itemMaxWith, itemWith }: IAdaptivGridProps) => import("react/jsx-runtime").JSX.Element;
export default GridLayout;
export { GridLayoutItem };
