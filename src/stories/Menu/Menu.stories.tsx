import type { Meta, StoryObj } from '@storybook/react';
import { GearIcon, LinkIcon, Menu, ScreenSize, Trash } from '../../lib';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    screensize: {
      control: 'select',
      options: [ScreenSize.STANDART, ScreenSize.MOBILE],
    },
    visible: { control: 'boolean' },
    x: { control: 'number', if: { arg: 'screensize', eq: ScreenSize.STANDART } },
    y: { control: 'number', if: { arg: 'screensize', eq: ScreenSize.STANDART } },
    width: { control: 'text' },
    autoHide: { control: 'boolean' },
  },
  args:{
    container: document.body,
    onHide: ()=>console.log("exit")
  }
};

export default meta;

type Story = StoryObj<typeof Menu>;

// Base template for all stories
const Template: Story = {
  render: (args) => <Menu {...args} />,
  args: {
    visible: true,
    blocks: [
      {
        items: [
          { title: 'Edit', icon: <GearIcon />, onClick: () => console.log('Edit clicked') },
          { title: 'Delete', icon: <Trash />, onClick: () => console.log('Delete clicked') },
        ],
      },
      {
        items: [
          { 
            title: 'Share', 
            icon: <LinkIcon />,
            subItems: [
              { title: 'Email', onClick: () => console.log('Email clicked') },
              { title: 'Social media', onClick: () => console.log('Social clicked') },
            ]
          },
          { 
            title: 'Download', 
            icon: <LinkIcon />,
            activated: true,
            onClick: () => console.log('Download clicked')
          },
        ],
      },
    ],
  },
};

// Desktop Stories
export const DesktopContextMenu: Story = {
  ...Template,
  args: {
    ...Template.args,
    screensize: ScreenSize.STANDART,
    x: 200,
    y: 100,
    width: 240,
  },
  parameters: {
    docs: {
      description: {
        story: 'A context menu positioned at specific coordinates on desktop. Shows icons and submenus.',
      },
    },
  },
};

export const DesktopWideMenu: Story = {
  ...Template,
  args: {
    ...Template.args,
    screensize: ScreenSize.STANDART,
    x: 100,
    y: 100,
    width: 320,
  },
};

export const DesktopAutoHideMenu: Story = {
  ...Template,
  args: {
    ...Template.args,
    screensize: ScreenSize.STANDART,
    x: 150,
    y: 150,
    autoHide: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu that automatically hides when an item is selected.',
      },
    },
  },
};

// Mobile Stories
export const MobileBottomSheetMenu: Story = {
  ...Template,
  args: {
    ...Template.args,
    screensize: ScreenSize.MOBILE,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile-optimized menu that appears as a bottom sheet. Automatically adapts layout for touch interactions.',
      },
    },
  },
};

export const MobileWithLongList: Story = {
  ...Template,
  args: {
    ...Template.args,
    screensize: ScreenSize.MOBILE,
    blocks: [
      {
        items: Array(10).fill(0).map((_, i) => ({
          title: `Item ${i + 1}`,
          onClick: () => console.log(`Item ${i + 1} clicked`)
        })),
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Edge Cases
export const EmptyMenu: Story = {
  ...Template,
  args: {
    ...Template.args,
    blocks: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu with no items. Should render nothing or empty state.',
      },
    },
  },
};

export const SingleItemMenu: Story = {
  ...Template,
  args: {
    ...Template.args,
    blocks: [
      {
        items: [
          { title: 'Only Item', onClick: () => console.log('Only item clicked') }
        ],
      },
    ],
  },
};

export const WithDisabledItems: Story = {
  ...Template,
  args: {
    ...Template.args,
    blocks: [
      {
        items: [
          { title: 'Enabled Item', onClick: () => console.log('Enabled clicked') },
          { title: 'Disabled Item', disabled: true, onClick: () => console.log('Enabled clicked')},
          { title: 'Disabled Sub Item', subItems:[
            {
                title: "test sub item 1"
            },
            {
                title: "test sub item 2",
                disabled: true
            }
            ]},
        ],
      },
    ],
  },
};

// Interactive Story
export const InteractiveMenu: Story = {
  ...Template,
  args: {
    ...Template.args,
    screensize: ScreenSize.STANDART,
    x: 200,
    y: 100,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive menu where you can control props from Storybook controls panel.',
      },
    },
  },
};