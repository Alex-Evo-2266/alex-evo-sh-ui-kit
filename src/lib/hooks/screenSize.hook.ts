import { useCallback, useEffect, useState } from "react"
import { ScreenSize } from "../model/sizeScreen"

interface ScreenSizeHookOption{
	mobileSize:number,
	bigSize:number,
}

const DefaultOption:ScreenSizeHookOption = {
	mobileSize: 720,
	bigSize: 1400
}

export const useScreenSize = (option:ScreenSizeHookOption = DefaultOption) => {

	if(option.bigSize <= 100 || option.mobileSize <= 100 || option.bigSize <= 100 || option.mobileSize >= option.bigSize)
	{
		console.error("useScreenSize: invalid option")
		option = DefaultOption
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