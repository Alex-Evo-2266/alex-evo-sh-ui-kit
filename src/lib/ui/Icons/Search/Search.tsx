import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";

export const Search = (props:IconProps) => (
    <SVG {...{...props}}>
        <path fill="none" stroke="var(--On-surface-color)" fillRule="evenodd" clipRule="evenodd" d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fill="none" d="M15.989 15.4905L19.5 19.0015" stroke="var(--On-surface-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SVG>
)