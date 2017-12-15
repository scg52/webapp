window.addEventListener("MozOrientation",    handleOrientationEvent, true);
window.addEventListener("deviceorientation", handleOrientationEvent, true);

maxb = 0;
minb = 0;

maxa = 0;
mina = 0;

maxg = 0;
ming = 0;

function handleOrientationEvent(event) {
  var x, y, z = 0;
  
  //check the alpha values
  z = event.alpha;
  checkAlpha(z);

  //check the beta values
  x = event.beta;
  checkBeta(x);
 
  //check the gamma values
  y = event.gamma;
  checkGamma(y);
  
  //Output orientation to console
  console.log("x,y,z", [x,y,z]);
}

function checkGamma(y) {
  gammaEl = document.getElementById('gCurrent');
  gammaEl.innerHTML = 'Current ' + Math.round(y);

  if (y > maxg) {
  	maxg = y;

  	maxEl = document.getElementById('gmax');
    maxEl.innerHTML = 'Max ' + Math.round(y);
  }

  if (y < ming) {
  	ming = y;

  	minEl = document.getElementById('gmin');
    minEl.innerHTML = 'Min ' + Math.round(y);
  }
	
}

function checkAlpha(z) {
  // alphaEl = document.getElementById('aCurrent');
  // alphaEl.innerHTML = 'Current ' + Math.round(z);

  if (z > maxa) {
  	maxa = z;

  	maxEl = document.getElementById('amax');
    maxEl.innerHTML = 'Max ' + Math.round(z);
  }

  if (z < mina) {
  	mina = z;

  	minEl = document.getElementById('amin');
    minEl.innerHTML = 'Min ' + Math.round(z);
  }
	
}

function checkBeta(x) {
  betaEl = document.getElementById('bCurrent');
  betaEl.innerHTML = 'Current ' + Math.round(x);

  if (x > maxb) {
  	maxb = x;

  	maxEl = document.getElementById('bmax');
    maxEl.innerHTML = 'Max ' + Math.round(x);
  }

  if (x < minb) {
  	minb = x;

  	minEl = document.getElementById('bmin');
    minEl.innerHTML = 'Min ' + Math.round(x);
  }
	
}