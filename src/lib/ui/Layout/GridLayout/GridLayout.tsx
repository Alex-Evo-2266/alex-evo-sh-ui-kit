import "./GridLayout.scss"
import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Props для элемента сетки
 */
interface IAdaptivGridItemProps {
  children?: React.ReactNode
}

/**
 * Элемент сетки
 */
const GridLayoutItem = ({ children }: IAdaptivGridItemProps) => {
  return (
    <div className={`adaptiv-grid-item`}>
      <div className="adaptiv-grid-item-container">
        {children}
      </div>
    </div>
  )
}

/**
 * Основные props для сетки
 */
export interface IAdaptivGridProps {
  children?: React.ReactNode
  className?: string
  gridRowGap?: string  // Отступ между строками
  gridColumnGap?: string  // Отступ между колонками
  itemMinWith?: string  // Минимальная ширина элемента
  itemMaxWith?: string  // Максимальная ширина элемента
  itemWith?: string  // Фиксированная ширина элемента (если min/max не указаны)
  minWith?: string  // Минимальная ширина всей сетки
}

/**
 * Адаптивная CSS Grid Layout с автоматическим расчетом высоты строк
 * 
 * Особенности:
 * - Автоматическое распределение элементов по доступному пространству
 * - Динамический расчет высоты строк на основе содержимого
 * - Поддержка отзывчивого дизайна
 * - Оптимизированная перерисовка при изменении размеров
 */
const GridLayout = ({
  minWith,
  children,
  className,
  gridRowGap = "10px",
  gridColumnGap = "5px",
  itemMinWith,
  itemMaxWith,
  itemWith = "400px"
}: IAdaptivGridProps) => {
  const root = useRef<HTMLDivElement>(null)
  const [items, setItems] = useState<HTMLDivElement[]>([])

  // Установка базовых стилей для сетки
  const bindStyles = useCallback(() => {
    if (!root.current) return;
    
    root.current.style.display = 'grid';
    root.current.style.gridRowGap = gridRowGap;
    root.current.style.gridColumnGap = gridColumnGap;
    
    // Определение ширины элементов
    let itemMinWith2: string = itemMinWith ?? itemWith
    let itemMaxWith2: string = itemMaxWith ?? itemWith
    
    root.current.style.gridTemplateColumns = `repeat(auto-fill, minmax(${itemMinWith2}, ${itemMaxWith2}))`;
    root.current.style.gridAutoRows = '0';
    
    // Сброс стилей для элементов
    items.forEach(item => {
      item.style.gridAutoRows = '0';
      item.style.gridAutoColumns = '0';
    });
  }, [root.current, gridRowGap, gridColumnGap, itemMinWith, itemMaxWith, itemWith])

  // Пересчет высоты строк при изменении размеров
  const resizeItems = useCallback(() => {
    if (!root.current) return
    
    const rowGap = parseInt(window.getComputedStyle(root.current).getPropertyValue('grid-row-gap'))
    const rowHeight = parseInt(window.getComputedStyle(root.current).getPropertyValue('grid-auto-rows'))
    
    items.forEach(item => {
      let rowSpan = 0;
      const itemContent = item.querySelector(".adaptiv-grid-item-container");
      
      if (itemContent) {
        const contentHeight = itemContent.getBoundingClientRect().height
        rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap))
      }
      
      item.style.gridRowEnd = 'span ' + rowSpan;
    });
  }, [items, root.current])

  // Поиск всех элементов сетки
  const findItems = useCallback(() => {
    if (root.current) {
      const children = root.current.querySelectorAll(".adaptiv-grid-item")
      setItems(Array.prototype.slice.call(children, 0))
    }
  }, [root.current, children])

  // Эффекты
  useEffect(() => findItems(), [findItems])
  useEffect(() => bindStyles(), [bindStyles])
  useEffect(() => resizeItems(), [resizeItems, children])

  // Обработчик изменения размеров окна
  useEffect(() => {
    window.addEventListener('resize', resizeItems)
    return () => window.removeEventListener('resize', resizeItems)
  }, [resizeItems])

  return (
    <div 
      style={{ minWidth: minWith }} 
      ref={root} 
      className={`adaptiv-grid-layout ${className}`}
    >
      {children}
    </div>
  )
}

export default GridLayout
export { GridLayoutItem }