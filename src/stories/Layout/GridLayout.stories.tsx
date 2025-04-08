import { Meta, StoryObj } from '@storybook/react'
import { GridLayout, GridLayoutItem } from '../../lib'

const meta: Meta<typeof GridLayout> = {
  title: 'Components/Layout/GridLayout',
  component: GridLayout,
  tags: ['autodocs'],
  argTypes: {
    gridRowGap: {
      control: 'text',
      description: 'Отступ между строками',
      defaultValue: '10px'
    },
    gridColumnGap: {
      control: 'text',
      description: 'Отступ между колонками',
      defaultValue: '5px'
    },
    itemMinWith: {
      control: 'text',
      description: 'Минимальная ширина элемента'
    },
    itemMaxWith: {
      control: 'text',
      description: 'Максимальная ширина элемента'
    },
    itemWith: {
      control: 'text',
      description: 'Фиксированная ширина элемента (если min/max не указаны)',
      defaultValue: '400px'
    },
    minWith: {
      control: 'text',
      description: 'Минимальная ширина всей сетки'
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы'
    }
  }
}

export default meta

type Story = StoryObj<typeof GridLayout>

// Пример элемента для сетки
const SampleItem = ({ height = 100, text = 'Item' }: { height?: number, text?: string }) => (
  <div style={{ 
    height: `${height}px`, 
    background: '#f0f0f0',
    padding: '10px',
    border: '1px solid #ddd'
  }}>
    {text}
  </div>
)

export const Basic: Story = {
  render: (args) => (
    <GridLayout {...args}>
      <GridLayoutItem><SampleItem /></GridLayoutItem>
      <GridLayoutItem><SampleItem height={150} /></GridLayoutItem>
      <GridLayoutItem><SampleItem height={80} /></GridLayoutItem>
      <GridLayoutItem><SampleItem height={120} /></GridLayoutItem>
      <GridLayoutItem><SampleItem height={200} /></GridLayoutItem>
      <GridLayoutItem><SampleItem /></GridLayoutItem>
    </GridLayout>
  )
}

export const WithFixedWidth: Story = {
  args: {
    itemWith: '300px'
  },
  render: (args) => (
    <GridLayout {...args}>
      {[...Array(6)].map((_, i) => (
        <GridLayoutItem key={i}>
          <SampleItem height={100 + i * 30} text={`Item ${i + 1}`} />
        </GridLayoutItem>
      ))}
    </GridLayout>
  )
}

export const Responsive: Story = {
  args: {
    itemMinWith: '200px',
    itemMaxWith: '1fr'
  },
  render: (args) => (
    <GridLayout {...args}>
      {[...Array(8)].map((_, i) => (
        <GridLayoutItem key={i}>
          <SampleItem 
            height={80 + Math.random() * 120} 
            text={`Responsive ${i + 1}`} 
          />
        </GridLayoutItem>
      ))}
    </GridLayout>
  )
}

export const WithGaps: Story = {
  args: {
    gridRowGap: '20px',
    gridColumnGap: '15px'
  },
  render: (args) => (
    <GridLayout {...args}>
      {[...Array(6)].map((_, i) => (
        <GridLayoutItem key={i}>
          <SampleItem 
            height={100 + i * 20} 
            text={`Gap ${i + 1}`} 
          />
        </GridLayoutItem>
      ))}
    </GridLayout>
  )
}