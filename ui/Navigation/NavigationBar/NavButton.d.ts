/// <reference types="react" />
interface NavButtonProps {
    icon: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    title?: string;
}
export declare const NavButton: ({ onClick, icon, title }: NavButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
