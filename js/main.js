//wait for the DOM elements to load before executing
$(document).ready(pageReady);

function pageReady() {
//assign variable to keep track of how many donuts were consumed
var userConsumed = 0;
var timer = 30;
var endTimer;

//initialize game board 
	var n = 30;
	while (n--) {
	   // looped code
	   var donut = $('<img src="images/sprinkle_donut.png" class="donut" alt="donut">');
	   placeDonut(donut);
	   $(".game-container").append(donut);
	}	


//bind click listener to Start Game button

	$(".start-button").click(playClick);
		function playClick() {
		userConsumed();
		 //start timer
		 endTimer = setInterval(countdown, 30000);
		}
		

	function countdown() {
		timer--;
		$("#timer").text(timer); 

		if (timer <= 0) {
			clearInterval(endTimer);
		}
	}


//bind click listener to donut images

	$(".donut").click(donutClick);
		function donutClick() {
			placeDonut($(this));
			userConsumed++;
			$("#donut-tally").text(userConsumed); 
	}

//generate random coordinate
		function placeDonut(donut) {
			var x = getRandom(0,700);
			var y = getRandom(0,500);

			donut.css("left", x + "px");
			donut.css("top", y + "px");

		}


//show results 
$(".start-button").click(playClick);
		function playClick() {
		 //start timer
		 endTimer = setInterval(countdown, 1000);

		}
 


//set up play again option


// Generates random number from range
	function getRandom(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}





}






