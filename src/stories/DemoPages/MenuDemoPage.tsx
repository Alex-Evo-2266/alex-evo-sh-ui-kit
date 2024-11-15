import { useState} from "react"
import { DotSquare, Home } from "lucide-react"
import { IconButtonMenu } from "../../lib/ui/Base/IconButtonMenu/IconButtonMenu"
import { Button } from "../../lib/ui/Base/Button/Button"
import { ScreenSize } from "../../lib/model/sizeScreen"

export const MenuDemoPage = () => {

    const [smallScreen, setsmallScreen] = useState<boolean>(false)

    return(
        <div style={{zIndex: 5, background:"var(--Background-color)", color:"var(--On-background-color)"}}>
        <div id="portal-root" style={{zIndex: 1000}}></div>
        <>
            <IconButtonMenu icon={<DotSquare/>} screensize={smallScreen?ScreenSize.MOBILE:ScreenSize.STANDART} blocks={[{items:[
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
        <Button onClick={()=>setsmallScreen(prev=>!prev)}>togle mode</Button>

        </div>
    )
}
