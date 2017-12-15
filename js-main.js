timebit = 2

if(window.location.href == "http://scg52.com/idm361-WebApp/hwk05/index.html" || window.location.href ==  "file:///C:/Users/Stephen/Documents/idm361-WebApp/hwk05/index.html"){
	// console.log(timebit + ' timebit update call');
	updateTime(timebit);
	placeSPM();
}else if(window.location.href == "http://scg52.com/idm361-WebApp/hwk05/timer.html" || window.location.href ==  "file:///C:/Users/Stephen/Documents/idm361-WebApp/hwk05/timer.html"){
    runTime();
}

function jmp2LocalPage(whichPage) {
  location.href = whichPage;
}

//Add 30 secs
function plusFun() {
	if (timebit < 10) {
		timebit++;
	}

	console.log(timebit);
	updateTime(timebit);
}

//Subtract 30 secs
function minusFun() {
	if (timebit > 1) {
		timebit--;
	}
	
	console.log(timebit);
	updateTime(timebit);
}

function updateTime(timebit) {
	//home screen updates the text of the timer based on the plus or minus buttons
	var currentTime;
	// console.log(timebit + ' timebit update fun');

	if (timebit % 2) {
        currentTime = Math.floor((timebit * 30) / 60) + ':30';
	}else{
	    currentTime = ((timebit * 30) / 60) + ':00';	
	}

    //display the selected time
	document.getElementById('time').innerHTML = currentTime;

	//send the time to timer screen
	if (typeof (Storage) !== "undefined") {
      localStorage.time = timebit;
    } else {
      // Sorry! No Web Storage support..
      alert('This browser does NOT support local storage');
    }
}

function runTime() {
	//jumps back to main page once time is done
	console.log('running timer');
	if (typeof (Storage) !== "undefined") {
      // Read data from local storage
      var timeLeft = localStorage.time;
      timeLeft *= 30000;

      console.log("timeLeft " + timeLeft);

    } else {
      // Sorry! No Web Storage support..
      alert('This browser does NOT support local storage');
    }

	var timeout = setTimeout(goHome(), timeLeft);
}

function sitCount() {
  return Math.floor((Math.random() * 10) + 1);
}

function placeSPM(){
	if (typeof (Storage) !== "undefined") {
      // Read data from local storage
      if(localStorage.spm3 == null){
        localStorage.spm1 = 0;
        localStorage.spm2 = 0;
        localStorage.spm3 = 0;
        localStorage.spmAvg = 0;
      }
      var spm1 = localStorage.spm1;
      var spm2 = localStorage.spm2;
      var spm3 = localStorage.spm3;
      var avg = localStorage.spmAvg;

      spm1El = document.getElementById('p1');
      spm1El.innerHTML = spm1 + " spm";

      spm2El = document.getElementById('p2');
      spm2El.innerHTML = spm2 + " spm";

      spm3El = document.getElementById('p3');
      spm3El.innerHTML = spm3 + " spm";

      avgEl = document.getElementById('av');
      avgEl.innerHTML = avg + " spm";
    } else {
      // Sorry! No Web Storage support..
      alert('This browser does NOT support local storage');
    }
}

function updateSPM(x){
	if (typeof (Storage) !== "undefined") {
      // Read data from local storage
      localStorage.spm1 = localStorage.spm2;

      localStorage.spm2 = localStorage.spm3;

      localStorage.spm3 = x;

      localStorage.spmAvg = Math.round((x + parseInt(localStorage.spm2) + parseInt(localStorage.spm1)) / 3);

    } else {
      // Sorry! No Web Storage support..
      alert('This browser does NOT support local storage');
    }
}

function goHome(){ 
	updateSPM(sitCount());
	jmp2LocalPage('index.html'); 
}