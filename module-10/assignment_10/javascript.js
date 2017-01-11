var count = 0

document.getElementById("button1").addEventListener("click", function(){
	if (count < 1){
		original();
	}
	if (count<1){
		count+=1;
	}
	document.getElementById("box").style.width='300px';
	document.getElementById("box").style.height='300px';

	})

document.getElementById("button2").addEventListener("click", function(){
	if (count < 1){
		original();
	}
	if (count<1){
		count+=1;
	}

	document.getElementById("box").style.backgroundColor = "#0000ff";
	})

document.getElementById("button3").addEventListener("click", function(){
	if (count < 1){
		original();
	}
	if (count<1){
		count+=1;
	}
	document.getElementById("box").style.opacity = "0.25";
	})

document.getElementById("button4").addEventListener("click", function(){
	if (count < 1){
		original();
	}
	if (count<1){
		count+=1;
	}

	animate();
})

document.getElementById("button5").addEventListener("click", function(){
	document.getElementById("box").outerHTML=originalBox;
	})

var original = function(){
	originalBox = document.getElementById("box").outerHTML;
}

var animate = function(){
	var box = document.getElementById("box");
	box.style.position = "absolute";
	var left = 0;

	for(let i=0; i<200; i++){
	left += 2;
	console.log(left);
	box.style.left = `${left+=2}px`;

	}
}