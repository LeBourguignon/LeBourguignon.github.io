import { dilatation } from "./dilatation.js";
import { erosion } from "./erosion.js";

/*
* Cette fonction applique une ouverture sur l'image avec un élément structurant carré de rayon radius.
*/

export function opening(img, radius, log = false) {
    let out = erosion(img, radius, log);
    out = dilatation(out, radius, log);
    if(log) console.log("Opening done");
    return out;
}

/*
* Cette fonction est appellée quand l'utilisateur clique sur le bouton "Ouverture".
* Elle applique l'ouverture sur l'image.
*/

export function showOpening() {
    const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = opening(img, radius);
    ctx.putImageData(out, 0, 0);
}