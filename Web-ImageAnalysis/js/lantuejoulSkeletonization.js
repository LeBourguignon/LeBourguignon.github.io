import { addition } from "./addition.js";
import { erosion } from "./erosion.js";
import { opening } from "./opening.js";
import { subtraction } from "./subtraction.js";

/*
* Cette fonction applique l'algorithme de Lantuejoul sur l'image.
*/

export function lantuejoulSkeletonization(img) {
    const ctx = document.getElementById('canvas').getContext('2d');

    let out = new ImageData(img.width, img.height);

    for (let i = 0; i < img.data.length; i += 4) {
        out.data[i] = 0;
		out.data[i + 1] = 0;
		out.data[i + 2] = 0;
		out.data[i + 3] = img.data[i + 3];
    }

    let before = new ImageData(img.width, img.height);
    let n = 0;

    while(!out.data.every((value, index) => value === before.data[index])) {
        for (let i = 0; i < out.data.length; i++)
            before.data[i] = out.data[i];

        let eroded = erosion(img, n);
        let opened = opening(eroded, 1);
        let sub = subtraction(eroded, opened);
        out = addition(out, sub)

        n++;
    }
    
    return out
}

/*
* Cette fonction affiche le squelette de l'image par la méthode de Lantuejoul
*/

export function showLantuejoulSkeletonization() {
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = lantuejoulSkeletonization(img);
    ctx.putImageData(out, 0, 0);
}