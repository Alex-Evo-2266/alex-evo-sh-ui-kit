import React, { useState, useRef, useEffect } from 'react';
import './Tabs.scss';

// Тип для вкладки
type Tab = {
  label: string;
  content: React.ReactNode;
};

// Пропсы для компонента Tabs
type TabsProps = {
  tabs: Tab[];
  scrollAmount?: number; // Количество пикселей для прокрутки
  tabClassName?: string; // Дополнительные классы для вкладок
  activeTabClassName?: string; // Класс для активной вкладки
  onTabClick?: (index: number) => void; // Событие нажатия на вкладку
  activeTabIndex?: number; // Управление активной вкладкой извне
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  scrollAmount = 150,
  tabClassName = '',
  activeTabClassName = 'active',
  onTabClick,
  activeTabIndex,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(0);
  const activeTab = activeTabIndex !== undefined ? activeTabIndex : internalActiveTab;
  const tabsHeaderRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (tabsHeaderRef.current) {
      const amount = scrollAmount || tabsHeaderRef.current.offsetWidth / 2;
      tabsHeaderRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (tabsHeaderRef.current) {
        setShowScrollButtons(
          tabsHeaderRef.current.scrollWidth > tabsHeaderRef.current.clientWidth
        );
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (tabsHeaderRef.current && indicatorRef.current) {
      const activeTabElement = tabsHeaderRef.current.children[activeTab] as HTMLElement;
      if (activeTabElement) {
        indicatorRef.current.style.width = `${activeTabElement.offsetWidth}px`;
        indicatorRef.current.style.transform = `translateX(${activeTabElement.offsetLeft}px)`;
      }
    }
  }, [activeTab]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      handleTabClick((activeTab + 1) % tabs.length);
    } else if (event.key === 'ArrowLeft') {
      handleTabClick((activeTab - 1 + tabs.length) % tabs.length);
    }
  };

  const handleTabClick = (index: number) => {
    if (activeTabIndex === undefined) {
      setInternalActiveTab(index);
    }
    if (onTabClick) {
      onTabClick(index);
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs-scroll-buttons">
        {showScrollButtons && (
          <button onClick={() => scroll('left')} className="scroll-button">◀</button>
        )}
        <div
          className="tabs-header"
          ref={tabsHeaderRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {tabs.map((tab, index) => (
            <div
              key={tab.label}
              className={`tab ${tabClassName} ${activeTab === index ? activeTabClassName : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </div>
          ))}
          <div className="indicator" ref={indicatorRef} />
        </div>
        {showScrollButtons && (
          <button onClick={() => scroll('right')} className="scroll-button">▶</button>
        )}
      </div>

      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};
