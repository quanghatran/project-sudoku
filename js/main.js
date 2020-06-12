var divNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
	number = [...divNumber];

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// Fill in the boxes random number
function fill() {
	number = shuffle(number);
	number.map((num, i) => {
		const a = document.getElementsByClassName(divNumber[i]);
		for (var r = 0; r < a.length; r++) {
			a[r].innerHTML = num;
		}
	});
}
fill();

// Hide some numbers randomly

function hide() {
	var hideNum = '',
		p = document.getElementsByTagName('p');

	for (var j = 0; j < p.length; j++) {
		const num = Math.floor(Math.random() * Math.floor(2));
		if (num !== 0) {
			p[j].style.display = 'none';
			hideNum = p[j].innerHTML;
			var x1 = document.createElement('INPUT');
			x1.setAttribute('type', 'text');
			x1.setAttribute('maxLength', 1);
			x1.setAttribute('onkeypress', 'validate(event)');
			onkeypress = 'validate(event)';
			// x1.classList.add(hideNum);
			x1.innerHTML = '';

			p[j].parentNode.insertBefore(x1, p[j]);
		
			$(x1).hover(function(){
				$(this).addClass("change-bg");
			}, function(){
				$(this).removeClass("change-bg");
			})

			
		}
	}
}
hide();

function hideIntermediate() {
	var hideNum = '',
		p = document.getElementsByTagName('p');

	for (var j = 0; j < p.length; j++) {
		const num = Math.floor(Math.random() * Math.floor(2));
		if (num !== 0) {
			p[j].style.display = 'none';
			hideNum = p[j].innerHTML;
			var x1 = document.createElement('INPUT');
			x1.setAttribute('type', 'text');
			x1.setAttribute('maxLength', 1);
			x1.setAttribute('onkeypress', 'validate(event)');
			onkeypress = 'validate(event)';
			// x1.classList.add(hideNum);
			x1.innerHTML = '';

			p[j].parentNode.insertBefore(x1, p[j]);
		
			$(x1).hover(function(){
				$(this).addClass("change-bg");
			}, function(){
				$(this).removeClass("change-bg");
			})

			
		}
	}
}

// Input validation
function validate(evt) {
	var theEvent = evt || window.event;

	// Handle paste
	if (theEvent.type === 'paste') {
		key = event.clipboardData.getData('text/plain');
	} else {
		// Handle key press
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
	}
	var regex = /[0-9]|\./;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}

// Check the input value
const allInput = document.querySelectorAll('INPUT');

allInput.forEach((e, i) => {
	e.oninput = event => {
		if (event.target.value === e.className) {
            // e.style.color = 'forestgreen';
			// e.style.fontWeight = '900';
			$(x1).submit(function() {
				$(this).addClass("change-bg");
			}, function(){
				$(this).removeClass("change-bg");
			})

		} else {
			e.style.color = 'forestgreen';
		}

		const result = check();
		if (result) {
			document.getElementById('title-header').innerHTML = 'Bravo !';
			
			document.getElementById('pause').style.zIndex = '1';
			document.getElementById('continue').style.zIndex = '-1';	
			
			document.getElementById('blur').style.zIndex = "5";

			if (!isRunning) return;
			isRunning = false;
			clearInterval(interval);
		}
	};
});

function check() {
	var inputArray = Array.prototype.slice.call(allInput);
	const checkAll = inputArray.filter(item => {
        return item.style.color === 'forestgreen';
        
	});
	if (checkAll.length === inputArray.length) {
		return true;
	} else {
		return false;
	}
}

// Restart
document.getElementById('restart').addEventListener('click', () => {
	history.go(0);
});

// set time
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 0;
let isRunning = false;
let interval;

function incrementTimer() {
  timerTime++;
  
  const numOfMinutes = Math.floor(timerTime / 60);
  const numOfSeconds = timerTime % 60;
  
  minutes.innerText = pad(numOfMinutes);
  seconds.innerText = pad(numOfSeconds);
}

// interval = setInterval(incrementTimer, 1000);
function pad(num) {
	return (num < 10) ? '0' + num : num;
  }
  

// interval = setInterval(incrementTimer, 1000);
const startButton = document.querySelector('[data-action="continue"]');
const stopButton = document.querySelector('[data-action="pause"]');


// interval = setInterval(incrementTimer, 1000);


function pause() {
	if (!isRunning) return;
	isRunning = false;
	clearInterval(interval);

	var blur = document.getElementById('blur');
	blur.style.zIndex = "5";
	
	document.getElementById('pause').style.zIndex = '-1';
	document.getElementById('continue').style.zIndex = '1';	
}

function startTimer() {
	if (isRunning) return;
	isRunning = true;
	interval = setInterval(incrementTimer, 1000);
	var blur = document.getElementById('blur');
	blur.style.zIndex = "-1";

	document.getElementById('pause').style.zIndex = '1';
	document.getElementById('continue').style.zIndex = '-1';	

  }
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', pause);


// check event

function checkResultFunction() {
	p = document.getElementsByTagName('p');

	for (var j = 0; j < p.length; j++) {
			// p[j].style.display = 'none';
			p[j] = document.getElementsByTagName('p').textContent;
			document.getElementsByTagName('p').innerHTML = p[j];  

			// p[j].textContent = "block";
			// hideNum = p[j].innerHTML;
			// var x1 = document.createElement('INPUT');
			// x1.setAttribute('type', 'text');
			// x1.setAttribute('maxLength', 1);
			// x1.setAttribute('onkeypress', 'validate(event)');
			// onkeypress = 'validate(event)';
			// // x1.classList.add(hideNum);
			// // x1.innerHTML = '';

			// p[j].parentNode.insertBefore(x1, p[j]);
		
			// $(x1).hover(function(){
			// 	$(this).addClass("change-bg");
			// }, function(){
			// 	$(this).removeClass("change-bg");
			// })

			
		}
}

document.getElementById('checkEvent').addEventListener('click', checkResultFunction );



// user interface
function openSideMenu() {
    document.getElementById('side-menu').style.display = 'block';
    // document.getElementById('main').style.marginLeft = '250px';
  } 

  
 function closeSideMenu() {
    document.getElementById('side-menu').style.display = 'none';
    // document.getElementById('main').style.marginLeft = '0';
  } 