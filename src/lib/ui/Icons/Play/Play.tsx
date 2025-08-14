import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";
import { getColor } from "../Base/Svg";

export const Play = (props: IconProps) => {
  const { primaryColor } = getColor(props);

  return (
    <SVG {...{ ...props, dpi: "24" }}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z"
          stroke={primaryColor}
          strokeWidth="1.5"
          fill="none"
        />
      </g>
    </SVG>
  );
};
