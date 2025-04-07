import React from "react";
import './ColumnLayout.scss';

export interface IColumnElement {
  /** Номер колонки, в которую будет помещен элемент (начиная с 0) */
  indexCol: number;
  /** React-нода для отображения в колонке */
  node: React.ReactNode;
}

export interface ColumnLayoutProps {
  /** Дополнительные классы для контейнера */
  className?: string;
  /** Дополнительные классы для колонок */
  classNameColumn?: string;
  /** Стили для контейнера */
  style?: React.CSSProperties;
  /** Массив элементов для отображения в колонках */
  items: IColumnElement[];
  /** Количество колонок */
  countColumn: number;
  /** Отступ между колонками в пикселях */
  gap?: number;
  /** Обработчик клика по колонке */
  onClickColl?: (index: number, e: React.MouseEvent<HTMLDivElement>) => void;
  /** Обработчик контекстного меню */
  onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Обработчик клика по контейнеру */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Минимальная ширина колонки (CSS значение) */
  minColumnWidth?: string;
}

/**
 * Компонент для отображения контента в нескольких колонках с возможностью гибкой настройки.
 * Поддерживает различное количество элементов в каждой колонке и обработку событий.
 */
export const ColumnLayout: React.FC<ColumnLayoutProps> = ({
  onClick,
  onContextMenu,
  gap,
  className,
  style,
  countColumn,
  items,
  onClickColl,
  classNameColumn,
  minColumnWidth = 'auto',
}) => {
  const getColumns = React.useCallback((count: number, items: IColumnElement[]) => {
    // Создаем массив колонок
    const columns = Array.from({ length: count }, () => [] as React.ReactNode[]);
    
    // Распределяем элементы по колонкам
    items.forEach((item) => {
      if (item.indexCol >= columns.length) {
        console.error(`Invalid column index. indexCol = ${item.indexCol}, column count = ${count}`);
        return;
      }
      columns[item.indexCol].push(item.node);
    });
    
    return columns;
  }, []);

  const columns = React.useMemo(() => getColumns(countColumn, items), [getColumns, countColumn, items]);

  const handleColumnClick = React.useCallback((index: number, e: React.MouseEvent<HTMLDivElement>) => {
    onClickColl?.(index, e);
  }, [onClickColl]);

  return (
    <div 
      onClick={onClick} 
      onContextMenu={onContextMenu} 
      style={{
        ...style, 
        gap: gap !== undefined ? `${gap}px` : "5px",
        gridTemplateColumns: `repeat(${countColumn}, minmax(${minColumnWidth}, 1fr))`,
      }} 
      className={`${className} alex-evo-sh-ui-kit-column-layout`}
      data-testid="column-layout-container"
    >
      {columns.map((columnItems, index) => (
        <div 
          onClick={(e) => handleColumnClick(index, e)} 
          key={`column-${index}`} 
          className={`${classNameColumn} alex-evo-sh-ui-kit-column-layout-coll`}
          data-testid={`column-${index}`}
        >
          {columnItems.map((item, itemIndex) => (
            <div key={`item-${index}-${itemIndex}`} className="alex-evo-sh-ui-kit-column-layout-item">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};