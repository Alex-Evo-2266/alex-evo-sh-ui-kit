/// <reference types="react" />
interface NavButtonProps {
    icon: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    title?: string;
    active?: boolean;
}
export declare const NavButton: ({ onClick, icon, title, active }: NavButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
