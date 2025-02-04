import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";
import { getColor } from "../Base/Svg";

export const LogoutIcon = (props: IconProps) => {
  const { primaryColor } = getColor(props);

  return (
    <SVG {...props}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="
            M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868
            C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868
            C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16
            C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213
            C20.2429 22 18.8286 22 16.0002 22H15.0002
            C12.1718 22 10.7576 22 9.87889 21.1213
            C9.11051 20.3529 9.01406 19.175 9.00195 17
          "
          stroke={primaryColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="
            M15 12L2 12
            M2 12L5.5 9
            M2 12L5.5 15
          "
          stroke={primaryColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </SVG>
  );
};