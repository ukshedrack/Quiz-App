$(document).ready(function(){
	var login = prompt("Enter Password");
	if (login == "user"){
		alert("Welcome");
		$(".instructions").css("display", "block");
		$(".instructions button").css({"background-color": "green", "color": "white", 
			"border": "none", "padding": "0.5em"});

		$(".start").click(function(){
			$(".instructions").hide();
			$(".Q1").show();
		});

		$(".Q1 .submit").click(function(){
			let answer = $("input[id='question1']:checked").val();
			if (answer == 20){
				$(".Q1 span").text("Correct").css({"background-color": "green", "color": "white"});
				$(".Q1").hide(2000);
				$(".Q2").show();
			}
			else{$(".Q1 span").text("Incorrect").css({"background-color": "red", "color": "white"});
				alert("End of Quiz. Try again by next week Saturday");
				$(".Q1").hide(2000);
			}
		});

		$(".Q2 .submit").click(function(){
			let answer = $("input[id='question2']:checked").val();
			if (answer == 4){
				$(".Q2 span").text("Correct").css({"background-color": "green", "color": "white"});
				$(".Q2").hide(2000);
				$(".Q3").show();
			}
			else{$(".Q2 span").text("Incorrect").css({"background-color": "red", "color": "white"});
				alert("End of Quiz. Try again by next week Saturday");
				$(".Q2").hide(2000);
			}
		});
		$(".Q3 .submit").click(function(){
			let answer = $("input[id='question3']:checked").val();
			if (answer == 36){
				$(".Q3 span").text("Correct").css({"background-color": "green", "color": "white"});
				$(".Q3").hide(2000);
				$(".Q4").show();
			}
			else{$(".Q3 span").text("Incorrect").css({"background-color": "red", "color": "white"});
				alert("End of Quiz. Try again by next week Saturday");
				$(".Q3").hide(2000);
			}
		});
		$(".Q4 .submit").click(function(){
			let answer = $("input[id='question4']:checked").val();
			if (answer == 6){
				$(".Q4 span").text("Correct").css({"background-color": "green", "color": "white"});
				$(".Q4").hide(2000);
				$(".Q5").show();
			}
			else{$(".Q3 span").text("Incorrect").css({"background-color": "red", "color": "white"});
				alert("End of Quiz. Try again by next week Saturday");
				$(".Q4").hide(2000);
			}
		});
		$(".Q5 .submit").click(function(){
			let answer = $("input[id='question5']:checked").val();
			if (answer == 114){
				$(".Q5 span").text("Correct").css({"background-color": "green", "color": "white"});
				$(".Q5").hide(2000);
				$(".Q6").show();
			}
			else{$(".Q5 span").text("Incorrect").css({"background-color": "red", "color": "white"});
				alert("End of Quiz. Try again by next week Saturday");
				$(".Q5").hide(2000);
			}
		});
		$(".Q6 .submit").click(function(){
			let answer = $("input[id='question6']:checked").val();
			if (answer == 44){
				$(".Q6 span").text("Correct").css({"background-color": "green", "color": "white"});
				$(".Q6").hide(2000);
				$(".Q7").show();
			}
			else{$(".Q6 span").text("Incorrect").css({"background-color": "red", "color": "white"});
				alert("End of Quiz. Try again by next week Saturday");
				$(".Q6").hide(2000);
			}
		});
		$(".Q7 .submit").click(function(){
			let answer = $("input[id='question7']:checked").val();
			if (answer == 90){
				$(".Q7 span").text("Correct").css({"background-color": "green", "color": "white"});
				$(".Q7").hide(2000);
				$(".Q8").show();
			}
			else{$(".Q7 span").text("Incorrect").css({"background-color": "red", "color": "white"});
				alert("End of Quiz. Try again by next week Saturday");
				$(".Q7").hide(2000);
			}
		});
		$(".Q8 .submit").click(function(){
			let answer = $("input[id='question8']:checked").val();
			if (answer == 12){
				$(".Q8 span").text("Correct").css({"background-color": "green", "color": "white"});
				$(".Q8").hide(2000);
				$(".Q9").show();
			}
			else{$(".Q8 span").text("Incorrect").css({"background-color": "red", "color": "white"});
				alert("End of Quiz. Try again by next week Saturday");
				$(".Q8").hide(2000);
			}
		});
		$(".Q9 .submit").click(function(){
			let answer = $("input[id='question9']:checked").val();
			if (answer == 11){
				$(".Q9 span").text("Correct").css({"background-color": "green", "color": "white"});
				$(".Q9").hide(2000);
				$(".Q10").show();
			}
			else{$(".Q9 span").text("Incorrect").css({"background-color": "red", "color": "white"});
				alert("End of Quiz. Try again by next week Saturday");
				$(".Q9").hide(2000);
			}
		});
		$(".Q10 .submit").click(function(){
			let answer = $("input[id='question10']:checked").val();
			if (answer == 13){
				$(".Q10 span").text("Correct").css({"background-color": "green", "color": "white"});
				$("body").append($("<p>Congratulations. You're our latest Mathematics Ambassador.</p>"),
					$("<p>How will you use this #10m you just won?</p>"));
				$("img").show().animate({
			    left: '100px', opacity: '0.5',
			    left: '50px', opacity: '1.0'
				}, 2000);
			}
			else{$(".Q10 span").text("Incorrect").css({"background-color": "red", "color": "white"});
				alert("End of Quiz. Try again by next week Saturday");
				$(".Q10").hide(2000);
			}
		});								
	}
	else {alert("You don't have access to take this quiz");
	$("div").hide();}
});