import { useState} from "react"
import { Button, Menu } from "../../lib"
import { Home } from "lucide-react"
import { ScreenSize } from "../../lib/model/sizeScreen"
import '../../lib/ui/index.scss'

export const MenuDemoPage = () => {

    const [visible, setVisible] = useState<boolean>(false)
    const [smallScreen, setsmallScreen] = useState<boolean>(false)

    return(
        <div style={{zIndex: 5, background:"var(--Background-color)", color:"var(--On-background-color)"}}>
        <div id="portal-root" style={{zIndex: 1000}}></div>
        <>
            <Menu onHide={()=>setVisible(false)} screensize={smallScreen?ScreenSize.MOBILE:ScreenSize.STANDART} visible={visible} x={1} y={1} blocks={[{items:[
                {
                    title: "test1"
                },
                {
                    title: "test2",
                    activated: true,
                    onClick:(()=>setsmallScreen(prev=>!prev))
                },
                {
                    title: "test3",
                    icon: <Home/>
                },
                {
                    title: "test4",
                    icon: <Home/>,
                    subItems: [{
                        title: "subtest1"
                    },
                    {
                        title: "subtest2",
                        icon: <Home/>,
                        activated: true
                    }]
                }
                ]}]} container={document.getElementById("portal-root")}/>
        </>
        <Button onClick={()=>setVisible(prev=>!prev)}>open page</Button>
        <Button onClick={()=>setsmallScreen(prev=>!prev)}>togle mode</Button>

        </div>
    )
}
