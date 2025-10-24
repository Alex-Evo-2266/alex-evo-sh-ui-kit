import React from 'react';
import { ModalTemplate } from "./ModalTemplate";
import "./style/dialog-template.scss"
import { Typography } from '../../Text/Text/Typography';
import { IconButton } from '../../Base/IconButton/IconButton';
import { X } from '../../Icons';

export interface DialogProps {
    /** The content of the dialog */
    children: React.ReactNode;
    
    /** Optional header text */
    header?: string;
    
    /** Action elements (like buttons) to be displayed at the bottom */
    action?: React.ReactNode;
    
    /** Callback when dialog is closed */
    onHide?: () => void;
    
    /** Additional class names */
    className?: string;
    
    /** Custom styles */
    style?: React.CSSProperties;
    
    /** If true, removes default container styling */
    clearStyle?: boolean;
    
    /** Disables the semi-transparent backplate */
    disableBackplate?: boolean;
    
    /** Custom margin bottom for content */
    marginBottom?: number;
    
    /** Maximum width of the dialog */
    maxWidth?: number | string;
    
    /** If true, adds a close button in the header */
    showCloseButton?: boolean;
    
    /** ARIA label for accessibility */
    ariaLabel?: string;
}

/**
 * A customizable dialog component that can be used for alerts, confirmations, or custom content.
 * 
 * @example
 * <Dialog 
 *   header="Confirm Action"
 *   onHide={() => setShowDialog(false)}
 *   action={<Button onClick={handleConfirm}>Confirm</Button>}
 * >
 *   <p>Are you sure you want to perform this action?</p>
 * </Dialog>
 */
export const ModalDialogTemplate = ({
    className = '',
    children,
    header,
    action,
    onHide,
    style,
    clearStyle = false,
    disableBackplate,
    marginBottom,
    maxWidth = '560px',
    showCloseButton = false,
    ariaLabel,
}: DialogProps) => {
    const handleHide = () => {
        onHide && onHide();
    };

    const containerStyle = {
        ...style,
        marginBottom,
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    };

    return (
        <ModalTemplate 
            onHide={handleHide} 
            disableBackplate={disableBackplate}
        >
            <div 
                style={containerStyle}
                className={`${clearStyle ? "" : "dialog-template__container dialog-template_base dialog-template_color_surface-container"} dialog-template ${className}`}
                role="dialog"
                aria-modal="true"
                aria-label={ariaLabel || header}
            >
                {header && (
                    <div className="dialog-template__container__header dialog-template__container__header_color_surface-container">
                        <Typography type='heading'>{header}</Typography>
                        {
                            showCloseButton && (
                                <IconButton 
                                className="dialog-template__container__header__button dialog-template__container__header__button_color_surface-container" 
                                onClick={handleHide}
                                aria-label="Close dialog" 
                                icon={<X/>}/>
                            )
                        }
                    </div>
                )}
                <div className="dialog-template__container__content">
                    {children}
                </div>
                {action && (
                    <div className="dialog-template__container__action">
                        {action}
                    </div>
                )}
            </div>
        </ModalTemplate>
    );
};