 var myHeading = document.querySelector('h1');
 myHeading.textContent = 'Hello World!';
var myText = [1,'bob','Steve',15];
console.log(myText); 
var myB = 15
console.log(myB)
//Не судите строго*/
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
	alert('I love ice cream with chocolate flavour!');
	} else {
	alert('Aww, but chocolate is my favourite...');
}
function console1(x) {
	
	console.log(x*x*x)
	
}
console1('9')
document.querySelector('html').onclick = function() {
	alert('I told you dont touch me, it is very painful');
}
var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/2.png'){
		myImage.setAttribute('src','images/3.png');
	} else {
		myImage.setAttribute('src','images/2.png');
	}
}

