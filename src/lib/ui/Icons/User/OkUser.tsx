import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";
import { getColor } from "../Base/Svg";

export const OkUserIcon = (props: IconProps) => {
  const { primaryColor, secondaryColor } = getColor(props);

  return (
    <SVG {...{ ...props }}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="
            M12 2
            C9.38 2 7.25 4.13 7.25 6.75
            C7.25 9.32 9.26 11.4 11.88 11.49
            C11.96 11.48 12.04 11.48 12.1 11.49
            C12.12 11.49 12.13 11.49 12.15 11.49
            C12.16 11.49 12.16 11.49 12.17 11.49
            C14.73 11.4 16.74 9.32 16.75 6.75
            C16.75 4.13 14.62 2 12 2Z"
          fill={primaryColor}
        ></path>
        <path
          d="
            M17.0809 14.1599
            C14.2909 12.2999 9.74094 12.2999 6.93094 14.1599
            C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799
            C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899
            C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999
            C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899
            C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599
            C19.0309 16.1399 18.3409 14.9899 17.0809 14.1599Z"
          fill={secondaryColor}
        ></path>
        <path
          d="
            M11.3702 19.26
            C11.2102 19.26 11.0502 19.19 10.9302 19.08
            L9.67023 17.82
            C9.43023 17.58 9.43023 17.18 9.67023 16.94
            C9.91023 16.7 10.3102 16.7 10.5502 16.94
            L11.3702 17.76
            L13.4502 15.68
            C13.6902 15.44 14.0902 15.44 14.3302 15.68
            C14.5702 15.92 14.5702 16.32 14.3302 16.56
            L11.8102 19.08
            C11.6902 19.2 11.5302 19.26 11.3702 19.26Z"
          fill={primaryColor}
        ></path>
      </g>
    </SVG>
  );
};
