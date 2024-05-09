
export interface SearchProps {
    onSearch: (data: string) => void;
    onMenu?: () => void;
    placeholder?: string;
    autoChenge?: boolean;
}
export declare const Search: ({ onMenu, onSearch, placeholder, autoChenge }: SearchProps) => import("react/jsx-runtime").JSX.Element;
