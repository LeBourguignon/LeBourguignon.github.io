/*
* Cette fonction est appellée quand l'utilisateur clique sur le bouton "Seuillage".
* Elle applique le seuillage sur l'image.
*/

export function thresholding() {
	const slider = document.getElementById("rangeThresholding");
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < img.data.length; i += 4) {
        let count = img.data[i] + img.data[i + 1] + img.data[i + 2];

        let colour = 0;
        if (count / 3 > slider.value) {
            colour = 255;
        }

        img.data[i] = colour;       // r
        img.data[i + 1] = colour;   // g
        img.data[i + 2] = colour;   // b
        img.data[i + 3] = 255;      // a
    }
    ctx.putImageData(img, 0, 0);
}