var $yourGuess = $("#guess");
var yourGuessVal = 0;
var $numToGuess = $("#numToGuess");
var numToGuessVal = 0;
var $gameText = $(".gameText");
var crystals = [crystal0, crystal1, crystal2, crystal3];
var gameOver = false;
var crystalAudio = new Audio ("assets/sounds/gem.wav");



$(function(){
	function onStart(){
		//sets number to guess between 19 and 120
		numToGuessVal = Math.floor((Math.random() * 101) + 19);
		$numToGuess.text(numToGuessVal);

		//assigns random values to crystals
		for (var i = 0; i < crystals.length; i++)
			crystals[i] = Math.floor((Math.random() * 11) + 1);
	}

	onStart();

	function valCheck(){
		if (yourGuessVal === numToGuessVal && !gameOver){
			$(".crystals").fadeOut("fast", function(){
				gameOver = true;
				var $restartButton = $("<button>");
				$restartButton.text("Restarteth").on("click", function(){
					location.reload();
				});

				$(".crystals").empty().append($restartButton).show();


			})

			$gameText.text("Thou hath won.");


		}

		else if (yourGuessVal > numToGuessVal && !gameOver){
			$(".crystals").fadeOut("fast", function(){
				gameOver = true;
				var $restartButton = $("<button>");
				$restartButton.text("Restarteth").on("click", function(){
					location.reload();
				});

				$(".crystals").empty().append($restartButton).show();


			})
			$gameText.text ("Thou has lost.");
		}
	}

	$("#crystal0").on("click", function(){
		yourGuessVal += crystals[0];
		$yourGuess.text(yourGuessVal);
		// crystalAudio.currentTime = 0;
		crystalAudio.play();

		valCheck();
	});

	$("#crystal1").on("click", function(){
		yourGuessVal += crystals[1];
		$yourGuess.text(yourGuessVal);
		// crystalAudio.currentTime = 0;
		crystalAudio.play();


		valCheck();
	});

	$("#crystal2").on("click", function(){
		yourGuessVal += crystals[2];
		$yourGuess.text(yourGuessVal);
		// crystalAudio.currentTime = 0;
		crystalAudio.play();

		valCheck();
	});

	$("#crystal3").on("click", function(){
		yourGuessVal += crystals[3];
		$yourGuess.text(yourGuessVal);
		// crystalAudio.currentTime = 0;
		crystalAudio.play();

		valCheck();
	});


});