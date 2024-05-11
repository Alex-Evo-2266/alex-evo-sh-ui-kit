import{d as g,j as e,B as h,a as u}from"./index-ca9c4b25.js";import"./index-a383d3d5.js";const j={title:"Dialogs/BasicTemplateDialog",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onHide:()=>console.log("close")}},r={args:{children:e.jsx(e.Fragment,{children:e.jsx("p",{children:"test"})})}},s={args:{header:"test H",children:e.jsx(e.Fragment,{children:e.jsx("p",{children:"test"})})}},a={args:{children:e.jsx(e.Fragment,{children:e.jsx("p",{children:"test"})}),action:e.jsx(h,{children:e.jsx(u,{children:"test btn"})})}};var t,n,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: <>
    <p>test</p>
    </>
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,d,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    header: "test H",
    children: <>
        <p>test</p>
        </>
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>test</p>
        </>,
    action: <BaseActionCard>
                    <Button>test btn</Button>
                </BaseActionCard>
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const A=["Base","Header","Action"];export{a as Action,r as Base,s as Header,A as __namedExportsOrder,j as default};
