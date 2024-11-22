import {X, Trash, Pen, Palette, Home, MoreHorizontal, MenuIcon, MoreVertical, CircleMinus, Calendar, Check, ChevronDown, CirclePlus, Clock, ArrowLeft, Keyboard, Search, } from "../../lib/ui/Icons"

const icons = [X, Trash, Pen, Palette, Home, MoreHorizontal, MenuIcon, MoreVertical, CircleMinus, Calendar, Check, ChevronDown, CirclePlus, Clock, ArrowLeft, Keyboard, Search]

export const IconDemoPage:React.FC = () => {

    return(
        <div>
            {
                icons.map((Item, index)=>(<Item key={index}/>))
            }
            
        </div>
    )
}
