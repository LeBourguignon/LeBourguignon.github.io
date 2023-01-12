import { addition } from "./addition.js";
import { subtraction } from "./subtraction.js";


/*
* Définition des matrices structurantes de l'épaississement
* On utilise ici deux matrices différentes car nous n'avons pas réussi à faire des rotations de 45 degrés
* Il y a une matrice avec une rotation de 0 degré et une autre à 45 degré sur lesquelles on appliquera des rotations de 90 degrés
*/

export const constL = [
    [255,   255,    255],
    [null,  0,      null],
    [0,     0,      0]
];

export const constM = [
    [255,   255,    null],
    [255,   0,      0],
    [null,  0,      0]
];

/*
* Cette fonction épaissit une image en appliquant la matrice structurante passée en paramètre.
*/

export function thickeningRot(img, structuringElement) {
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

/*
* Cette fonction épaissit une image en appliquant les 8 rotations de la matrice structurante.
*/

export function thickening(img) {
    let localL = constL;
    let localM = constM;

    let out = thickeningRot(img, localL);
    out = addition(out, thickeningRot(subtraction(img, out), localM));
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = addition(out, thickeningRot(subtraction(img, out), localL));
    out = addition(out, thickeningRot(subtraction(img, out), localM));
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = addition(out, thickeningRot(subtraction(img, out), localL));
    out = addition(out, thickeningRot(subtraction(img, out), localM));
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = addition(out, thickeningRot(subtraction(img, out), localL));
    out = addition(out, thickeningRot(subtraction(img, out), localM));

    out = addition(img, out);

    return out;
}

/*
* Cette fonction affiche l'image épaissie
*/

export function showThickening() {
	const ctx = document.getElementById('canvas').getContext('2d');
    const imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = thickening(imgData);
    ctx.putImageData(out, 0, 0);
}