import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";
import { getColor } from "../Base/Svg";

export const UserIcon = (props: IconProps) => {
  const { primaryColor, secondaryColor } = getColor(props);

  return (
    <SVG {...{ ...props}}>
      <g id="SVGRepo_iconCarrier">
        <path
          d={`
            M12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87
            C9.45055 10.79 7.56055 8.84 7.56055 6.44
            C7.56055 3.99 9.54055 2 12.0005 2
            C14.4505 2 16.4405 3.99 16.4405 6.44
            C16.4305 8.84 14.5405 10.79 12.1605 10.87Z
          `}
          fill={secondaryColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d={`
            M7.1607 14.56C4.7407 16.18 4.7407 18.82 7.1607 20.43
            C9.9107 22.27 14.4207 22.27 17.1707 20.43
            C19.5907 18.81 19.5907 16.17 17.1707 14.56
            C14.4307 12.73 9.9207 12.73 7.1607 14.56Z
          `}
          fill={primaryColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </SVG>
  );
};