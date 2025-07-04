import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";
import { getColor } from "../Base/Svg";

export const Home = (props: IconProps) => {
    const { primaryColor, secondaryColor } = getColor(props);

    return (
        <SVG {...props}>
            <g stroke="none" strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
                <path
                    d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                    stroke={secondaryColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill={secondaryColor}
                />
                <path
                    d="M2 11L10.1259 4.49931C11.2216 3.62279 12.7784 3.62279 13.8741 4.49931L22 11"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M4 22V9.5"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M20 22V9.5"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393C9 14.8787 9 15.5858 9 17V22"
                    stroke={secondaryColor}
                    fill={secondaryColor}
                    strokeWidth="1.5"
                />
                <path
                    d="M22 22L2 22"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                    stroke={secondaryColor}
                    fill={secondaryColor}
                    strokeWidth="1.5"
                />
            </g>
        </SVG>
    );
};
