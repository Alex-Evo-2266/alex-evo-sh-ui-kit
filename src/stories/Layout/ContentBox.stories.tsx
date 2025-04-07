import { Meta, StoryObj } from '@storybook/react';
import { Button, ContentBox, Plus, Typography } from '../../lib';

const meta: Meta<typeof ContentBox> = {
    title: 'Components/Layout/ContentBox',
    component: ContentBox,
    tags: ['autodocs'],
    argTypes: {
        border: {
            control: 'boolean',
            description: 'Whether to show border around the component',
            defaultValue: false,
        },
        collapsible: {
            control: 'boolean',
            description: 'Whether the content can be toggled (show/hide)',
            defaultValue: false,
        },
        defaultVisible: {
            control: 'boolean',
            description: 'Initial visibility state for collapsible content',
            defaultValue: false,
            if: { arg: 'collapsible', truthy: true },
        },
        label: {
            control: 'text',
            description: 'Label text displayed in the header',
        },
        className: {
            control: 'text',
            description: 'Additional className for custom styling',
        },
        style: {
            control: 'object',
            description: 'Inline styles for the component',
        },
        onVisibilityChange: {
            action: 'visibilityChanged',
            description: 'Callback when visibility changes',
            if: { arg: 'collapsible', truthy: true },
        },
    },
};

export default meta;

type Story = StoryObj<typeof ContentBox>;

export const Basic: Story = {
    args: {
        label: 'Basic Content Box',
        children: (
            <Typography type="body">
                This is the content inside the box. It can be any React node.
            </Typography>
        ),
    },
};

export const WithBorder: Story = {
    args: {
        label: 'Content Box with Border',
        border: true,
        children: (
            <Typography type="body">
                This content box has a border around it.
            </Typography>
        ),
    },
};

export const Collapsible: Story = {
    args: {
        label: 'Collapsible Content Box',
        collapsible: true,
        defaultVisible: true,
        children: (
            <Typography type="body">
                Click the header to toggle this content. The animation speed is
                automatically calculated based on content height.
            </Typography>
        ),
    },
};

export const WithAction: Story = {
    args: {
        label: 'Content Box with Action',
        border: true,
        action: {
            icon: <Plus/>,
            onClick: () => alert('Action clicked!'),
            ariaLabel: 'Add item',
        },
        children: (
            <Typography type="body">
                This content box has an action button in the header.
            </Typography>
        ),
    },
};

export const ComplexContent: Story = {
    args: {
        label: 'Complex Content Example',
        border: true,
        collapsible: true,
        children: (
            <div>
                <Typography type='title'>Section Title</Typography>
                <Typography type="body">
                    This demonstrates that the ContentBox can handle complex content
                    structures while maintaining proper animation timing.
                </Typography>
                <div style={{ marginTop: '16px' }}>
                    <Button onClick={() => alert('Button clicked')}>
                        Interactive Element
                    </Button>
                </div>
            </div>
        ),
    },
};