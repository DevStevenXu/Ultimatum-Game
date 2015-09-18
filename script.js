var yesButton = document.getElementById("yesbutton")
var liSelector = document.getElementsByTagName("li");
var firstNumber= document.getElementById("firstNumber");
var secondNumber= document.getElementById("secondNumber");
var after = document.getElementsByClassName("after");

var i=0;
var mikeGiven = [30,5, 70, 40, 20,60];
var mikeOffer = [10, 2, 30, 7, 2, 30];
var threshold = 1;
var MikeGain=0;
var PlayerGain=0;
var PercentOffer=0;


function disableButton(button){
	var input = button;
    input.disabled = true;
    setTimeout(function() {
        input.disabled = false;
    }, 750);
}

yesButton.addEventListener("click", function(){

	if(i==6){
		after[0].classList.remove("hidden");
		document.getElementById("playerGain").innerHTML= "You have gained $" + PlayerGain +".";
		document.getElementById("mikeGain").innerHTML= "Mike has gained $" +MikeGain + ". That greedy jerk!";
		document.getElementById("playerThreshold").innerHTML = "Based on the data available, you only accept the offer if Mike offers at least " + Math.floor(threshold*100) + "% of his portion. Anything below that you consider to be unfair, and you would rather give up the chance to earn money than accept an unfair proposal.";
	 }

	 if(i==5){

	 	setTimeout(function(){
		 yesButton.innerHTML="View Statistics?";
		 nobutton.innerHTML="Back to home?";
		}, 600);
	 }


	 if(i<=5){

	 PercentOffer = (mikeOffer[i]/mikeGiven[i]);
	 MikeGain += mikeGiven[i]-mikeOffer[i];
	 PlayerGain += mikeOffer[i];

	 i++;

	if(PercentOffer < threshold){
		threshold = PercentOffer;
	}
}

	liSelector[0].classList.add('fadeOut');

	disableButton(yesButton);

	if(i<=5){
		setTimeout(function(){
			liSelector[0].classList.remove('fadeOut');
			firstNumber.innerHTML=mikeGiven[i];
			secondNumber.innerHTML=mikeOffer[i];
		}, 650);
	}
	else{
		setTimeout(function(){
		liSelector[0].parentNode.removeChild(liSelector[0]);
	}, 600);
	}
});

nobutton.addEventListener("click", function(){
	
	 if(i>=6){
		window.location.href="index.html";
   	 }

	 if(i==5){

	 	setTimeout(function(){
			yesButton.innerHTML="View Statistics?";
			nobutton.innerHTML="Back to home?";
		}, 600);
	 
	 }

	 if(i<=5){i++;}

	 liSelector[0].classList.add('fadeOut');

	disableButton(nobutton);

	if(i<=5){
		setTimeout(function(){
			liSelector[0].classList.remove('fadeOut');
			firstNumber.innerHTML=mikeGiven[i];
			secondNumber.innerHTML=mikeOffer[i];
		}, 650);
	}
	else{
		setTimeout(function(){
		liSelector[0].parentNode.removeChild(liSelector[0]);
	 }, 600);
}

})

