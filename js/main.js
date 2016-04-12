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
		$('html, body').animate({
        	scrollTop: $(".game-container").offset().top
    	}, 1000);
		timer = 30;
		userConsumed = 0;
		$("#donut-tally").text(userConsumed); 
		 //start timer
		 endTimer = setInterval(countdown, 1000);
		}	

	function countdown() {
		timer--;
		$("#timer").text(timer); 

		if (timer <= 0) {
			clearInterval(endTimer);
			$(".game-container").hide();
			$("#background-image").hide();
			$(".results-container").show();
			determineLevel();
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


//set up play again option
 	$(".play-again").click(playAgain);
		
	function playAgain() {
		$(".results-container").hide();	
		$(".game-container").show();
		$("#background-image").show();
		playClick();		
	}

//Assign variable to keep track of results
    var results;
		
		//Write out logic for determining the winner
		function determineLevel() {

		if (userConsumed <= 15) {
	    results = "Level 1 - Donut give up!";
	  	}
	  	else if ((userConsumed => 16) && (userConsumed <= 45)) {
	    		results = "Level 2 - D'oh...Nuts!";
	    	}
		else if (userConsumed => 46) {
		     	results = "Yay - Somebody ate all of the donuts. It was you!";
		    }  
		//show results     
		$(".results").text(results); 
		}



// Generates random number from range
	function getRandom(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}





}






