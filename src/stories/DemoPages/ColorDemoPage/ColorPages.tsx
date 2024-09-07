import { useState} from "react"
import { Button, ColorField, FieldContainer, getTextColor, Switch, useColor } from "../../../lib"
import { ColorBlock } from "./ColorBlock"
import { DefaultColor } from "../../../lib/consts/color"

export const ColorPage = () => {

    const {setColor, lightColor, nightColor, nightMode, setNightMode} = useColor()    

    const defaultColorArray: string[] = Object.values(DefaultColor)

    const [visible, setVisible] = useState<boolean>(false)

    return(
        <div style={{zIndex: 5, background:"var(--Background-color)", color:"var(--On-background-color)"}}>
        <div id="portal-root" style={{zIndex: 1000}}></div>
        <Switch checked={nightMode} onChange={(e)=>setNightMode(e.target.checked)}/>
        {
        (visible)?
        <>
        <div>
            <FieldContainer header="Primary colors" style={{padding:"10px"}}>
                <ColorField userColor={defaultColorArray} border container={document.getElementById('portal-root')} value={lightColor.Primary_color} onChange={c=>setColor({Primary_color:c})}/>
                <ColorField border container={document.getElementById('portal-root')} value={lightColor.Secondary_color} onChange={c=>setColor({Secondary_color:c})}/>
                <ColorField border container={document.getElementById('portal-root')} value={lightColor.Tertiary_color} onChange={c=>setColor({Tertiary_color:c})}/>
            </FieldContainer>
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
            <FieldContainer header="Surface colors" style={{padding:"10px"}}>
                <ColorField userColor={defaultColorArray} border container={document.getElementById('portal-root')} value={lightColor.Surface_container_color} onChange={c=>setColor({Surface_container_color:c})}/>
                <ColorField userColor={defaultColorArray} border container={document.getElementById('portal-root')} value={nightColor.Surface_container_color_night} onChange={c=>setColor({Surface_container_color_night:c})}/>
            </FieldContainer>
        </div>
        <div className="demo-page-color-row">
            <ColorBlock baseColorTitle="Surface-container-lowest-color" baseColor={'var(--Surface-container-lowest-color)'} textColor={'var(--On-surface-color)'}/>
            <ColorBlock baseColorTitle="Surface-container-low-color" baseColor={'var(--Surface-container-low-color)'} textColor={'var(--On-surface-color)'}/>
            <ColorBlock baseColorTitle="Surface-container-color" baseColor={'var(--Surface-container-color)'} textColorTitle="On-surface-color" textColor={'var(--On-surface-color)'}/>
            <ColorBlock baseColorTitle="Surface-container-high-color" baseColor={'var(--Surface-container-high-color)'} textColor={'var(--On-surface-color)'}/>
            <ColorBlock baseColorTitle="Surface-container-highest-color" baseColor={'var(--Surface-container-highest-color)'} textColor={'var(--On-surface-color)'}/>
        </div>
        <div>
            <FieldContainer header="Other colors" style={{padding:"10px"}}>
                <ColorField userColor={defaultColorArray} border container={document.getElementById('portal-root')} value={lightColor.Background_color} onChange={(c)=>setColor({Background_color:c})}/>
                <ColorField userColor={defaultColorArray} border container={document.getElementById('portal-root')} value={nightColor.Background_color_night} onChange={c=>setColor({Background_color_night:c})}/>
                <ColorField userColor={defaultColorArray} border container={document.getElementById('portal-root')} value={lightColor.Error_color} onChange={(c)=>setColor({Error_color:c})}/>
            </FieldContainer>
        </div>
        <div className="demo-page-color-row">
            <ColorBlock baseColorTitle="Background-color" baseColor={'var(--Background-color)'} textColorTitle="On-background-color" textColor={'var(--On-background-color)'}/>
            <ColorBlock baseColorTitle="Error-color" baseColor={'var(--Error-color)'} textColorTitle="On-Error-color" textColor={'var(--On-error-color)'}/>
            <ColorBlock baseColorTitle="Error-container-color" baseColor={'var(--Error-container-color)'} textColorTitle="On-Error-container-color" textColor={'var(--On-error-container-color)'}/>
        </div>
        <div>
            <FieldContainer header="Other colors" style={{padding:"10px"}}>
                <ColorField userColor={defaultColorArray} border container={document.getElementById('portal-root')} value={lightColor.Outline_color} onChange={(c)=>setColor({Outline_color:c})}/>
                <ColorField userColor={defaultColorArray} border container={document.getElementById('portal-root')} value={lightColor.Shadow_color} onChange={(c)=>setColor({Shadow_color:c})}/>
            </FieldContainer>
        </div>
        <div className="demo-page-color-row">
            <ColorBlock baseColorTitle="Outline-color" baseColor={'var(--Outline-color)'} textColor={getTextColor(lightColor.Outline_color)}/>
            <ColorBlock baseColorTitle="Outline-variant-color" baseColor={'var(--Outline-variant-color)'} textColor={getTextColor(lightColor.Outline_color)}/>
            <ColorBlock baseColorTitle="Shadow-color" baseColor={'var(--Shadow-color)'} textColor={getTextColor(lightColor.Shadow_color)}/>
        </div>
        </>
        :<Button onClick={()=>setVisible(true)}>open page</Button>
        }
        </div>
    )
}
