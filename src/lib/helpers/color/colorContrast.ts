import { HEXtoHSL, HSLtoHEX } from "./colorConvert";

export const pSBC=(p:number,c0:string,c1:string | boolean = "",l?:boolean)=>{
	let r,g,b,P,f,t,h,m=Math.round,a=typeof(c1)=="string";
	if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
	h=c0.length>9
    h=a?(typeof(c1)=="string"&&c1.length>9)?true:c1=="c"?!h:false:h,f=pSBC.pSBCr(c0),P=p<0,t=c1&&(typeof(c1)=="string")&&c1!="c"?pSBC.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
	if(!f||!t)return null;
	if(l)r=m(P*(f.r??0)+p*(t.r??0)),g=m(P*(f.g??0)+p*(t.g??0)),b=m(P*(f.b??0)+p*(t.b??0));
	else r=m((P*(f.r??0)**2+p*(t.r??0)**2)**0.5),g=m((P*(f.g??0)**2+p*(t.g??0)**2)**0.5),b=m((P*(f.b??0)**2+p*(t.b??0)**2)**0.5);
	let alf=f.a??1
    t=t.a??1
    f=alf>=0||t>=0
    alf=(alf>=0||t>=0)?alf<0?t:t<0?alf:alf*P+t*p:0;
	if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(alf*1000)/1000:"")+")";
	else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(alf*255):0)).toString(16).slice(1,f?undefined:-2)
}

pSBC.pSBCr=(inputd:string)=>{
	const i=parseInt;
	let n=inputd.length;
    let x:{r?:number, g?:number, b?:number, a?:number} = {}
	if(n>9){
        const d:string[] = inputd.split(',')
		const [r, g, b, a] = d;
	        n = d.length;
		if(n<3||n>4)return null;
		x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
	}else{
		if(n==8||n==6||n<4)return null;
		if(n<6)inputd="#"+inputd[1]+inputd[1]+inputd[2]+inputd[2]+inputd[3]+inputd[3]+(n>4?inputd[4]+inputd[4]:"");
		let intd=i(inputd.slice(1),16);
		if(n==9||n==5)x.r=intd>>24&255,x.g=intd>>16&255,x.b=intd>>8&255,x.a=Math.round((intd&255)/0.255)/1000;
		else x.r=intd>>16,x.g=intd>>8&255,x.b=intd&255,x.a=-1
	}return x
};

export function shadeHSL(base: string, lightnessDelta: number) {
  const data = HEXtoHSL(base)
	if(!data)
		return base
  return HSLtoHEX(data.h as string, data.s as string, String(Math.min(100, Math.max(0, data.l + lightnessDelta))))
}