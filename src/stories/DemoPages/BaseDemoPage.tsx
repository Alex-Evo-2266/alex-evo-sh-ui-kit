import { createContext } from "react";
import { Switch } from "../../lib"
import { useColor } from "../../lib/hooks/color.hook"
import { BaseColor, ChangeColor, NightColor } from "../../lib/model/color";
import { DefaultColor, DefaultNightColor } from "../../lib/consts/color";

interface IBaseDemoPage{
    children: React.ReactNode
}

export const contextDemoPage = createContext<{setColor:(c:ChangeColor)=>(void|Promise<void>), lightColor:BaseColor, nightColor:NightColor}>({
    setColor:(c:ChangeColor)=>{},
    lightColor:DefaultColor,
    nightColor:DefaultNightColor
});

export const BaseDemoPage:React.FC<IBaseDemoPage> = ({children}) => {

    const {nightMode, setNightMode, lightColor, nightColor, setColor} = useColor()

    return(
        <contextDemoPage.Provider value={{lightColor, nightColor, setColor: setColor}}>
        <div style={{zIndex: 5, background:"var(--Background-color)", color:"var(--On-background-color)"}}>
            <Switch checked={nightMode} onChange={(e)=>setNightMode(e.target.checked)}/>
            <div>{children}</div>
        </div>
        </contextDemoPage.Provider>
    )
}
