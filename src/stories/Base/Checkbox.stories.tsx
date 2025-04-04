// import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
// import { Checkbox } from '../../lib/index';

// const meta = {
//   title: 'Components/Base/Checkbox',
//   component: Checkbox,
//   parameters: {
//     layout: 'centered',
//   },
//   tags: ['autodocs'],
//   argTypes: {
    
//   },
//   args: { onChange: fn() },
// } satisfies Meta<typeof Checkbox>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Base: Story = {
//   args: {
   
//   },
// };

// export const Check: Story = {
//     args: {
//         checked: true
//     },
//   };

import type { Meta, StoryObj } from '@storybook/react';
import { Check, Checkbox } from '../../lib/index';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Input/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Базовая история
export const Primary: Story = {
  args: {
    checked: false,
  },
};

// Все состояния в одной истории
export const States = () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Checkbox checked={false} />
        <span>Unchecked</span>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Checkbox checked={true} />
        <span>Checked</span>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <span>Controlled: {checked ? 'Checked' : 'Unchecked'}</span>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Checkbox disabled />
        <span>Disabled</span>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Checkbox disabled checked />
        <span>Disabled Checked</span>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Checkbox readOnly checked />
        <span>ReadOnly Checked</span>
      </div>
    </div>
  );
};

// Разные размеры
export const Sizes = () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <Checkbox size="small" />
    <Checkbox size="medium" />
    <Checkbox size="large" />
  </div>
);

// С кастомной иконкой
export const CustomIcon = () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <Checkbox checkIcon={<Check baseColor='white' />} />
    <span>Checkbox with custom icon</span>
  </div>
);

// Пример использования в форме
export const FormExample = () => {
  const [options, setOptions] = useState({
    newsletter: false,
    notifications: true,
    darkMode: false,
  });

  const handleChange = (name: keyof typeof options) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptions(prev => ({ ...prev, [name]: e.target.checked }));
  };

  return (
    <form style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <label style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Checkbox
          name="newsletter"
          checked={options.newsletter}
          onChange={handleChange('newsletter')}
        />
        <span>Subscribe to newsletter</span>
      </label>
      <label style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Checkbox
          name="notifications"
          checked={options.notifications}
          onChange={handleChange('notifications')}
        />
        <span>Enable notifications</span>
      </label>
      <label style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Checkbox
          name="darkMode"
          checked={options.darkMode}
          onChange={handleChange('darkMode')}
        />
        <span>Dark mode</span>
      </label>
      <div>
        <pre>{JSON.stringify(options, null, 2)}</pre>
      </div>
    </form>
  );
};