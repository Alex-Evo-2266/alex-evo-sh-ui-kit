export interface IColor{
    h:number
    s:number
    v:number
}

export interface IColorRGB{
    r:number
    g:number
    b:number
}

export function colorToCords(
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

export function initGradientShadeSpectrum(ctx:CanvasRenderingContext2D | null, canvas:HTMLCanvasElement, color?: string){
	if(!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
		
    if(!color) color = '#ff0000';
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
		
    var whiteGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    whiteGradient.addColorStop(0, "#fff");
    whiteGradient.addColorStop(1, "transparent");
    ctx.fillStyle = whiteGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
		
    var blackGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    blackGradient.addColorStop(0, "transparent");
    blackGradient.addColorStop(1, "#000");
    ctx.fillStyle = blackGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function moveShadeSpectrum(
	canvas:HTMLCanvasElement | null, 
	ctx:CanvasRenderingContext2D | null, 
	cursor:HTMLButtonElement, 
	onChange: (s:number, v:number)=>void) 
{
	if(!ctx || !canvas) return;
	canvas.addEventListener('mousedown', function(e) {
		startGetShadeColor(e, canvas, cursor, onChange);
	});
};

function getShadeColor(e:MouseEvent, canvas:HTMLCanvasElement | null, cursor:HTMLButtonElement, onChange: (s:number, v:number)=>void) {
	e.preventDefault();
	if (!canvas) return;
	const Rect = canvas.getBoundingClientRect()
	let y = e.clientY - Rect.top;
	if (y > Rect.height){ y = Rect.height};
	if (y < 0) { y = 0};
	let x = e.clientX - Rect.left;
	if (x > Rect.width){ x = Rect.width };
	if ( x < 0) { x = 0 };
	const percentY = y / Rect.height;
	const percentX = x / Rect.width;
	const v = 100 - (100 * percentY);
	const s = 100 * percentX;
	onChange(Math.round(s), Math.round(v))
	updateSpectrumCursor(cursor, x, y);
};

function startGetShadeColor(e:MouseEvent, canvas:HTMLCanvasElement | null, cursor:HTMLButtonElement, onChange: (s:number, v:number)=>void) {

	const mousemove = (event:MouseEvent) => getShadeColor(event, canvas, cursor, onChange)

	getShadeColor(e, canvas, cursor, onChange)
	cursor.classList.add('dragging');
	window.addEventListener('mousemove', mousemove);
	window.addEventListener('mouseup', endGetHueColor);

	function endGetHueColor() {
		cursor.classList.remove('dragging');
		window.removeEventListener('mousemove', mousemove);
		window.removeEventListener('mouseup', endGetHueColor);
	};
}

export function updateSpectrumCursor(cursor:HTMLButtonElement, x:number, y:number) {
	cursor.style.top = y + "px";
	cursor.style.left = x + "px";
}

export function initGradientHueSpectrum(ctx:CanvasRenderingContext2D | null, canvas:HTMLCanvasElement | null){
	if(!ctx || !canvas) return;
	const hueGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
	hueGradient.addColorStop(0.00, "hsl(0, 100%, 50%)");
	hueGradient.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
	hueGradient.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
	hueGradient.addColorStop(0.50, "hsl(180, 100%, 50%)");
	hueGradient.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
	hueGradient.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
	hueGradient.addColorStop(1.00, "hsl(360, 100%, 50%)");
	ctx.fillStyle = hueGradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function moveHueSpectrum(ctx:CanvasRenderingContext2D | null, canvas:HTMLCanvasElement | null, hueCursor:HTMLButtonElement, onChange: (hue:number)=>void) {
	if(!ctx || !canvas) return;
	canvas.addEventListener('mousedown', function(e) {
		startGetHueColor(e, hueCursor, canvas, onChange);
	});
};

function getHueColor(e:MouseEvent, canvas:HTMLCanvasElement | null, hueCursor:HTMLButtonElement, onChange: (hue:number)=>void) {
	e.preventDefault();
	if (!canvas) return;
	const hueRect = canvas.getBoundingClientRect()
	let y = e.clientY - hueRect.top;
	if (y > hueRect.height){ y = hueRect.height};
	if (y < 0) { y = 0};
	const percent = y / hueRect.height;
	const hue = 360 - (360 * percent);
	onChange(hue)
	updateHueCursor(hueCursor, y);
};

function startGetHueColor(e:MouseEvent, hueCursor:HTMLButtonElement, canvas:HTMLCanvasElement | null, onChange: (hue:number)=>void) {

	const mousemove = (event:MouseEvent) => getHueColor(event, canvas, hueCursor, onChange)

	getHueColor(e, canvas, hueCursor, onChange)
	hueCursor.classList.add('dragging');
	window.addEventListener('mousemove', mousemove);
	window.addEventListener('mouseup', endGetHueColor);

	function endGetHueColor() {
		hueCursor.classList.remove('dragging');
		window.removeEventListener('mousemove', mousemove);
		window.removeEventListener('mouseup', endGetHueColor);
	};
}

export function updateHueCursor(hueCursor:HTMLButtonElement, y:number) {
	hueCursor.style.top = y + "px";
}