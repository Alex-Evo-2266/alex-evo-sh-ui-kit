import React from "react";
import ReactDOM from "react-dom";

export interface ModalPortalProps{
    children: React.ReactNode
    container?: HTMLElement | null
}
 
export const ModalPortal:React.FC<ModalPortalProps> = ({children, container}) => {

    if(!container)
        return <p>container not found</p>

    return ReactDOM.createPortal(
        children,
        container
    );
};
 