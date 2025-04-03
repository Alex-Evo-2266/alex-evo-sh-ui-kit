import{j as g}from"./jsx-runtime-0ae02581.js";import{f as u}from"./index-6eef940f.js";import{w as U}from"./index-9a48c850.js";import{S as o}from"./sizeScreen-71d55eb1.js";import{H as Q}from"./Copy-916423f3.js";import"./index-a383d3d5.js";import"./CopyButton-387b9019.js";import"./ColorPicker-fdcc6713.js";import"./index-b0717202.js";const re={title:"Components/Table/Table",component:U,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{columns:[{field:"test1",title:"hello"},{field:"test2",title:"test2"},{field:"test3",title:"test3",template(e){return g.jsx("div",{className:"sdgd",style:{backgroundColor:"orange"},children:e.map((n,r)=>g.jsx("p",{children:String(n.content)},r))})}}],data:[{test1:54,test2:"dfgh",test3:"67"},{test1:54,test2:"tere",test3:"67"},{test1:54,test2:"tere",test3:["tere","dsvfg"]}],onClickRow(e,n){console.log("row",e,n)}}},s={args:{screenSize:o.STANDART}},a={args:{screenSize:o.STANDART,actions:[{icon:g.jsx(Q,{}),onClick:(e,n,r)=>console.log(e,n,r)}]}},t={args:{screenSize:o.STANDART,onDelete:u}},c={args:{screenSize:o.STANDART,onContextMenu:u}},i={args:{screenSize:o.STANDART,onContextMenu:(e,n,r)=>console.log(e,n,r),onDelete:(e,n)=>console.log(e,n),onEdit:(e,n)=>console.log(e,n)}},l={args:{screenSize:o.MOBILE}},d={args:{screenSize:o.MOBILE,actions:[{icon:g.jsx(Q,{}),onClick:(e,n,r)=>console.log(e,n,r)}]}},m={args:{screenSize:o.MOBILE,onDelete:u}},S={args:{screenSize:o.MOBILE,onContextMenu:u}},p={args:{screenSize:o.MOBILE,onContextMenu:(e,n,r)=>console.log(e,n,r),onDelete:(e,n)=>console.log(e,n),onEdit:(e,n)=>console.log(e,n),adaptive:!0}};var x,z,A;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    screenSize: ScreenSize.STANDART
  }
}`,...(A=(z=s.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var T,D,M;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    screenSize: ScreenSize.STANDART,
    actions: [{
      icon: <Home />,
      onClick: (e, data, index) => console.log(e, data, index)
    }]
  }
}`,...(M=(D=a.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var C,f,E;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    screenSize: ScreenSize.STANDART,
    onDelete: fn
  }
}`,...(E=(f=t.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var B,R,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    screenSize: ScreenSize.STANDART,
    onContextMenu: fn
  }
}`,...(N=(R=c.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var O,I,L;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    screenSize: ScreenSize.STANDART,
    onContextMenu: (e, data, index) => console.log(e, data, index),
    onDelete: (data, index) => console.log(data, index),
    onEdit: (data, index) => console.log(data, index)
  }
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var b,j,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    screenSize: ScreenSize.MOBILE
  }
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var h,v,H;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    screenSize: ScreenSize.MOBILE,
    actions: [{
      icon: <Home />,
      onClick: (e, data, index) => console.log(e, data, index)
    }]
  }
}`,...(H=(v=d.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var w,y,_;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    screenSize: ScreenSize.MOBILE,
    onDelete: fn
  }
}`,...(_=(y=m.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var q,F,G;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    screenSize: ScreenSize.MOBILE,
    onContextMenu: fn
  }
}`,...(G=(F=S.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,P;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    screenSize: ScreenSize.MOBILE,
    onContextMenu: (e, data, index) => console.log(e, data, index),
    onDelete: (data, index) => console.log(data, index),
    onEdit: (data, index) => console.log(data, index),
    adaptive: true
  }
}`,...(P=(K=p.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const se=["Base","Action","Delete","Menu","Combo","BaseSmall","ActionSmall","DeleteSmall","MenuSmall","ComboSmall"];export{a as Action,d as ActionSmall,s as Base,l as BaseSmall,i as Combo,p as ComboSmall,t as Delete,m as DeleteSmall,c as Menu,S as MenuSmall,se as __namedExportsOrder,re as default};
