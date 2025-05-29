import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card, GearIcon, IconButton, Plus, ScreenSize, Typography } from '../../lib';
import img from '../img/fon-base.jpg'
import { fn } from '@storybook/test';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'filled', 'outlined'],
    },
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
    loading: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    header: 'Card Title',
    text: 'This is a card component with customizable content.',
    rootApp: '#storybook-root',
    onClick: d=>console.log("card", d)
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    elevation: 6,
  },
};

export const Elevated: Story = {
  args: {
    ...Default.args,
    variant: 'elevated',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const WithImage: Story = {
  args: {
    imgSrc: img,
    alt: 'Random image',
  },
};

export const WithActions: Story = {
  args: {
    action: (
      <>
        <Button styleType='text'>Cancel</Button>
        <Button>OK</Button>
      </>
    ),
  },
};

export const WithIconButton: Story = {
  args: {
    iconButtonCell: <IconButton icon={<Plus/>} />,
  },
};

export const LoadingState: Story = {
  args: {
    loading: true,
  },
};

export const LoadingStateAndImage: Story = {
  args: {
    loading: true,
    imgSrc: img
  },
};


export const CardIconButton: Story = {
  args: {
    loading: true,
    imgSrc: img,
    iconButtonCell: <IconButton icon={<GearIcon/>} onClick={d=>console.log("btn", d)}/>
  },
};

export const ComplexExample: Story = {
  render: () => (
    <Card
      variant="elevated"
      header="Project Dashboard"
      subhead="Analytics Overview"
      imgSrc={img}
      alt="Dashboard"
      action={
        <Button>View Details</Button>
      }
      iconButtonCell={<IconButton icon={<GearIcon/>} />}
    >
      <Typography type="body">
        Last updated: {new Date().toLocaleDateString()}
      </Typography>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <div>
          <Typography type="title-2">1,234</Typography>
          <Typography type="small">Visits</Typography>
        </div>
        <div>
          <Typography type="title-2">567</Typography>
          <Typography type="small">Signups</Typography>
        </div>
      </div>
    </Card>
  ),
};

export const ResponsiveCards: StoryObj = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1rem'
    }}>
      <Card 
        header="Mobile View"
        text="Optimized for small screens"
        screenSize={ScreenSize.MOBILE}
        onClick={fn}
      />
      <Card 
        header="Standard View"
        text="Default screen size"
        screenSize={ScreenSize.STANDART}
      />
      <Card 
        header="Large Screen"
        text="Optimized for big displays"
        screenSize={ScreenSize.BIG_SCREEN}
      />
    </div>
  ),
};