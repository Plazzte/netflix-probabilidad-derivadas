export const time=x=>0.01*x*x+0.2*x+1;
export const derivative=x=>0.02*x+0.2;
export const exactChange=x=>time(x+1)-time(x);
export const probability=(watched,total=200)=>watched/total;
export const clamp=(value,min,max)=>Math.min(max,Math.max(min,Number.isFinite(Number(value))?Math.round(Number(value)):min));
export const format=(n,digits=2)=>new Intl.NumberFormat('es-CO',{maximumFractionDigits:digits}).format(n);
