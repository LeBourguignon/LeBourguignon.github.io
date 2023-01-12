/*
* Cette fonction applique la dilatation sur l'image img avec un élément structurant carré de rayon radius.
*/

export function dilatation(img, radius, log = false) {
	const out = new ImageData(img.width, img.height);
	
	for (let i = 0; i < img.data.length; i += 4) {
		if(log) console.log((i)/img.data.length);

		out.data[i] = 0;
		out.data[i + 1] = 0;
		out.data[i + 2] = 0;
		out.data[i + 3] = img.data[i + 3];

		for (let j = -radius; j <= radius; j++) {
			for (let k = -radius; k <= radius; k++) {
				if ((i % (img.width * 4)) + k * 4 >= 0 && (i % (img.width * 4)) + k * 4 < img.width * 4) {
					if (img.data[i + j * (img.width * 4) + k * 4] > 0) {
						out.data[i] = 255;
						out.data[i + 1] = 255;
						out.data[i + 2] = 255;
						
						j = radius;
						k = radius;
					}
				}
			}
		}
    }
	if(log) console.log("Dilatation done");
	return out;
}

/*
* Cette fonction est appellée quand l'utilisateur clique sur le bouton "Dilatation".
* Elle applique la dilatation sur l'image.
*/

export function showDilatation() {
	const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = dilatation(img, radius);
    ctx.putImageData(out, 0, 0);
}