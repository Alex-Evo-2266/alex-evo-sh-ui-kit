import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../lib';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Layout/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    scrollAmount: {
      control: { type: 'number' },
      description: 'Number of pixels to scroll when clicking scroll buttons'
    },
    activeTabIndex: {
      control: { type: 'number' },
      description: 'Controlled active tab index'
    },
    onTabClick: {
      action: 'tabClicked',
      description: 'Callback when tab is clicked'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const sampleTabs = [
  {
    label: 'Tab 1',
    content: <div style={{ padding: '20px' }}>Content for Tab 1</div>
  },
  {
    label: 'Tab 2',
    content: <div style={{ padding: '20px' }}>Content for Tab 2</div>
  },
  {
    label: 'Tab 3',
    content: <div style={{ padding: '20px' }}>Content for Tab 3</div>
  },
  {
    label: 'Longer Tab Name',
    content: <div style={{ padding: '20px' }}>Content for longer tab</div>
  },
  {
    label: 'Another Tab',
    content: <div style={{ padding: '20px' }}>More content here</div>
  }
];

export const Basic: Story = {
  args: {
    tabs: sampleTabs
  }
};

export const WithCustomClasses: Story = {
  args: {
    tabs: sampleTabs,
    tabClassName: 'custom-tab',
    activeTabClassName: 'custom-active-tab',
    tabContainerClassName: 'custom-container'
  }
};

export const Controlled: Story = {
  args: {
    tabs: sampleTabs,
    activeTabIndex: 1
  },
  render: (args) => {
    const [activeTab, setActiveTab] = React.useState(1);
    
    return (
      <div>
        <Tabs 
          {...args} 
          activeTabIndex={activeTab} 
          onTabClick={setActiveTab} 
        />
        <div style={{ marginTop: '20px' }}>
          Current active tab: {activeTab}
        </div>
      </div>
    );
  }
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      ...sampleTabs,
      {
        label: 'Tab 6',
        content: <div style={{ padding: '20px' }}>Sixth tab content</div>
      },
      {
        label: 'Tab 7',
        content: <div style={{ padding: '20px' }}>Seventh tab content</div>
      },
      {
        label: 'Tab 8',
        content: <div style={{ padding: '20px' }}>Eighth tab content</div>
      },
      {
        label: 'Tab 9',
        content: <div style={{ padding: '20px' }}>Ninth tab content</div>
      },
      {
        label: 'Tab 10',
        content: <div style={{ padding: '20px' }}>Tenth tab content</div>
      }
    ],
    scrollAmount: 100
  }
};