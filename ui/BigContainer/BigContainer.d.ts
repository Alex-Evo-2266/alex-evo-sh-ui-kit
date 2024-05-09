import { IPoint } from '../../model/point';

export interface BigContainerProps {
    children?: React.ReactNode;
    className?: string;
    height?: string;
    width?: string;
    id?: string;
    pozMove?: IPoint;
}
export declare const BigContainer: ({ children, className, id, height, width, pozMove }: BigContainerProps) => import("react/jsx-runtime").JSX.Element;
