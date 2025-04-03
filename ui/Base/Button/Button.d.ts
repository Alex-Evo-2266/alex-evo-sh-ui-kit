import { default as React } from '../../../../../node_modules/react';

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type styleType = "outline" | "text" | "filledTotal" | "filled" | "base";
export interface IButtonProps extends BaseButtonProps {
    styleType?: styleType;
}
export declare const OutlineButton: (props: BaseButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const TextButton: (props: BaseButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const FilledTotalButton: (props: BaseButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const FilledButton: (props: BaseButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const BaseButton: (props: BaseButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const Button: ({ styleType, ...props }: IButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
