import { dilatation } from "./dilatation.js";
import { erosion } from "./erosion.js";

/*
* Cette fonction applique une fermeture sur l'image avec un élément structurant carré de rayon radius.
*/

export function closing(img, radius, log = false) {
    let out = dilatation(img, radius, log);
    out = erosion(out, radius, log);
    if(log) console.log("Closing done");
    return out;
}

/*
* Cette fonction est appellée quand l'utilisateur clique sur le bouton "Fermeture".
* Elle applique la fermeture sur l'image.
*/

export function showClosing() {
    const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = closing(img, radius);
    ctx.putImageData(out, 0, 0);
}