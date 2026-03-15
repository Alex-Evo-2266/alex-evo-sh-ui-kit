import { useCallback, useState } from "react"
import "./TimePickers.scss"
import { TextButton } from "../../Base/Button/Button"
import { Keyboard } from "../../Icons"

interface HoursProps{
	setHours: (number:number)=>void
}

interface MinutesProps{
	setMinutes: (number:number)=>void
}

interface SelectTimeProps{
	setMinutes: (number:number)=>void
	setHours: (number:number)=>void
	switchMode: ()=>void
	minutes: number
	hours: number
	onCancel: ()=>void
	onOK: ()=>void
}


export const SelectTime = ({setHours, setMinutes, switchMode, hours, minutes, onCancel, onOK}:SelectTimeProps) => {

	const [minutePage, setMinutePage] = useState<boolean>(false)

	const changeHours = useCallback((hour:number) => {
		setHours(hour)
		setMinutePage(true)
	},[setHours])

	const changeMinuts = useCallback((minute:number) => {
		setMinutes(minute)
		setMinutePage(false)
	},[setMinutes])

	const hide = useCallback(() => {
		setMinutePage(false)
		onCancel()
	},[])

	return(
		<>
			<div className="time-type"><p className="text-sm">Select time</p></div>
			<div className="time-input-container">
				<div className="time-input hours"><div className="input-container"><input disabled type="number" min={0} max={23} value={hours}/></div><span className="text-sm">Hour</span></div>
				<div className="time-separator">:</div>
				<div className="time-input minutes"><div className="input-container"><input disabled type="number" value={minutes} min={0} max={60}/></div><span className="text-sm">Minute</span></div>
			</div>
			<div className="clock-input-container">
				{
					(minutePage)?
					<Minuts setMinutes={changeMinuts}/>:
					<Hours setHours={changeHours}/>
				}
			</div>
			<div className="enter-time-action">
				<div className="enter-time-icon" onClick={()=>switchMode()}><Keyboard/></div>
				<TextButton className="little" onClick={hide}>Cancel</TextButton>
				<TextButton className="little" onClick={onOK}>OK</TextButton>
			</div>
		</>
	)
}


function Hours({setHours}: HoursProps){
	return(
	<div className="clock-input">
		<div className="clock-input-am">
			<span className="number-span" onClick={()=>setHours(1)}><span>1</span></span>
			<span className="number-span" onClick={()=>setHours(2)}><span>2</span></span>
			<span className="number-span" onClick={()=>setHours(3)}><span>3</span></span>
			<span className="number-span" onClick={()=>setHours(4)}><span>4</span></span>
			<span className="number-span" onClick={()=>setHours(5)}><span>5</span></span>
			<span className="number-span" onClick={()=>setHours(6)}><span>6</span></span>
			<span className="number-span" onClick={()=>setHours(7)}><span>7</span></span>
			<span className="number-span" onClick={()=>setHours(8)}><span>8</span></span>
			<span className="number-span" onClick={()=>setHours(9)}><span>9</span></span>
			<span className="number-span" onClick={()=>setHours(10)}><span>10</span></span>
			<span className="number-span" onClick={()=>setHours(11)}><span>11</span></span>
			<span className="number-span" onClick={()=>setHours(12)}><span>12</span></span>
		</div>
		<div className="clock-input-pm">
			<span className="number-span" onClick={()=>setHours(13)}><span>13</span></span>
			<span className="number-span" onClick={()=>setHours(14)}><span>14</span></span>
			<span className="number-span" onClick={()=>setHours(15)}><span>15</span></span>
			<span className="number-span" onClick={()=>setHours(16)}><span>16</span></span>
			<span className="number-span" onClick={()=>setHours(17)}><span>17</span></span>
			<span className="number-span" onClick={()=>setHours(18)}><span>18</span></span>
			<span className="number-span" onClick={()=>setHours(19)}><span>19</span></span>
			<span className="number-span" onClick={()=>setHours(20)}><span>20</span></span>
			<span className="number-span" onClick={()=>setHours(21)}><span>21</span></span>
			<span className="number-span" onClick={()=>setHours(22)}><span>22</span></span>
			<span className="number-span" onClick={()=>setHours(23)}><span>23</span></span>
			<span className="number-span" onClick={()=>setHours(0)}><span>0</span></span>
		</div>
		<span className="center"></span>
	</div>
	)
}
	
function Minuts({setMinutes}: MinutesProps){
	return(
	<div className="clock-input">
		<div className="clock-input-minute">
			<span className="number-span" onClick={()=>setMinutes(0)}><span>00</span></span>
			<span className="number-span" onClick={()=>setMinutes(5)}><span>05</span></span>
			<span className="number-span" onClick={()=>setMinutes(10)}><span>10</span></span>
			<span className="number-span" onClick={()=>setMinutes(15)}><span>15</span></span>
			<span className="number-span" onClick={()=>setMinutes(20)}><span>20</span></span>
			<span className="number-span" onClick={()=>setMinutes(25)}><span>25</span></span>
			<span className="number-span" onClick={()=>setMinutes(30)}><span>30</span></span>
			<span className="number-span" onClick={()=>setMinutes(35)}><span>35</span></span>
			<span className="number-span" onClick={()=>setMinutes(40)}><span>40</span></span>
			<span className="number-span" onClick={()=>setMinutes(45)}><span>45</span></span>
			<span className="number-span" onClick={()=>setMinutes(50)}><span>50</span></span>
			<span className="number-span" onClick={()=>setMinutes(55)}><span>55</span></span>
		</div>
		<span className="center"></span>
	</div>
	)
}