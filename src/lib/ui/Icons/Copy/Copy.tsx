<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>

import { IconProps } from "../Base/iconProps";
import { getColor, SVG } from "../Base/Svg";


export const Copy = (props:IconProps) => {
    const { primaryColor, secondaryColor } = getColor(props);
    
    return(
        <SVG {...{...props}}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <g id="style=stroke"> 
                    <g id="copy"> 
                        <path 
                        id="rec (Stroke)" 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M6.25 5.25C6.25 2.50265 8.43733 0.25 11.1667
                        0.25H17.8333C20.5627 0.25 22.75 2.50265 22.75 
                        5.25V13.75C22.75 16.4974 20.5627 18.75 17.8333 18.75C17.4191 
                        18.75 17.0833 18.4142 17.0833 18C17.0833 17.5858 17.4191 17.25 
                        17.8333 17.25C19.7064 17.25 21.25 15.6971 21.25 13.75V5.25C21.25 
                        3.30293 19.7064 1.75 17.8333 1.75H11.1667C9.29363 1.75 7.75 3.30293 
                        7.75 5.25C7.75 5.66421 7.41421 6 7 6C6.58579 6 6.25 5.66421 6.25 5.25Z" 
                        fill={secondaryColor}></path> 
                        <path 
                        id="rec (Stroke)_2" 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M1.25 10.25C1.25 7.50265 3.43733 5.25 6.16667 5.25H12.8333C15.5627 
                        5.25 17.75 7.50265 17.75 10.25V18.75C17.75 21.4974 15.5627 23.75 12.8333 
                        23.75H6.16667C3.43733 23.75 1.25 21.4974 1.25 18.75V10.25ZM6.16667 6.75C4.29363
                        6.75 2.75 8.30293 2.75 10.25V18.75C2.75 20.6971 4.29363 22.25 6.16667 22.25H12.8333C14.7064 
                        22.25 16.25 20.6971 16.25 18.75V10.25C16.25 8.30293 14.7064 6.75 12.8333 6.75H6.16667Z" 
                        fill={primaryColor}></path> 
                    </g> 
                </g> 
            </g>
        </SVG>
    )
}