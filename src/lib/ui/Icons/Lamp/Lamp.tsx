import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";
import { getColor } from "../Base/Svg";

export const LampIcon = (props: IconProps) => {
    const { primaryColor, secondaryColor } = getColor(props);

    return (
        <SVG {...props}>
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
                <circle
                    cx="12"
                    cy="9"
                    r="7"
                    fill={secondaryColor}
                />
                <path
                    d="M11 14V9.75C11 9.05964 10.4404 8.5 9.75 8.5C9.05964 8.5 8.5 9.05964 8.5 9.75C8.5 10.4404 9.05964 11 9.75 11H14.25C14.9404 11 15.5 10.4404 15.5 9.75C15.5 9.05964 14.9404 8.5 14.25 8.5C13.5596 8.5 13 9.05964 13 9.75V14"
                    stroke={primaryColor}
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 16.5637C15 16.4535 14.885 16.3806 14.784 16.4245C13.9307 16.7947 12.9893 17 12 17C11.0107 17 10.0693 16.7947 9.21605 16.4245C9.11496 16.3806 9 16.4535 9 16.5637V18.5C9 19.8807 10.1193 21 11.5 21H12.5C13.8807 21 15 19.8807 15 18.5V16.5637Z"
                    fill={primaryColor}
                />
            </g>
        </SVG>
    );
};
