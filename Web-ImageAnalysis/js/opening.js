import { dilatation } from "./dilatation.js";
import { erosion } from "./erosion.js";

export function opening(img, radius, log = false) {
    let out = erosion(img, radius, log);
    out = dilatation(out, radius, log);
    if(log) console.log("Opening done");
    return out;
}

export function showOpening() {
    const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = opening(img, radius);
    ctx.putImageData(out, 0, 0);
}