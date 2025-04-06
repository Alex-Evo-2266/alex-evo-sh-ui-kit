import { useState} from "react"
import { BottomSheetsUi, Button, ModalPortal, Home, ListContainer, ListItem, MenuIcon, NavigationBar, Plus, Switch, useColor } from "../../lib"
export type SelectDemoPageProps = {
    placeholder?: string
}

export const BottomSheetsPage2 = ({}:SelectDemoPageProps) => {

    const {nightMode, setNightMode} = useColor()    


    const [visible, setVisible] = useState<boolean>(false)

    return(
        <>
        
        <div style={{zIndex: 5, background:"var(--Background-color)", color:"var(--On-background-color)"}}>
            <Switch checked={nightMode} onChange={(e)=>setNightMode(e.target.checked)}/>
            <Button onClick={()=>setVisible(prev=>!prev)}>togle</Button>
            {
                visible &&
                <>
                <ModalPortal container={document.getElementById("portal-root")}>
                    <BottomSheetsUi bottom={80} onHide={()=>{}} visible={true} children={<ListContainer transparent>
                        <ListItem header='test' hovered/>
                        <ListItem header='test' hovered/>
                        <ListItem header='test' hovered/>
                        <ListItem header='test' hovered/>
                    </ListContainer>}/>
                </ModalPortal>
                

                <NavigationBar btns={[{
                    icon: <MenuIcon/>,
                    onClick: ()=>{},
                    text: "menu",
                    type: "button"
                   },
                   {
                    icon: <Home/>,
                    onClick: ()=>{},
                    text: "home",
                    type: "button"
                   },
                   {
                    icon: <Plus/>,
                    onClick: ()=>{},
                    text: "plus",
                    type: "button"
                   }]}/>

                </>
            }
        </div>
        <div id="portal-root-dialog" style={{zIndex: 1000}}></div>
        <div id="portal-root" style={{zIndex: 1200}}></div>
        </>
        
    )
}
