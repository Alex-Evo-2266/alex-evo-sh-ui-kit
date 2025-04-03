/// <reference types="react" />
interface NavigationbarItemProps {
    title?: string;
    icon: React.ReactNode;
    to: string;
}
export declare const NavigationbarItem: ({ icon, title, to }: NavigationbarItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
