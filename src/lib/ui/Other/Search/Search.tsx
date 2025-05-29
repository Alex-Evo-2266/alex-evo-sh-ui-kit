import { ArrowLeft, X, Search as SearchIcon } from "../../Icons"
import "./Search.scss"
import { useRef, useState } from "react"

export interface ButtonSearch{
    onClick: (e?:React.MouseEvent<HTMLSpanElement>) => void
    icon: React.ReactNode
}

export interface SearchProps{
    onSearch: (data: string)=>void
    btn?: ButtonSearch
    btnComponent?: React.ReactNode
    placeholder?: string
    autoChenge?: boolean
    border?: boolean
}

export const Search = ({btn, btnComponent, onSearch, placeholder, autoChenge, border = false}:SearchProps) => {

    const inputSearch = useRef<HTMLInputElement>(null)
    const [value, setvalue] = useState<string>("")
    const [focus, setFocus] = useState<boolean>(false)

    const onFocus = () => {
        if(inputSearch.current)
        {
            inputSearch.current.focus()
            setFocus(true)
        }
    }

    const clear = () => {
        if(inputSearch.current)
        {
            inputSearch.current.focus()
            inputSearch.current.value=""
        }
        setvalue("")
        setFocus(true)
        if (autoChenge)
            onSearch("")
    }

    const onBlur = () => {
        clear()
        if(inputSearch.current)
        {
            inputSearch.current.blur()
            setFocus(false)
        }
    }

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setvalue(event.target.value)
        if (autoChenge)
            onSearch(event.target.value)
    }

    const enter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code === "Enter")
            onSearch(value)
    }

    return(
        <div className={`search-container ${border? "border": ""}`}>
            <div className="search-field">
                {
                    (focus)? 
                    <span onClick={onBlur}><ArrowLeft/></span>:
                    (btn)?
                    <span onClick={btn.onClick}>{btn.icon}</span>:
                    (btnComponent)?
                    btnComponent:
                    null
                }
                <input placeholder={placeholder} type="text" ref={inputSearch} onChange={change} onKeyDown={enter} value={value} onFocus={()=>setFocus(true)}/>
                {
                    (focus)?
                    <span onClick={clear}><X/></span>:
                    <span onClick={onFocus}><SearchIcon/></span>
                }
            </div>
        </div>
    )
}