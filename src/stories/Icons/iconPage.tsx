import {X, Trash, Pen, Palette, Home, MoreHorizontal, MenuIcon, MoreVertical, CircleMinus, Calendar, Check, ChevronDown, CirclePlus, Clock, ArrowLeft, Keyboard, Search, Plus, Minus, Plug} from "../../lib/ui/Icons"

const icons = [X, Trash, Pen, Palette, Home, MoreHorizontal, MenuIcon, MoreVertical, CircleMinus, Calendar, Check, ChevronDown, CirclePlus, Clock, ArrowLeft, Keyboard, Search, Plus, Minus, Plug]

export const IconDemoPage:React.FC = () => {

    return(
        <div>
            {
                icons.map((Item, index)=>(<Item key={index}/>))
            }
        </div>
    )
}
