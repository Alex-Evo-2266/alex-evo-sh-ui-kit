/// <reference types="react" />
export interface NavigationBtn {
    icon: React.ReactNode;
    onClick: (e?: React.MouseEvent<HTMLDivElement>) => void;
    text: string;
    active?: boolean;
    type: "button";
}
export interface NavigationLink {
    icon: React.ReactNode;
    to: string;
    text: string;
    type: "link";
}
export type NavigationButton = NavigationBtn | NavigationLink;
