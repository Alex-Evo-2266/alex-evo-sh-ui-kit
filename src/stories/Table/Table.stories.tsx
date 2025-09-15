import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Home, ScreenSize, Table } from '../../lib/index';
// import React from 'react';


const meta = {
  title: 'Components/Table/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    columns:[{
        field: "test1",
        title: "hello"
    },
    {
        field: "test2",
        title: "test2",
        backgroundColor: "red"
    },
    {
        field: "test3",
        title: "test3",
        template(cell) {
          return(<div className='sdgd' style={{backgroundColor: 'orange'}}>
            {cell.map((item, index)=>(
              <p key={index}>{String(item.content)}</p>
            ))}
          </div>)
        },
    }],
    data:[
        {
            test1: {
              content: 54,
              backgroundColor: "blue",
              color: "#fff"
            },
            test2: "dfgh",
            test3: "67"
        },
        {
            test1: 54,
            test2: "tere",
            test3: "67",
        },
        {
            test1: 54,
            test2: "tere",
            test3: ["tere", "dsvfg"]
        }
    ],
    onClickRow(data, index) {
      console.log("row", data, index)
    },
   },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    screenSize: ScreenSize.STANDART
  },
};

export const Action: Story = {
    args: {
        screenSize: ScreenSize.STANDART,
        actions:[
            {
                icon: <Home/>,
                onClick: (e, data, index)=>console.log(e, data, index),
            }
        ]
    },
  };

  export const Delete: Story = {
    args: {
        screenSize: ScreenSize.STANDART,
        onDelete:fn
    },
  };

  export const Menu: Story = {
    args: {
        screenSize: ScreenSize.STANDART,
        onContextMenu:fn
    },
  };

  export const Combo: Story = {
    args: {
        screenSize: ScreenSize.STANDART,
        onContextMenu:(e, data, index)=>console.log(e, data, index),
        onDelete: (data, index)=>console.log(data, index),
        onEdit: (data, index)=>console.log(data, index)
    },
  };



export const BaseSmall: Story = {
  args: {
    screenSize: ScreenSize.MOBILE
  },
};

export const ActionSmall: Story = {
    args: {
        screenSize: ScreenSize.MOBILE,
        actions:[
            {
                icon: <Home/>,
                onClick: (e, data, index)=>console.log(e, data, index),
            }
        ]
    },
  };

  export const DeleteSmall: Story = {
    args: {
        screenSize: ScreenSize.MOBILE,
        onDelete:fn
    },
  };

  export const MenuSmall: Story = {
    args: {
        screenSize: ScreenSize.MOBILE,
        onContextMenu:fn
    },
  };

  export const ComboSmall: Story = {
    args: {
        screenSize: ScreenSize.MOBILE,
        onContextMenu:(e, data, index)=>console.log(e, data, index),
        onDelete: (data, index)=>console.log(data, index),
        onEdit: (data, index)=>console.log(data, index),
        adaptive: true
    },
  };



  export const All: Story = {
    args: {
        screenSize: ScreenSize.MOBILE,
        onContextMenu:(e, data, index)=>console.log(e, data, index),
        onDelete: (data, index)=>console.log(data, index),
        onEdit: (data, index)=>console.log(data, index),
        adaptive: true,
        data: [
        {
            test1: {
              content: 54,
              backgroundColor: "blue",
              color: "#fff"
            },
            test2: "dfgh",
            test3: "67"
        },
        {
            test1: 54,
            test2: "tere",
            test3: "67"
        },
        {
          __all__:{
            content: <div>test row</div>,
            backgroundColor: "#0f0"
          }
        },
        {
            test1: 54,
            test2: "tere",
            test3: ["tere", "dsvfg"]
        }
    ]
    },
  };