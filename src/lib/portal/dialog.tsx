import React from "react";
import ReactDOM from "react-dom";

export interface DialogModalProps{
    children: React.ReactNode
    container?: HTMLElement | null
}
 
export const DialogModal:React.FC<DialogModalProps> = ({children, container}) => {

    if(!container)
        return <p>container not found</p>

    return ReactDOM.createPortal(
        children,
        container
    );
};
 