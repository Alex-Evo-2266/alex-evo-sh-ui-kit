import React, { createContext, useRef, useState } from "react";
import { Snackbar } from "../Other/Snackbar/Snackbar";

export interface IOptionBaseSnackbar{
	onClick?: ()=>void
	buttonText?: string
	closeButton?: boolean
	backgroundColor?: string,
	color?: string
	className?: string
}

export interface IOptionShowSnackbar extends IOptionBaseSnackbar{
	delay?: number
}

export interface IOptionSnackbar extends IOptionBaseSnackbar{
	onHide?: ()=>void
}

export interface SnackbarProps{
	visible: boolean
	option?:IOptionSnackbar
	text: string
}

interface ISneckbarContext{
	showSnackbar: (text:string, option?: IOptionShowSnackbar)=>void
	hideSnackbar: ()=>void
}

const initData: ISneckbarContext = {
	showSnackbar: (_:string)=>{},
	hideSnackbar: ()=>{}
}

export const SneckbarContext = createContext<ISneckbarContext>(initData)


export const SneckbarProvider:React.FC<{children: React.ReactNode}> = ({children}) => {

	const [snackbarValue, setSnackbar] = useState<SnackbarProps>({visible: false, text: ""})
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const showSnackbar = (text:string, option?: IOptionShowSnackbar) => {
		setSnackbar({visible: true, text, option})

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		if (!option?.closeButton) {
			timeoutRef.current = setTimeout(() => hideSnackbar(), option?.delay ?? 3000);
		}
	}

	const hideSnackbar = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		setSnackbar({ visible: false, text: "" });
	}


	return (
		<SneckbarContext.Provider value={{showSnackbar, hideSnackbar}}>
			<Snackbar
			{...snackbarValue}
			option={{
				...snackbarValue.option,
				onHide: snackbarValue.option?.closeButton? hideSnackbar: undefined, // гарантируем, что при нажатии на X скроется
			}}
			/>
		{children}
		</SneckbarContext.Provider>
	)
}