import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, LinkIcon, ListContainer, ListItem, Switch } from "../../lib";

const meta: Meta<typeof ListContainer> = {
  title: "Components/Base/List",
  component: ListContainer,
  tags: ["autodocs"],
  argTypes: {
    maxHeight: {
      control: "text",
      description: "Максимальная высота списка",
    },
    scroll: {
      control: "boolean",
      description: "Включить скролл при превышении maxHeight",
    },
    transparent: {
      control: "boolean",
      description: "Прозрачный фон контейнера",
    },
    width: {
      control: "text",
      description: "Ширина контейнера",
    },
    padding: {
      control: "text",
      description: "Внутренние отступы",
    },
    margin: {
      control: "text",
      description: "Внешние отступы",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ListContainer>;

/**
 * Базовый список с элементами
 */
export const Basic: Story = {
  render: (args:any) => (
    <ListContainer {...args}>
      <ListItem header="Заголовок 1" text="Вторичный текст" />
      <ListItem header="Заголовок 2" text="Еще один элемент" />
      <ListItem header="Заголовок 3" text="Последний элемент" />
    </ListContainer>
  ),
};

/**
 * Список с иконками
 */
export const WithIcons: Story = {
  render: (args:any) => (
    <ListContainer {...args}>
      <ListItem 
        header="Электронная почта" 
        text="user@example.com" 
        icon={<LinkIcon/>} 
      />
      <ListItem 
        header="Телефон" 
        text="+7 (123) 456-78-90" 
        icon={<LinkIcon />} 
      />
      <ListItem 
        header="Адрес" 
        text="ул. Примерная, д. 1" 
        icon={<LinkIcon />} 
      />
    </ListContainer>
  ),
};

/**
 * Список с элементами управления
 */
export const WithControls: Story = {
  render: (args:any) => (
    <ListContainer {...args}>
      <ListItem 
        header="Уведомления" 
        text="Получать email-уведомления" 
        control={<Switch size='small' />} 
      />
      <ListItem 
        header="Темная тема" 
        text="Включить ночной режим" 
        control={<Switch defaultChecked />} 
      />
      <ListItem 
        header="Запомнить меня" 
        control={<Checkbox />} 
      />
    </ListContainer>
  ),
};

/**
 * Список с hover-эффектом
 */
export const Hoverable: Story = {
  render: (args:any) => (
    <ListContainer {...args}>
      <ListItem 
        header="Профиль" 
        hovered 
        onClick={() => console.log("Профиль clicked")} 
      />
      <ListItem 
        header="Настройки" 
        hovered 
        onClick={() => console.log("Настройки clicked")} 
      />
      <ListItem 
        header="Выход" 
        hovered 
        onClick={() => console.log("Выход clicked")} 
      />
    </ListContainer>
  ),
};

/**
 * Список с ограниченной высотой и скроллом
 */
export const Scrollable: Story = {
  args: {
    maxHeight: "200px",
    scroll: true,
  },
  render: (args:any) => (
    <ListContainer {...args}>
      {Array.from({ length: 20 }).map((_, i) => (
        <ListItem 
          key={i} 
          header={`Элемент ${i + 1}`} 
          text={`Вторичный текст для элемента ${i + 1}`} 
        />
      ))}
    </ListContainer>
  ),
};

/**
 * Прозрачный список
 */
export const Transparent: Story = {
  args: {
    transparent: true,
  },
  render: (args:any) => (
    <ListContainer {...args}>
      <ListItem header="Прозрачный элемент 1" />
      <ListItem header="Прозрачный элемент 2" />
      <ListItem header="Прозрачный элемент 3" />
    </ListContainer>
  ),
};

/**
 * Неактивные элементы
 */
export const Disabled: Story = {
  render: (args:any) => (
    <ListContainer {...args}>
      <ListItem header="Активный элемент" hovered />
      <ListItem header="Отключенный элемент" disabled />
      <ListItem header="Еще один активный" hovered />
    </ListContainer>
  ),
};

/**
 * Активные элементы
 */
export const Active: Story = {
  render: (args:any) => (
    <ListContainer {...args}>
      <ListItem header="Обычный элемент" />
      <ListItem header="Активный элемент" active />
      <ListItem header="Еще один обычный" />
    </ListContainer>
  ),
};

/**
 * Список с описанием элементов
 */
export const WithDescription: Story = {
  render: (args) => (
    <ListContainer {...args}>
      <ListItem 
        header="Основные настройки"
        text="Общие параметры системы"
        description="Настройте основные параметры работы приложения"
        icon={<LinkIcon />}
      />
      <ListItem 
        header="Безопасность"
        text="Пароли и доступы"
        description="Управление безопасностью вашего аккаунта"
        icon={<LinkIcon />}
      />
      <ListItem 
        header="Уведомления"
        text="Настройки оповещений"
        description="Выберите, какие уведомления вы хотите получать"
        icon={<LinkIcon />}
      />
    </ListContainer>
  ),
};