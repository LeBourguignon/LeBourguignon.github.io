/*
* Cette fonction soustrait deux images de même tailles (largeur et hauteur) et retourne une nouvelle image.
*/

export function subtraction(img1, img2) {
    var out = new ImageData(img1.width, img1.height);

    if (img1.width == img2.width && img1.height == img2.height) {
        for (let i = 0; i < img1.data.length; i += 4) {
            out.data[i] = Math.max(0, img1.data[i] - img2.data[i]);
            out.data[i + 1] = Math.max(0, img1.data[i + 1] - img2.data[i + 1]);
            out.data[i + 2] = Math.max(0, img1.data[i + 2] - img2.data[i + 2]);
            out.data[i + 3] = Math.min(img1.data[i + 3], img2.data[i + 3]);
        }
    }
    else {
        out = null;
    }

    return out;
}