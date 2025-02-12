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
  tabContainerClassName?: string; // Дополнительные классы для контейнера вкладок
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
  tabContainerClassName = ''
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
    <div className="alex-evo-ui-kit-tabs-container">
      <div className={`alex-evo-ui-kit-tabs-scroll-buttons ${tabContainerClassName}`}>
        {showScrollButtons && (
          <button onClick={() => scroll('left')} className="alex-evo-ui-kit-scroll-button">◀</button>
        )}
        <div
          className={`alex-evo-ui-kit-tabs-header`}
          ref={tabsHeaderRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {tabs.map((tab, index) => (
            <div
              key={tab.label}
              className={`alex-evo-ui-kit-tab ${tabClassName} ${activeTab === index ? activeTabClassName : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </div>
          ))}
          <div className="alex-evo-ui-kit-indicator" ref={indicatorRef} />
        </div>
        {showScrollButtons && (
          <button onClick={() => scroll('right')} className="alex-evo-ui-kit-scroll-button">▶</button>
        )}
      </div>

      <div className="alex-evo-ui-kit-tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};
