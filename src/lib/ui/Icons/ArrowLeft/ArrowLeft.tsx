import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";

export const ArrowLeft = (props:IconProps) => (
    <SVG {...{...props}} dpi="1024">
        <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="var(--On-surface-color)" />
    </SVG>
)