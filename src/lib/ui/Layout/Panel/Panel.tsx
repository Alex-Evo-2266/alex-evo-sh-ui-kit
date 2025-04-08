import './Panel.scss';

interface PanelProps {
    /**
     * Содержимое панели
     */
    children?: React.ReactNode;
    
    /**
     * Дополнительные CSS-классы
     */
    className?: string;
    
    /**
     * Инлайн стили
     */
    style?: React.CSSProperties;
    
    /**
     * Уровень тени (0-24)
     * @default 1
     */
    elevation?: number;
    
    /**
     * Имеет ли панель внутренние отступы
     * @default true
     */
    padded?: boolean;
    
    /**
     * Закругление углов (в пикселях)
     * @default 12
     */
    borderRadius?: number;
}

export const Panel: React.FC<PanelProps> = ({
    children, 
    className = '', 
    style, 
    elevation = 1,
    padded = true,
    borderRadius = 12
}) => {
    const elevationClass = `elevation-${Math.min(24, Math.max(0, elevation))}`;
    
    return (
        <div 
            style={{
                borderRadius: `${borderRadius}px`,
                ...style
            }}
            className={`alex-evo-sh-ui-kit-panel ${elevationClass} ${padded ? 'padded' : ''} ${className}`}
        >
            {children}
        </div>
    );
};