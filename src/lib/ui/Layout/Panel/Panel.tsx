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
    shadow?:number;
    
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



    onClick?:(e:React.MouseEvent<HTMLDivElement>)=>void;
    onContextMenu?:(e:React.MouseEvent<HTMLDivElement>)=>void;
}

export const Panel: React.FC<PanelProps> = ({
    children, 
    className = '', 
    style, 
    shadow = 1,
    padded = true,
    borderRadius = 12,
    onClick,
    onContextMenu
}) => {
    const elevationClass = `container_shadow-${shadow}`;
    
    return (
        <div 
            style={{
                borderRadius: `${borderRadius}px`,
                ...style
            }}
            onClick={onClick}
            onContextMenu={onContextMenu}
            className={`alex-evo-sh-ui-kit-panel ${elevationClass} ${padded ? 'padded' : ''} ${className}`}
        >
            {children}
        </div>
    );
};