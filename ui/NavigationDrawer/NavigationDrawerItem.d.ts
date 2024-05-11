/// <reference types="react" />
interface NavigationDrawerItemProps {
    title: string;
    icon: React.ReactNode;
    to: string;
    onClick?: () => void;
}
export declare const NavigationDrawerItem: ({ onClick, icon, title, to }: NavigationDrawerItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
