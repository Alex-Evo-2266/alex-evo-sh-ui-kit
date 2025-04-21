import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '../../../lib';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Имя формы (атрибут name)'
    },
    changeValue: {
      action: 'changeValue',
      description: 'Колбек при изменении значения поля'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

// Базовый пример формы
export const BasicForm: Story = {
  args: {
    name: 'userForm',
    value: {
      username: '',
      age: 18,
      notifications: true
    },
    changeValue: (name, value) => console.log(`Field ${name} changed to ${value}`),
    errors: {}
  },
  render: (args) => (
    <Form {...args}>
      <Form.TextInput 
        name="username" 
        placeholder="Введите имя"
      />
      <Form.NumberInput 
        name="age" 
        placeholder='test'
        helperText='test help'
        border
        min={18} 
        max={100}
      />
      <Form.SwitchField 
        name="notifications" 
      />
      <Form.MoreTextField name='test' separator='-'/>
    </Form>
  )
};

// Форма с ошибками
export const FormWithErrors: Story = {
  args: {
    name: 'userForm',
    value: {
      email: 'invalid-email',
      password: 'short'
    },
    errors: {
      email: 'Некорректный email',
      password: 'Пароль слишком короткий'
    }
  },
  render: (args) => (
    <Form {...args}>
      <Form.TextInput 
        name="email" 
      />
      <Form.TextInput 
        name="password" 
      />
    </Form>
  )
};