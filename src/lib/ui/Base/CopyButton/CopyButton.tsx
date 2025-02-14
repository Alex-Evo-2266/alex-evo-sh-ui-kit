import { useCallback, useState } from "react";
import { IconButton } from "../IconButton/IconButton";
import { Check, Copy } from "../../Icons";
import './CopyButton.scss'
import { Typography } from "../../Text/Text/Typography";

export interface IconButtonProps{
    text: string
    supportText?: boolean
    className?: string
    classNameContainer?: string
    onClick?: (event:React.MouseEvent<HTMLButtonElement>)=>void
    onContextMenu?: (event:React.MouseEvent<HTMLButtonElement>)=>void
    disabled?: boolean
    style?: React.CSSProperties
    transparent?: boolean
}

export const CopyButton = ({transparent, className, onClick, onContextMenu, disabled, classNameContainer, style, text, supportText = true}: IconButtonProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (event:React.MouseEvent<HTMLButtonElement>) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Ошибка копирования", err);
    }
    onClick && onClick(event)
  },[text])

  if(supportText)
  {
    return(
      <label className="alex-evo-sh-ui-kit-copy-button">
        <IconButton 
            icon={copied?<Check/>:<Copy/>} 
            onClick={copyToClipboard}
            transparent={transparent}
            className={className}
            onContextMenu={onContextMenu}
            disabled={disabled}
            classNameContainer={classNameContainer}
            style={style}
        />
        <Typography type='body'>{copied ? "Скопировано!" : "Копировать"}</Typography>
      </label>
    )
  }

  return (
    <IconButton 
    icon={copied?<Check/>:<Copy/>} 
    onClick={copyToClipboard}
    transparent={transparent}
    className={className}
    onContextMenu={onContextMenu}
    disabled={disabled}
    classNameContainer={classNameContainer}
    style={style}
    />
  );
}
