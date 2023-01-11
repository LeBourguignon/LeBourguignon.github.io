import { thinning } from "./thinning.js";

export function homotopicSkeletonization(img) {
    let before = new ImageData(img.width, img.height);

    for (let i = 0; i < img.data.length; i++)
        before.data[i] = img.data[i];

    let out = thinning(img);

    while (!out.data.every((value, index) => value === before.data[index])) {
        for (let i = 0; i < out.data.length; i++)
            before.data[i] = out.data[i];

        out = thinning(out);
    }

    return out;
}

export function showHomotopicSkeletonization() {
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = homotopicSkeletonization(img);
    ctx.putImageData(out, 0, 0);
}