export function erosion(img, radius, log = false) {
	const out = new ImageData(img.width, img.height);
	
    for (let i = 0; i < img.data.length; i += 4) {
        if(log) console.log((i)/img.data.length);

		out.data[i] = 0;
		out.data[i + 1] = 0;
		out.data[i + 2] = 0;
		out.data[i + 3] = img.data[i + 3];

        let count = 0;

		for (let j = -radius; j <= radius; j++) {
			for (let k = -radius; k <= radius; k++) {
				if ((i % (img.width * 4)) + k * 4 >= 0 && (i % (img.width * 4)) + k * 4 < img.width * 4) {
					if (img.data[i + j * (img.width * 4) + k * 4] > 0) {
                        count++;
                    }
                    else {
                        j = radius;
						k = radius;
                    }
				}
                else {
                    j = radius;
                    k = radius;
                }
			}
		}

        if (count === (radius * 2 + 1) ** 2) {
            out.data[i] = 255;
            out.data[i + 1] = 255;
            out.data[i + 2] = 255;
        }
    }
	if(log) console.log("Erosion done");
    return out;
}

export function showErosion() {
    const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = erosion(img, radius);
    ctx.putImageData(out, 0, 0);
}