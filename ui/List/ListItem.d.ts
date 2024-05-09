
export interface ListItemContainerProps {
    icon?: React.ReactNode;
    header?: string;
    text?: string;
    control?: React.ReactNode;
    value?: string;
    onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
    hovered?: boolean;
    className?: string;
}
export declare const ListItem: ({ icon, control, text, header, value, onClick, hovered, className }: ListItemContainerProps) => import("react/jsx-runtime").JSX.Element;
