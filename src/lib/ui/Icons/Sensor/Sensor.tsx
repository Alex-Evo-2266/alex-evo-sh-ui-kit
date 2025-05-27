import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";
import { getColor } from "../Base/Svg";

export const Sensor = (props: IconProps) => {
    const { primaryColor } = getColor(props);

    return (
        <SVG {...props}>
            <g>
                <path
                    d="M8 8V10M12 8V10"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                    stroke={primaryColor}
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </SVG>
    );
};

export const Sensor2 = (props: IconProps) => {
    const { primaryColor } = getColor(props);

    return (
        <SVG {...props}>
            <g>
                <path
                    d="M19 8.5V7.2C19 6.0799 19 5.51984 18.782 5.09202C18.5903 4.71569 18.2843 4.40973 17.908 4.21799C17.4802 4 16.9201 4 15.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H9.5"
                    stroke={primaryColor}
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M7 8V12M11 8V12"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M19.8284 19.8284C18.2663 21.3905 15.7337 21.3905 14.1716 19.8284C13.3905 19.0474 13 18.0237 13 17C13 15.9763 13.3905 14.9526 14.1716 14.1716C14.1716 14.1716 14.5 15 15.5 15.5C15.5 14.5 15.75 13 16.9929 12C18 13 19.0456 13.3887 19.8284 14.1716C20.6095 14.9526 21 15.9763 21 17C21 18.0237 20.6095 19.0474 19.8284 19.8284Z"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </SVG>
    );
};

export const Sensor3 = (props: IconProps) => {
    const { primaryColor } = getColor(props);

    return (
        <SVG {...props}>
            <g>
                <path
                    d="M6 9V13M10 9V13"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20 12H22M20 8L22 6M22 18L20 16"
                    stroke={primaryColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.2 19H12.8C13.9201 19 14.4802 19 14.908 18.782C15.2843 18.5903 15.5903 18.2843 15.782 17.908C16 17.4802 16 16.9201 16 15.8V8.2C16 7.0799 16 6.51984 15.782 6.09202C15.5903 5.71569 15.2843 5.40973 14.908 5.21799C14.4802 5 13.9201 5 12.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.71569 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19Z"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </SVG>
    );
};

export const SensorWarning = (props: IconProps) => {
    const { primaryColor } = getColor(props);

    return (
        <SVG {...props}>
            <g>
                <path
                    d="M15.2458 13V15M15.2458 18H15.2558"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8 8V12"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.5 19.9203C5.34666 19.8886 5.21397 19.8441 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.0799 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V7.5"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13.4236 21H17.0682C18.7826 21 19.6399 21 20.1561 20.6389C20.6069 20.3236 20.908 19.8366 20.9884 19.2924C21.0805 18.6691 20.6971 17.9024 19.9304 16.3689L18.1081 12.7244C17.1869 10.8819 16.7263 9.96072 16.103 9.66511C15.5606 9.40785 14.9313 9.40785 14.3889 9.66511C13.7656 9.96072 13.305 10.8819 12.3837 12.7244L10.5615 16.3689C9.79474 17.9024 9.41138 18.6691 9.50346 19.2924C9.58387 19.8366 9.88489 20.3236 10.3357 20.6389C10.852 21 11.7092 21 13.4236 21Z"
                    stroke={primaryColor}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </SVG>
    );
};

