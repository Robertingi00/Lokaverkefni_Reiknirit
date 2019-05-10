let exitButton = document.querySelectorAll("i,.close")
let table = document.querySelectorAll(".table,.time")

var editNumber = document.querySelector(".row")

var tableTr = document.querySelectorAll("tr")
var currentTableTr = tableTr[1];
currentTableTr.classList.toggle("bold");

let menu = document.querySelectorAll(".al");
let laMenu = document.querySelectorAll(".la");

var editor = document.querySelector(".editor");

editor.innerHTML = data[0].pythonCode;


let desText = document.querySelectorAll("h2,.destext");

menuCurrent = menu[0];
var languageCurrent = laMenu[0];

editNumbers(data[0].codeLine[0]);
changesData(1);


let canvas = document.querySelector(".canvas");
let sliders = document.querySelectorAll(".slider");
let startStop = document.querySelectorAll("button")
let stok = document.getElementById('stok');
let delay = document.getElementById("delay");


function writeText(txt){
    editor.innerHTML += txt;
}

function menuClick(){
	canvasReset();
	menuCurrent.classList.toggle("active");
	this.classList.add("active");
	console.log(this);
	menuCurrent = this;
	changesData(this.dataset.index)

	currentTableTr.classList.toggle("bold");
	console.log(tableTr[this.dataset.index])
	tableTr[this.dataset.index].classList.toggle("bold");
	currentTableTr = tableTr[this.dataset.index ];

	editNumbers(data[menuCurrent.dataset.index-1].codeLine[languageCurrent.dataset.index]);


} 

function laMenuClick(){
	languageCurrent.classList.toggle("active");
	this.classList.add("active");
	console.log(this);
	languageCurrent = this
	changesData(menuCurrent.dataset.index)
	editNumbers(data[menuCurrent.dataset.index -1].codeLine[languageCurrent.dataset.index]);
}

function changesData(index) {
	index -= 1;
	desText[0].innerText = data[index].algorithm;
	desText[1].innerText = data[index].description;
	desText[2].innerText = data[index].codeDescription;

	if(languageCurrent.dataset.index == 0){
			editor.innerHTML = data[index].pythonCode;
	}else if(languageCurrent.dataset.index == 1){
		editor.innerHTML = data[index].javascriptCode;
	}else if(languageCurrent.dataset.index == 2){
		editor.innerHTML = data[index].cppCode;
	}else if(languageCurrent.dataset.index == 3){
		editor.innerHTML = data[index].cCode;
	}
	editNumbers(data[Number(index)].codeLine[languageCurrent.dataset.index]);
}


function closeTable(){

	if (table[0].style.display == "block") {
    	table[0].style.display = "none";
	} else {
	    table[0].style.display = "block";
	}
	if (table[1].style.display == "block") {
    	table[1].style.display = "none";
  	} else {
    	table[1].style.display = "block";
  	}
  	if (exitButton[1].style.display === "none") {
    	exitButton[1].style.display = "block";
	} else {
	    exitButton[1].style.display = "none";
	}
}

function editNumbers(number) {
	console.log(number);
	editNumber.innerHTML = "";
	let div = document.createElement("div");
	div.classList.add("first")
	editNumber.appendChild(div);

	for(let i = 1; i < number+1; i++){
		let p = document.createElement("p");
		let text = document.createTextNode(i);
		p.appendChild(text);
		editNumber.appendChild(p);
	}
}

 
function setSpeed(){
	delay.innerText = this.value;
	speed = this.value;
}

function setStok(){
	stok.innerText = this.value;
	fStok = this.value;
}


canvasIndex = 0;
function canvasStart(argument) {
	if(canvasIndex == 0){
		end = false;
		stop = false;
		startCanvas(menuCurrent.dataset.index-1);
		canvasIndex++;
	}else if(canvasIndex == 1){
		stop = false;
	}
}

function canvasStop(argument) {
	stop = true;
	console.log("stop")
}

function canvasReset(){
	stop = true;
	end = true;
	canvasIndex = 0; 
	resetList();
	draw_list(list,0 );

}

menu.forEach(a => a.addEventListener('click', menuClick));
laMenu.forEach(a => a.addEventListener('click', laMenuClick));
exitButton.forEach(a => a.addEventListener('click', closeTable));
sliders[0].addEventListener('input', setSpeed);
sliders[1].addEventListener('input', setStok);
startStop[0].addEventListener('click', canvasStart)
startStop[1].addEventListener('click', canvasReset)