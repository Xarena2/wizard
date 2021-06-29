	var Form1 = document.getElementById("form1");
	var Form2 = document.getElementById("form2");
	var Form3 = document.getElementById("form3");
	var Form4 = document.getElementById("form4");

	var Next1 = document.getElementById("next1");
	var Back1 = document.getElementById("back1");
	var Next2 = document.getElementById("next2");
	var Back2 = document.getElementById("back2");
	var Test = document.getElementById("test");
	var Next3 = document.getElementById("next3");
	var Back3 = document.getElementById("back3");
	var Next4 = document.getElementById("next4");
	//g
	var Name = document.getElementById("set-name").value;
	var Phone = document.getElementById("set-phone").value;
	var Email = document.getElementById("set-email").value;
	var Quantity = document.getElementById("set-quantity").value;
	
	var link_contact = document.getElementById("link-contact");
	var link_quantity = document.getElementById("link-quantity");
	var link_price = document.getElementById("link-price");
	var link_done = document.getElementById("link-done");

	var current_width = window.innerWidth;
	var step_left = "0px";
	
	switch(true) {
		case current_width<575 && current_width>382:
			step_left="10px";
			break;
		case current_width<766 && current_width>576:
			step_left="20px";			
			break;
		case current_width<992 && current_width>767:
			step_left="40px";			
			break;
		case current_width>993:
			step_left="40px";			
			break;
	}

	var titles = document.getElementsByClassName("step-col-title");
	
	for (var i = 0; i <= titles.length; i++) {
		titles[i].addEventListener("click", function() {
  		var current = document.getElementsByClassName("active");
  		current[0].className = current[0].className.replace(" active", "");
  		this.className += " active";
  	});

	Next1.onclick = function(){
		
		Form1.style.left = "-1000px";
		Form2.style.left = step_left;
					
		titles[0].classList.remove("active");
		titles[1].classList.add("active");		
		
	}
	
	Back1.onclick =function(){
		Form1.style.left = step_left;
		Form2.style.left = "1000px";
		titles[0].classList.add("active");
		titles[1].classList.remove("active");
	}

	Next2.onclick =function(){
		Form2.style.left = "-1000px";
		Form3.style.left = step_left;
		titles[1].classList.remove("active");
		titles[2].classList.add("active");
	}

	Back2.onclick =function(){
		Form2.style.left = step_left;
		Form3.style.left = "1000px";
		titles[2].classList.remove("active");
		titles[1].classList.add("active");
	}

	Next3.onclick =function(){
		Form3.style.left = "-1000px";
		Form4.style.left = step_left;
		titles[2].classList.remove("active");
		titles[3].classList.add("active");
	}
	Next4.onclick =function(){
		Form4.style.left = "1000px";
		Form1.style.left = step_left;
		titles[3].classList.remove("active");
		titles[0].classList.add("active");
	}
	
	link_contact.onclick =function(){
		Form1.style.left = step_left;
		Form2.style.left = "1000px";
		Form3.style.left = "1000px";
		Form4.style.left = "1000px";	
	}
	link_quantity.onclick =function(){
		Form1.style.left = "-1000px";
		Form2.style.left = step_left;
		Form3.style.left = "1000px";	
		Form4.style.left = "1000px";	
	}
	link_price.onclick =function(){
		Form1.style.left = "-1000px";
		Form2.style.left = "-1000px";
		Form3.style.left = step_left;
		Form4.style.left = "1000px";	
	}
	link_done.onclick =function(){
		Form1.style.left = "-1000px";
		Form3.style.left = "-1000px";
		Form4.style.left = step_left;
	}
}