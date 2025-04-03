import { default as React } from '../../../../../node_modules/react';

type Tab = {
    label: string;
    content: React.ReactNode;
};
type TabsProps = {
    tabs: Tab[];
    scrollAmount?: number;
    tabClassName?: string;
    tabContainerClassName?: string;
    activeTabClassName?: string;
    onTabClick?: (index: number) => void;
    activeTabIndex?: number;
};
export declare const Tabs: React.FC<TabsProps>;
export {};
