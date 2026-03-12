import { styleType } from "../Base/Button/Button";

export interface DialogButtonType {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  success?: boolean
  hide?: boolean
  text: string
  danger?: {
    text: string,
    header: string
  }
  style?: React.CSSProperties
  disabled?: boolean
  styleType?: styleType
}