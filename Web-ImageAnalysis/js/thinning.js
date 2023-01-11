import { addition } from "./addition.js";
import { subtraction } from "./subtraction.js";

export const constL = [
    [255,   255,    255],
    [null,  255,    null],
    [0,     0,      0]
];

export const constM = [
    [255,   255,    null],
    [255,   255,    0],
    [null,  0,      0]
];

export function thinningRot(img, structuringElement) {
    let out = new ImageData(img.width, img.height);

    for (let i = 0; i < img.data.length; i += 4) {
        out.data[i] = 255;
		out.data[i + 1] = 255;
		out.data[i + 2] = 255;
		out.data[i + 3] = img.data[i + 3];

        for (let j = -1; j < 2; j++) {
            for (let k = -1; k < 2; k++) {
                if ((i % (img.width * 4)) + k * 4 >= 0 && (i % (img.width * 4)) + k * 4 < img.width * 4 && (i + j * (img.width * 4) + k * 4) >= 0 && (i + j * (img.width * 4) + k * 4) < img.data.length) {
                    if (!(structuringElement[j+1][k+1] == img.data[i + j * (img.width * 4) + k * 4]  || structuringElement[j+1][k+1] == null)) {
                        out.data[i] = 0;
                        out.data[i + 1] = 0;
                        out.data[i + 2] = 0;

                        j = 2;
                        k = 2;
                    }
                }
                else {
                    if (!(structuringElement[j+1][k+1] == 0 || structuringElement[j+1][k+1] == null)) {
                        out.data[i] = 0;
                        out.data[i + 1] = 0;
                        out.data[i + 2] = 0;

                        j = 2;
                        k = 2;
                    }
                }
            }
        }
    }
    return out;
}

export function thinning(img) {
    let localL = constL;
    let localM = constM;

    let out = thinningRot(img, localL);
    out = addition(out, thinningRot(img, localM));
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = addition(out, thinningRot(img, localL));
    out = addition(out, thinningRot(img, localM));
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = addition(out, thinningRot(img, localL));
    out = addition(out, thinningRot(img, localM));
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = addition(out, thinningRot(img, localL));
    out = addition(out, thinningRot(img, localM));

    out = subtraction(img, out);

    return out;
}

export function showThinning() {
	const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = thinning(img);
    ctx.putImageData(out, 0, 0);
}