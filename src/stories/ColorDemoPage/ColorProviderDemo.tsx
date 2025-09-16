import { ColorContext, ColorField, ColorProvider, ContentBox, getTextColor, Switch } from "../../lib"
import { ColorBlock } from "./ColorBlock"
import { DefaultColor } from "../../lib/consts/color"
import { useContext, useEffect } from "react"



export const ColorProviderDemo2 = () => {

    const { colors, activeTheme, updateThemeColor, setActiveTheme } = useContext(ColorContext)    

    useEffect(()=>{
        console.log(colors)
    },[colors])

    const defaultColorArray: string[] = Object.values(DefaultColor)

    return(
        <div style={{zIndex: 5, background:"var(--Background-color)", color:"var(--On-background-color)"}}>
            <Switch checked={activeTheme === "dark"} showLabel labelOff="light" labelOn="dark" onChange={e=>{setActiveTheme(!e.target.checked?"light":"dark")}}/>
        <div>
            <ContentBox label="Primary colors" style={{padding:"10px"}}>
                <ColorField placeholder="test" defaultColor="#0000" userColors={defaultColorArray} border container={document.body} value={colors.Primary_color} onChange={c=>updateThemeColor(activeTheme, "Primary_color", c)}/>
                <ColorField defaultColor="red" border container={document.body} value={colors.Secondary_color} onChange={c=>updateThemeColor(activeTheme, "Secondary_color", c)}/>
                <ColorField defaultColor="#346632" border container={document.body} value={colors.Tertiary_color} onChange={c=>updateThemeColor(activeTheme, "Tertiary_color", c)}/>
            </ContentBox>
        </div>
        <div className="demo-page-color-row">
            <div>
                <ColorBlock baseColorTitle="Primary-color" baseColor={'var(--Primary-color)'} textColorTitle="on Primary-color" textColor={'var(--On-primary-color)'}/>
                <ColorBlock baseColorTitle="Primary-container-color" baseColor={'var(--Primary-container-color)'} textColorTitle="on Primary-container-color" textColor={'var(--On-primary-container-color)'}/>
            </div>
            <div>
                <ColorBlock baseColorTitle="Secondary-color" baseColor={'var(--Secondary-color)'} textColorTitle="on Secondary-color" textColor={'var(--On-secondary-color)'}/>
                <ColorBlock baseColorTitle="Secondary-container-color" baseColor={'var(--Secondary-container-color)'} textColorTitle="on Secondary-container-color" textColor={'var(--On-secondary-container-color)'}/>
            </div>
            <div>
                <ColorBlock baseColorTitle="Tertiary-color" baseColor={'var(--Tertiary-color)'} textColorTitle="on Tertiary-color" textColor={'var(--On-tertiary-color)'}/>
                <ColorBlock baseColorTitle="Tertiary-container-color" baseColor={'var(--Tertiary-container-color)'} textColorTitle="on Tertiary-container-color" textColor={'var(--On-tertiary-container-color)'}/>
            </div>
        </div>
        <div>
            <ContentBox label="Surface colors" style={{padding:"10px"}}>
                <ColorField userColors={defaultColorArray} border container={document.body} value={colors.Surface_container_color} onChange={c=>updateThemeColor(activeTheme, "Surface_container_color", c)}/>
            </ContentBox>
        </div>
        <div className="demo-page-color-row">
            <ColorBlock baseColorTitle="Surface-container-lowest-color" baseColor={'var(--Surface-container-lowest-color)'} textColor={'var(--On-surface-color)'}/>
            <ColorBlock baseColorTitle="Surface-container-low-color" baseColor={'var(--Surface-container-low-color)'} textColor={'var(--On-surface-color)'}/>
            <ColorBlock baseColorTitle="Surface-container-color" baseColor={'var(--Surface-container-color)'} textColorTitle="On-surface-color" textColor={'var(--On-surface-color)'}/>
            <ColorBlock baseColorTitle="Surface-container-high-color" baseColor={'var(--Surface-container-high-color)'} textColor={'var(--On-surface-color)'}/>
            <ColorBlock baseColorTitle="Surface-container-highest-color" baseColor={'var(--Surface-container-highest-color)'} textColor={'var(--On-surface-color)'}/>
            <ColorBlock baseColorTitle="On-surface-variant-color" baseColor={'var(--On-surface-variant-color)'} textColor={'var(--Surface-container-color)'}/>
        </div>
        <div>
            <ContentBox label="Other colors" style={{padding:"10px"}}>
                <ColorField userColors={defaultColorArray} border container={document.body} value={colors.Background_color} onChange={(c)=>updateThemeColor(activeTheme, "Background_color", c)}/>
                <ColorField userColors={defaultColorArray} border container={document.body} value={colors.Error_color} onChange={(c)=>updateThemeColor(activeTheme, "Error_color", c)}/>
            </ContentBox>
        </div>
        <div className="demo-page-color-row">
            <ColorBlock baseColorTitle="Background-color" baseColor={'var(--Background-color)'} textColorTitle="On-background-color" textColor={'var(--On-background-color)'}/>
            <ColorBlock baseColorTitle="Error-color" baseColor={'var(--Error-color)'} textColorTitle="On-Error-color" textColor={'var(--On-error-color)'}/>
            <ColorBlock baseColorTitle="Error-container-color" baseColor={'var(--Error-container-color)'} textColorTitle="On-Error-container-color" textColor={'var(--On-error-container-color)'}/>
        </div>
        <div>
            <ContentBox label="Other colors" style={{padding:"10px"}}>
                <ColorField userColors={defaultColorArray} border container={document.body} value={colors.Outline_color} onChange={(c)=>updateThemeColor(activeTheme, "Outline_color", c)}/>
                <ColorField userColors={defaultColorArray} border container={document.body} value={colors.Shadow_color} onChange={(c)=>updateThemeColor(activeTheme, "Shadow_color", c)}/>
            </ContentBox>
        </div>
        <div className="demo-page-color-row">
            <ColorBlock baseColorTitle="Outline-color" baseColor={'var(--Outline-color)'} textColor={getTextColor(colors.Outline_color)}/>
            <ColorBlock baseColorTitle="Outline-variant-color" baseColor={'var(--Outline-variant-color)'} textColor={getTextColor(colors.Outline_color)}/>
            <ColorBlock baseColorTitle="Shadow-color" baseColor={'var(--Shadow-color)'} textColor={getTextColor(colors.Shadow_color)}/>
        </div>
        </div>
    )
}

export const ColorProviderDemo = () => {

    return(
        <ColorProvider>
            <ColorProviderDemo2/>
        </ColorProvider>
    )
}