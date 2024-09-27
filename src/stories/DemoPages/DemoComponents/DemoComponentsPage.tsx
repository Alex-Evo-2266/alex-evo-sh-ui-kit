import { Pen } from "lucide-react"
import { BaseActionCard, Button, Card, Checkbox, Chips, ColorField, DateField, DayOfWeekField, FAB, FilledButton, FilledTotalButton, IconButton, MoreText, NumberField, OutlineButton, RadioButton, SigmentedButton, Slider, Switch, TextArea, TextButton, TextField, TimeField, Typography, useColor } from "../../../lib"
import { useState } from "react"
import img from '../../img/fon-base.jpg'


export const ComponentsDemoPage = () => {

    const {lightColor, nightMode, setNightMode, setColor} = useColor()
    const [visibleColorField, setVisibleColorField] = useState<boolean>(false)

    return(
        <>
            <div id="portal-root" style={{zIndex: 1000}}></div>
            <div style={{zIndex: 5, background:"var(--Background-color)", color:"var(--On-background-color)"}}>
                <Switch checked={nightMode} onChange={(e)=>setNightMode(e.target.checked)}/>
                <div style={{padding: "10px"}}>
                    <div>
                        {
                            (visibleColorField)?
                            <>
                            <ColorField container={document.getElementById('portal-root')} value={lightColor.Primary_color} onChange={c=>setColor({Primary_color:c})}/>
                            <ColorField container={document.getElementById('portal-root')} value={lightColor.Secondary_color} onChange={c=>setColor({Secondary_color:c})}/>
                            <ColorField container={document.getElementById('portal-root')} value={lightColor.Tertiary_color} onChange={c=>setColor({Tertiary_color:c})}/>
                            </>:
                            <Button onClick={()=>setVisibleColorField(true)}>open color field</Button>
                        }
                    </div>
                    <div>
                        <Button>button1</Button>
                        <OutlineButton>button2</OutlineButton>
                        <TextButton>button3</TextButton>
                        <FilledTotalButton>button4</FilledTotalButton>
                        <FilledButton>button5</FilledButton>
                    </div>
                    <div>
                        <RadioButton defaultChecked name="test1"/>
                        <RadioButton name="test1"/>
                    </div>
                    <div>
                        <Checkbox/>
                        <Checkbox/>
                    </div>
                    <div>
                        <Chips text="test chip"/>
                        <Chips text="test chip" onDelete={()=>{}}/>
                        <Chips text="test chip. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore architecto voluptatibus sapiente modi quis! Blanditiis cum facilis vel commodi ipsam voluptates aliquam in tempora excepturi possimus nobis architecto, corrupti sequi?" big/>
                        <Chips text="test chip. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore architecto voluptatibus sapiente modi quis! Blanditiis cum facilis vel commodi ipsam voluptates aliquam in tempora excepturi possimus nobis architecto, corrupti sequi?" big onDelete={()=>{}}/>
                        <Chips text="test chip. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore architecto voluptatibus sapiente modi quis! Blanditiis cum facilis vel commodi ipsam voluptates aliquam in tempora excepturi possimus nobis architecto, corrupti sequi?" onDelete={()=>{}}/>
                    </div>
                    <div>
                        <FAB>btn</FAB>
                        <FAB icon={<Pen/>}></FAB>
                    </div>
                    <div>
                        <IconButton icon={<Pen/>}/>
                        <IconButton disabled icon={<Pen/>}/>
                    </div>
                    <div>
                        <SigmentedButton items={["btn1", "btn2", "btn3"]}/>
                        <SigmentedButton multiple items={["btn1", "btn2", "btn3"]}/>
                    </div>
                    <div>
                        <Card 
                        header="test h card" 
                        subhead="test subhead" 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam. Maxime error eveniet in aut! Laboriosam nemo similique itaque impedit? Nostrum deleniti optio atque unde sint pariatur velit ab accusamus?"
                        >
                        
                        </Card>
                        <Card 
                        action={<BaseActionCard><Button>test</Button></BaseActionCard>}
                        header="test h card" 
                        subhead="test subhead" 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam. Maxime error eveniet in aut! Laboriosam nemo similique itaque impedit? Nostrum deleniti optio atque unde sint pariatur velit ab accusamus?"
                        >
                        
                        </Card>
                        <Card 
                        action={<BaseActionCard><Button>test</Button></BaseActionCard>}
                        iconButtonCell={<IconButton icon={<Pen/>}/>}
                        header="test h card" 
                        subhead="test subhead" 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam. Maxime error eveniet in aut! Laboriosam nemo similique itaque impedit? Nostrum deleniti optio atque unde sint pariatur velit ab accusamus?"
                        >
                        
                        </Card>
                        <Card 
                        imgSrc={img}
                        action={<BaseActionCard><Button>test</Button></BaseActionCard>}
                        iconButtonCell={<IconButton icon={<Pen/>}/>}
                        header="test h card" 
                        subhead="test subhead" 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam. Maxime error eveniet in aut! Laboriosam nemo similique itaque impedit? Nostrum deleniti optio atque unde sint pariatur velit ab accusamus?"
                        >
                        
                        </Card>
                    </div>
                    <div>
                        <Typography type='title'>Input</Typography>
                        <TextField border placeholder="test"/>
                        <TextField border styleContainer={{height:"54px"}} placeholder="test" onClear={()=>{}} />
                        <TextField icon={<Pen/>} styleContainer={{height:"54px"}} placeholder="test" onClear={()=>{}} />
                        <TextField border placeholder="test" onClear={()=>{}} />
                        <TextField border placeholder="test" icon={<Pen/>}/>
                        <TextField border placeholder="test" readOnly value={"sdfdgh"}/>

                        <TextArea border/>

                        <NumberField border/>
                        <ColorField container={null} border/>
                        <TimeField container={null} border/>
                        <DateField container={null} border/>
                        <Slider/>
                    </div>
                    <div>
                        <MoreText border value=""/>
                        <DayOfWeekField/>
                    </div>
                    <div>
                        {/* <SelectField/> */}
                    </div>
                </div>
            </div>
        </>
    )
}