/*
* Cette fonction est appelée quand l'utilisateur clique sur le bouton "Niveaux de gris".
* Elle applique le niveaux de gris sur l'image.
*/

export function grayscale() {
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < img.data.length; i += 4) {
        let count = img.data[i] + img.data[i + 1] + img.data[i + 2];
        let colour = count / 3;
    
        img.data[i] = colour;       // r
        img.data[i + 1] = colour;   // g
        img.data[i + 2] = colour;   // b
        //imgData.data[i + 3] = 255;    // a
    }
    ctx.putImageData(img, 0, 0);
}