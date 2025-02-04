import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";
import { getColor } from "../Base/Svg";

export const MinusUserIcon = (props: IconProps) => {
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
            M13.8302 18.0699
            H10.1802
            C9.80023 18.0699 9.49023 17.7599 9.49023 17.3799
            C9.49023 16.9999 9.80023 16.6899 10.1802 16.6899
            H13.8302
            C14.2102 16.6899 14.5202 16.9999 14.5202 17.3799
            C14.5102 17.7599 14.2102 18.0699 13.8302 18.0699Z"
          fill={primaryColor}
        ></path>
      </g>
    </SVG>
  );
};
