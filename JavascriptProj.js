var slideIndex=0;
var slideIndex2=0;
function Image(URL, alt, cap) {
    this.src=URL;
    this.alternate = alt;
    this.caption = cap;
}

var myArray=[
new Image("ship126am.png", "Waiting","The ship is being prepared pre-dawn for takeoff! The Astronauts are waking at 6am!"),
new Image("ship69.png", "Delay","The ship had a engine problem and will be delayed until 9!"),
new Image("ship912pm.png", "The ship is taking off!!!","The ship is finally blasting off at past 9!"),
new Image("ship123pm.png", "Left Atmosphere","The ship is beginning to leave the atmosphere at around noon!"),
new Image("ship36pmland.png", "Landed", "The Ship Has Landed at approximately 4pm!"),
new Image("shipboom69PM.png", "Gone","The ships' engines exploded in a awesome fireball! Our last contact was at 6 pm")
];
/*time function concerning which image to show*/
function myTimeFunction(){
	var d = new Date();
	var h= d.getHours();
	var myVart= setInterval(myTimeFunction, 60000);
	if(h<6){
		slideIndex=0;
	}else if(h<9){
		slideIndex=1;
	}else if(h<12){
		slideIndex=2;
	}else if(h<15){
		slideIndex=3;
	}else if(h<18){
		slideIndex=4;
	}else{
		slideIndex=5;
		}
	document.getElementById("timePic").src= myArray[slideIndex].src;
	document.getElementById("timePic").alt=myArray[slideIndex].alternate;
	document.getElementById("imageCaption").innerHTML = myArray[slideIndex].caption;
	document.getElementById("s").src= myArray[0].src;
	document.getElementById("sCaption").innerHTML = myArray[0].caption;
}
/*slideshow*/
function showRandom() {
    slideIndex = Math.floor((Math.random() * 5)  );
    document.getElementById("s").src= myArray[slideIndex].src;
	document.getElementById("sCaption").innerHTML = myArray[slideIndex].caption;
	document.getElementById("s").alt=myArray[slideIndex].alternate;
}


function plusSlides(){
	slideIndex2++;
	if (slideIndex2>5){
		slideIndex2=0;
		document.getElementById("s").src= myArray[slideIndex2].src;
		document.getElementById("sCaption").innerHTML = myArray[slideIndex2].caption;
	}else{
		document.getElementById("s").src= myArray[slideIndex2].src;
		document.getElementById("sCaption").innerHTML = myArray[slideIndex2].caption;
}
}
function showTime(){
        var d = new Date();
		var myVar= setInterval(showTime, 1000);
		document.getElementById("timeCurrent").innerHTML = d;
}
