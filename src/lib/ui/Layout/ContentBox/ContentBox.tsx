import { useEffect, useMemo, useRef, useState } from 'react';
import './ContentBox.scss';
import { getContainerData } from '../../../helpers/getContainerPozAndSize';
import { Typography } from '../../Text/Text/Typography';

export interface ActionContentBox {
    /** Icon element to display as action */
    icon: React.ReactNode;
    /** Callback when action is clicked */
    onClick: () => void;
    /** Optional aria-label for accessibility */
    ariaLabel?: string;
}

export interface ContentBoxProps {
    /** Content to be displayed inside the box */
    children: React.ReactNode;
    /** Label text displayed in the header */
    label: string;
    /** Additional className for custom styling */
    className?: string;
    /** Inline styles for the component */
    style?: React.CSSProperties;
    /** Whether to show border around the component */
    border?: boolean;
    /** Whether the content can be toggled (show/hide) */
    collapsible?: boolean;
    /** Initial visibility state for collapsible content */
    defaultVisible?: boolean;
    /** Action button configuration */
    action?: ActionContentBox;
    /** Callback when visibility changes (for controlled usage) */
    onVisibilityChange?: (visible: boolean) => void;
}

const PADDING_BOTTOM = 10;
const SPEED_K = 0.002;

/**
 * A versatile content container with optional collapsible functionality and actions.
 * 
 * Features:
 * - Customizable border and styling
 * - Smooth collapsible animation with dynamic timing
 * - Optional action button
 * - Accessible interactions
 */
export const ContentBox = ({
    children,
    label,
    className = '',
    style,
    border = false,
    collapsible = false,
    defaultVisible = false,
    action,
    onVisibilityChange
}: ContentBoxProps) => {
    const [contentVisible, setVisible] = useState<boolean>(collapsible ? defaultVisible : true);
    const container = useRef<HTMLDivElement>(null);

    const getMaxHeight = (container?: HTMLElement | null) => {
        if (!container) return;
        const containerSize = getContainerData(container);
        if (!containerSize) return;
        return containerSize.height + PADDING_BOTTOM;
    };

    const getTransitionDuration = (container?: HTMLElement | null) => {
        const height = getMaxHeight(container);
        if (!height) return 0.4;
        return Math.min(height * SPEED_K, 1);
    };

    const toggleVisibility = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as Element;
        const root = element.closest('.action-btn');
        
        // Don't toggle if clicking on action button
        if (root || element.classList.contains('action-btn')) return;
        
        if (collapsible) {
            const newVisible = !contentVisible;
            setVisible(newVisible);
            onVisibilityChange?.(newVisible);
        }
    };

    // Ensure content is visible if not collapsible
    useEffect(() => {
        if (!collapsible && !contentVisible) {
            setVisible(true);
            onVisibilityChange?.(true);
        }
    }, [collapsible, contentVisible, onVisibilityChange]);

    const transitionDuration = useMemo(
        () => getTransitionDuration(container.current),
        [container.current]
    );

    return (
        <div
            style={style}
            className={`content-box ${border ? "border" : ""} ${
                contentVisible ? "active" : ""
            } ${className}`}
            aria-expanded={collapsible ? contentVisible : undefined}
        >
            <div 
                className='content-box-label' 
                onClick={toggleVisibility}
                role={collapsible ? "button" : undefined}
                aria-label={collapsible ? `${label} - click to ${contentVisible ? 'collapse' : 'expand'}` : label}
                tabIndex={collapsible ? 0 : undefined}
                onKeyDown={(e) => {
                    if (collapsible && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        toggleVisibility(e as any);
                    }
                }}
            >
                <Typography type='title'>{label}</Typography>
                <div className='content-box-action-container'>
                    {action ? (
                        <div 
                            className='content-box-status-container action-btn' 
                            onClick={action.onClick}
                            aria-label={action.ariaLabel || "Action"}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    action.onClick();
                                }
                            }}
                        >
                            {action.icon}
                        </div>
                    ) : collapsible ? (
                        <div className='content-box-status-container'>
                            <span 
                                className={`content-box-status ${contentVisible ? "active" : ""}`}
                                aria-hidden="true"
                            ></span>
                        </div>
                    ) : null}
                </div>
            </div>
            <div
                className='content-box-container-curtain'
                style={{
                    transition: `${transitionDuration}s ease-in-out`,
                    height: contentVisible ? "auto" : "0px"
                }}
                aria-hidden={!contentVisible}
            >
                <div className='content-box-container' ref={container}>
                    {children}
                </div>
            </div>
        </div>
    );
};