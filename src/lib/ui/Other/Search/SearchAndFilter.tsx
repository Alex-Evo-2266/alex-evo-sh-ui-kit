
import { IPoint } from "../../../model/point"
import { ModalPortal } from "../../../portal/dialog"
import { ArrowLeft, X, Search as SearchIcon, FilterIcon } from "../../Icons"
import { FilterGroup, MultiFilter, SelectedFilters } from "../Filter/Filter"
import "./Search.scss"
import { useRef, useState } from "react"

export interface ButtonSearch{
    onClick: (e?:React.MouseEvent<HTMLSpanElement>) => void
    icon: React.ReactNode
}

export interface SearchProps{
    onSearch: (data: string)=>void
    placeholder?: string
    autoChenge?: boolean
    filters: FilterGroup[];
    selectedFilters: SelectedFilters;
    onChangeFilter: (selected: SelectedFilters) => void;
}

export const SearchAndFilter = ({
    onSearch, 
    placeholder, 
    autoChenge,
    filters,
    selectedFilters,
    onChangeFilter
}:SearchProps) => {

    const inputSearch = useRef<HTMLInputElement>(null)
    const [value, setvalue] = useState<string>("")
    const [focus, setFocus] = useState<boolean>(false)
    const [filterPoz, setFilterPoz] = useState<IPoint | null>(null)

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

    const openFilter = (e:React.MouseEvent<HTMLSpanElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setFilterPoz({
            x: rect.left,
            y: rect.bottom, // ниже элемента
        });
    }

    return(
        <>
        <div className="search-container">
            <div className="search-field">
                {
                    (focus)? 
                    <span onClick={onBlur}><ArrowLeft/></span>:
                    <span onClick={openFilter}><FilterIcon/></span>
                }
                <input placeholder={placeholder} type="text" ref={inputSearch} onChange={change} onKeyDown={enter} value={value} onFocus={()=>setFocus(true)}/>
                {
                    (focus)?
                    <span onClick={clear}><X/></span>:
                    <span onClick={onFocus}><SearchIcon/></span>
                }
            </div>
        </div>
        <ModalPortal container={document.body}>
            <MultiFilter point={filterPoz ?? undefined} onClose={()=>setFilterPoz(null)} isOpen={!!filterPoz} filters={filters} selectedFilters={selectedFilters} onChange={onChangeFilter}/>
        </ModalPortal>
        </>
        
    )
}