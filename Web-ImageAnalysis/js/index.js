import { grayscale } from "./grayscale.js";
import { handleFiles, reset } from "./handleFiles.js";
import { thresholding } from "./thresholding.js";
import { showDilatation } from "./dilatation.js";
import { showErosion } from "./erosion.js";
import { showClosing } from "./closing.js";
import { showOpening } from "./opening.js";
import { showThinning } from "./thinning.js";
import { showThickening } from "./thickening.js";
import { showHomotopicSkeletonization } from "./homotopicSkeletonization.js";
import { showLantuejoulSkeletonization } from "./lantuejoulSkeletonization.js";

// Sliders

const sliderThresholding = document.getElementById("rangeThresholding");
sliderThresholding.addEventListener('input', function() {
	document.getElementById("valueThreshold").innerHTML = sliderThresholding.value;
});

const sliderRadius = document.getElementById("rangeRadius");
sliderRadius.addEventListener('input', function() {
	document.getElementById("valueRadius").innerHTML = sliderRadius.value;
});

// Entrée

const input = document.getElementById('input');
input.addEventListener('change', handleFiles);

// Boutons

const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', reset);

const buttonGrayscale = document.getElementById('grayscale');
buttonGrayscale.addEventListener('click', grayscale);

const buttonThresholding = document.getElementById('thresholding');
buttonThresholding.addEventListener('click', thresholding);

const buttonDilatation = document.getElementById('dilatation');
buttonDilatation.addEventListener('click', showDilatation);

const buttonErosion = document.getElementById('erosion');
buttonErosion.addEventListener('click', showErosion);

const buttonClosing = document.getElementById('closing');
buttonClosing.addEventListener('click', showClosing);

const buttonOpening = document.getElementById('opening');
buttonOpening.addEventListener('click', showOpening);

const buttonThinning = document.getElementById('thinning');
buttonThinning.addEventListener('click', showThinning);

const buttonThickening = document.getElementById('thickening');
buttonThickening.addEventListener('click', showThickening);

const buttonHomotopicSkeletonization = document.getElementById('homotopicSkeletonization');
buttonHomotopicSkeletonization.addEventListener('click', showHomotopicSkeletonization);

const buttonLantuejoulSkeletonization = document.getElementById('lantuejoulSkeletonization');
buttonLantuejoulSkeletonization.addEventListener('click', showLantuejoulSkeletonization);