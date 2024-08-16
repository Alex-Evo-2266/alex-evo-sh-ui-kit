import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './ColorPicker.scss'
import { IColor, IColorRGB, initGradientHueSpectrum, initGradientShadeSpectrum, moveHueSpectrum, moveShadeSpectrum, updateHueCursor, updateSpectrumCursor } from './helpers/canvasColorPickerHelpers'
import { HEXtoRGB, HSVtoRGB, RGBtoHEX, RGBtoHSV } from '../../../helpers/colorConvert'
import { BasicTemplateDialog } from '../../Dialog/TemplateDialog/BasicTemplateDialog'

const DEFAULT_COLORS = [
    '#FFFFFF',
    '#FFFB0D',
    '#0532FF',
    '#FF9300', 
    '#00F91A', 
    '#FF2700', 
    '#000000', 
    '#686868', 
    '#EE5464', 
    '#D27AEE', 
    '#5BA8C4', 
    '#E64AA9'
  ]

interface ColorPickerProps{
    onHide?: ()=>void
    onChange?: (hexColor: string)=>void
    beginColor?: string
    userColor?: string[]
    onAddColor?: (colors: string[])=>void
}

export const ColorPicker:React.FC<ColorPickerProps> = ({onHide, beginColor, onChange, onAddColor, userColor = []}) => {

    const hueCanvas = useRef<HTMLCanvasElement>(null)
    const hueCursor = useRef<HTMLButtonElement>(null)

    const spectrumCanvas = useRef<HTMLCanvasElement>(null)
    const spectrumCursor = useRef<HTMLButtonElement>(null)

    const [color, setColor] = useState<IColor>(beginColor?RGBtoHSV(HEXtoRGB(beginColor)):{h:0, s:1, v:0.5})
    const RGBColor:IColorRGB = useMemo(()=>HSVtoRGB(color), [color])
    const HEXColor:string = useMemo(()=>"#"+RGBtoHEX(RGBColor), [RGBColor])
    const [hexMode, setHexMode] = useState<boolean>(false)
    const [HEXColorBuff, setHEXColorBuff] = useState<string>(HEXColor)
    const HEXColorFormat:string = useMemo(()=>(HEXColorBuff[0] != '#')?"#" + HEXColorBuff:HEXColorBuff, [HEXColorBuff])

    function colorToCords(
        spectrumCanvas:HTMLCanvasElement | null, 
        spectrumCursor:HTMLButtonElement, 
        hueCanvas: HTMLCanvasElement | null,
        hueCursor: HTMLButtonElement,
        color:IColor)
    {
        if (!spectrumCanvas || !hueCanvas) return;
        try{
            const RectSpectrum = spectrumCanvas.getBoundingClientRect()
            const RectHue = hueCanvas.getBoundingClientRect()
            const x = Math.round(color.s * RectSpectrum.width)
            const y = Math.round((1 - color.v) * RectSpectrum.height)
            const z = ((360 - (color.h * 360)) / 360) * RectHue.height
            updateSpectrumCursor(spectrumCursor, x, y)
            updateHueCursor(hueCursor, z)
        }
        catch{}
    }

    const setColorHandler = (hex:string) => {
        setColor(RGBtoHSV(HEXtoRGB(hex)))
        setHEXColorBuff(hex)
    }

    const addColor = useCallback(()=>{
        onAddColor && onAddColor([...userColor, HEXColor])
    },[onAddColor, userColor, HEXColor])

    const clickGetColor = useCallback(()=>{
        onChange && onChange(HEXColor)
    },[onChange, HEXColor])

    const rgbHandler = useCallback((name: "r"|"g"|"b", value: number) =>{
        setColor(RGBtoHSV({...RGBColor, [name]:value}))
        setHEXColorBuff(RGBtoHEX({...RGBColor, [name]:value}))
    },[RGBColor])

    const hexHandler = useCallback((value: string) =>{
        setHEXColorBuff(value)
    },[])

    useEffect(()=>{
        if(HEXColorBuff.length === 4 || HEXColorBuff.length === 7)
        setColor(RGBtoHSV(HEXtoRGB(HEXColorBuff)))
    },[HEXColorBuff])

    useEffect(()=>{
        if(!spectrumCanvas.current || !hueCanvas.current || !hueCursor.current || !spectrumCursor.current) return;
        const SpectrumCtx = spectrumCanvas.current.getContext('2d');
        initGradientShadeSpectrum(SpectrumCtx, spectrumCanvas.current, `#${RGBtoHEX(HSVtoRGB(color.h, 1, 1))}`)
        colorToCords(spectrumCanvas.current, spectrumCursor.current, hueCanvas.current, hueCursor.current, color)
    },[color])

    useEffect(()=>{
        if(!spectrumCanvas.current || !spectrumCursor.current) return;
        const SpectrumCtx = spectrumCanvas.current.getContext('2d');
        moveShadeSpectrum(spectrumCanvas.current, SpectrumCtx, spectrumCursor.current, (s, v)=>{
            setColor(prev=>{
                const newColor = {...prev, s: s/100, v: v/100}
                setHEXColorBuff(RGBtoHEX(HSVtoRGB(newColor)))
                return newColor
            })
        })
    },[])

    useEffect(()=>{
        if(!hueCanvas.current || !hueCursor.current) return;
        const hueCtx = hueCanvas.current.getContext('2d');
        initGradientHueSpectrum(hueCtx, hueCanvas.current)
        moveHueSpectrum(hueCtx, hueCanvas.current, hueCursor.current, (hue)=>{
            setColor(prev=>{
                const newColor = {...prev, h: hue/360}
                setHEXColorBuff(RGBtoHEX(HSVtoRGB(newColor)))
                return newColor
            })
        })
    },[])

    useEffect(()=>{
        console.log(color, RGBColor)
    },[color])

    return(
        <BasicTemplateDialog className="color-picker-panel" onHide={onHide} clearStyle>
            <div className='panel-row' style={{padding: 0}}>
                <div className='swatches default-swatches'>
                {
                    DEFAULT_COLORS.map((item, index)=>(
                        <button onClick={()=>setColorHandler(item)} className='swatch' key={index} style={{backgroundColor: item}}></button>
                    ))
                }
                </div>
                <button className='button-color-picker eyedropper' onClick={clickGetColor}>Get Color</button>
            </div>
            <div className='panel-row' style={{padding: 0}}>
                <div className='spectrum-map spectrum-cursor'>
                    <button ref={spectrumCursor} className='color-cursor spectrum-cursor'></button>
                    <canvas ref={spectrumCanvas} className='spectrum-canvas spectrum-canvas-color-picker'></canvas>
                </div>
                <div className='hue-map'>
                    <button ref={hueCursor} className='color-cursor hue-cursor'></button>
                    <canvas ref={hueCanvas} className='hue-canvas hue-canvas-color-picker'></canvas>
                </div>
            </div>
            <div className='panel-row' style={{padding: 0}}>
                <div className={`field-group value-fields rgb-fields ${hexMode?"":"active"}`}>
                    <div className='field-group'>
                        <label className='field-label'>R:</label>
                        <input type="number" max="255" min="0" value={RGBColor.r} onChange={(e)=>rgbHandler("r", Number(e.target.value))} className='field-input rgb-input'/>
                    </div>
                    <div className='field-group'>
                        <label className='field-label'>G:</label>
                        <input type="number" max="255" min="0" value={RGBColor.g} onChange={(e)=>rgbHandler("g", Number(e.target.value))} className='field-input rgb-input'/>
                    </div>
                    <div className='field-group'>
                        <label className='field-label'>B:</label>
                        <input type="number" max="255" min="0" value={RGBColor.b} onChange={(e)=>rgbHandler("b", Number(e.target.value))} className='field-input rgb-input'/>
                    </div>
                </div>
                <div className={`field-group value-fields hex-field ${hexMode?"active":""}`}>
                    <label className='field-label'>Hex:</label>
                    <input type="text" className='field-input' value={HEXColorFormat} onChange={(e)=>hexHandler(e.target.value)}/>
                </div>
                <button className='button-color-picker mode-toggle' onClick={()=>setHexMode(prev=>!prev)}>Mode</button>
            </div>
            <div className='panel-row' style={{padding: 0}}>
                <h2 className='panel-header'>User Colors</h2>
                <div id='user-swatches' className='swatches custom-swatches'>
                {
                    userColor?
                    userColor.map((item, index)=>(
                        <button onClick={()=>setColorHandler(item)} className='swatch' key={index} style={{backgroundColor: item}}></button>
                    )):
                    null
                }
                </div>
                <button onClick={addColor} className='button-color-picker add-swatch'>
                    <span style={{backgroundColor: `#${RGBtoHEX(HSVtoRGB(color))}`}} className='color-indicator'></span>
                    <span>Add to Swatches</span>
                </button>
            </div>
        </BasicTemplateDialog>
    )
}