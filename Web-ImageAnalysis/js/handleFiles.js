let currentImage = null;

/*
* Cette fonction est appellée quand l'utilisateur seletionne une image à envoyer.
* Elle affiche l'image dans le canvas.
*/

export function handleFiles(e) {
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = new Image;
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
		currentImage = img;
        ctx.canvas.width = img.width;
        ctx.canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
    }
}

/*
* Cette fonction est appellée quand l'utilisateur clique sur le bouton "Reset".
* Elle réinitialise l'image à l'image originale.
*/

export function reset() {
	const ctx = document.getElementById('canvas').getContext('2d');
	ctx.canvas.width = currentImage.width;
	ctx.canvas.height = currentImage.height;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(currentImage, 0, 0);
}