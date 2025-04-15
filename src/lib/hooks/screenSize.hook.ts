import { useCallback, useEffect, useState } from "react"
import { ScreenSize } from "../model/sizeScreen"

interface ScreenSizeOption{
	mobileSize:number,
	bigSize:number,
}

export interface ScreenSizeHookOption{
	mobileSize?:number,
	bigSize?:number,
}

export const DefaultOption: ScreenSizeOption = {
	mobileSize: 720,
	bigSize: 1400
}

export const useScreenSize = (option_data:ScreenSizeHookOption = {}) => {

	const option:ScreenSizeOption = {
		bigSize: option_data.bigSize ?? DefaultOption.bigSize,
		mobileSize: option_data.mobileSize ?? DefaultOption.mobileSize
	}

	if(option.bigSize <= 100)
	{
		console.error("useScreenSize: invalid option")
		option.bigSize = DefaultOption.bigSize
	}
	if(option.mobileSize <= 100)
	{
		console.error("useScreenSize: invalid option")
		option.mobileSize = DefaultOption.mobileSize
	}
	if(option.mobileSize >= option.bigSize)
	{
		console.error("useScreenSize: invalid option")
		option.mobileSize = DefaultOption.mobileSize
		option.bigSize = DefaultOption.bigSize
	}

    const [screen, setScreen] = useState<ScreenSize>(ScreenSize.STANDART)

	const resize = useCallback(() => {
		if(window.innerWidth < option.mobileSize)
			setScreen(ScreenSize.MOBILE)
		else if(window.innerWidth < option.bigSize)
			setScreen(ScreenSize.STANDART)
		else
			setScreen(ScreenSize.BIG_SCREEN)
	},[window.innerWidth])

	useEffect(()=>{
		resize()
	},[resize])

	useEffect(()=>{
		window.addEventListener('resize', resize)
		return ()=>{
			window.removeEventListener('resize', resize)
		}
	},[resize])

    return{screen}
}