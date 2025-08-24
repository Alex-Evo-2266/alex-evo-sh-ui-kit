import "./GridLayout.scss"
import { useCallback, useEffect, useRef, useState } from 'react'

interface IAdaptivGridItemProps {
  children?: React.ReactNode
  colSpan?: number // количество колонок, которые займет элемент
}

const GridLayoutItem = ({ children, colSpan = 1 }: IAdaptivGridItemProps) => {
  return (
    <div 
      className="adaptiv-grid-item"
      style={{ gridColumnEnd: `span ${colSpan}` }}
    >
      <div className="adaptiv-grid-item-container">
        {children}
      </div>
    </div>
  )
}

export interface IAdaptivGridProps {
  children?: React.ReactNode
  className?: string
  gridRowGap?: string
  gridColumnGap?: string
  itemMinWith?: string
  itemMaxWith?: string
  itemWith?: string
  minWith?: string
}

const GridLayout = ({
  minWith,
  children,
  className = "",
  gridRowGap = "10px",
  gridColumnGap = "5px",
  itemMinWith,
  itemMaxWith,
  itemWith = "400px"
}: IAdaptivGridProps) => {
  const root = useRef<HTMLDivElement>(null)
  const [items, setItems] = useState<HTMLDivElement[]>([])
  const observerRef = useRef<ResizeObserver | null>(null)
  const rafIdRef = useRef<number | null>(null)

  const bindStyles = useCallback(() => {
    if (!root.current) return
    
    root.current.style.display = 'grid'
    root.current.style.gridRowGap = gridRowGap
    root.current.style.gridColumnGap = gridColumnGap

    const itemMin = itemMinWith ?? itemWith
    const itemMax = itemMaxWith ?? itemWith

    root.current.style.gridTemplateColumns = `repeat(auto-fill, minmax(${itemMin}, ${itemMax}))`
    root.current.style.gridAutoRows = '1px'
  }, [gridRowGap, gridColumnGap, itemMinWith, itemMaxWith, itemWith])

  const findItems = useCallback(() => {
    if (root.current) {
      const nodes = root.current.querySelectorAll<HTMLDivElement>(".adaptiv-grid-item")
      setItems(Array.from(nodes))
    }
  }, [])

  const resizeItemsNow = useCallback(() => {
    if (!root.current) return
    const styles = window.getComputedStyle(root.current)
    const rowGap = parseInt(styles.getPropertyValue('grid-row-gap')) || 0
    const rowHeight = parseInt(styles.getPropertyValue('grid-auto-rows')) || 1

    items.forEach(item => {
      const content = item.querySelector<HTMLElement>(".adaptiv-grid-item-container")
      if (content) {
        const height = content.getBoundingClientRect().height
        const span = Math.ceil((height + rowGap) / (rowHeight + rowGap))
        item.style.gridRowEnd = `span ${span}`
      }
    })
  }, [items])

  // Оборачиваем пересчет через requestAnimationFrame
  const resizeItems = useCallback(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current)
    }
    rafIdRef.current = requestAnimationFrame(() => {
      resizeItemsNow()
      rafIdRef.current = null
    })
  }, [resizeItemsNow])

  useEffect(() => {
    bindStyles()
    findItems()
  }, [bindStyles, findItems, children])

  useEffect(() => {
    // Чистим старый observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new ResizeObserver(() => resizeItems())
    const observer = observerRef.current

    items.forEach(item => observer.observe(item))

    // Первоначальный расчет
    resizeItems()

    return () => {
      observer.disconnect()
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [items, resizeItems])

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
