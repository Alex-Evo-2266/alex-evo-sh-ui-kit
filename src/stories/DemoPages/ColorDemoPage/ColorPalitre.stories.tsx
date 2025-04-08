import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useColor } from '../../../lib';
import { DefaultColor } from '../../../lib/consts/color';

const ColorPalette = () => {
  const { colors, nightMode, setNightMode } = useColor();

  // Функция для рендеринга цветовых карточек
  const renderColorCards = () => {
    return Object.entries(colors).map(([key, value]) => (
      <div 
        key={key} 
        style={{
          backgroundColor: value,
          padding: '16px',
          margin: '8px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '200px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ 
          fontWeight: 'bold',
          color: key.startsWith('On_') ? value : colors.On_surface_color
        }}>
          {key}
        </div>
        <div style={{ 
          marginTop: '8px',
          color: key.startsWith('On_') ? value : colors.On_surface_color
        }}>
          {value}
        </div>
      </div>
    ));
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>Color Palette</h1>
      <div style={{ marginBottom: '16px' }}>
        <label>
          <input
            type="checkbox"
            checked={nightMode}
            onChange={(e) => setNightMode(e.target.checked)}
            style={{ marginRight: '8px' }}
          />
          Night Mode
        </label>
      </div>
      
      <h2>Default Colors</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.entries(DefaultColor).map(([key, value]) => (
          <div 
            key={key} 
            style={{
              backgroundColor: value,
              padding: '16px',
              margin: '8px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '200px'
            }}
          >
            <div style={{ fontWeight: 'bold', color: '#fff' }}>{key}</div>
            <div style={{ marginTop: '8px', color: '#fff' }}>{value}</div>
          </div>
        ))}
      </div>

      <h2>Generated Colors</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {renderColorCards()}
      </div>
    </div>
  );
};

const meta: Meta<typeof ColorPalette> = {
  title: 'Theme/Color Palette',
  component: ColorPalette,
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {
  render: () => <ColorPalette />,
};