

let menu = document.querySelectorAll(".al");
let laMenu = document.querySelectorAll(".la");

var editor = document.querySelector(".editor");

editor.innerHTML = data[0].pythonCode;


let desText = document.querySelectorAll("h2,.destext");

var menuCurrent = menu[0];
var languageCurrent = laMenu[0];


function writeText(txt){
    editor.innerHTML += txt;
}

function menuClick(){
	menuCurrent.classList.toggle("active");
	this.classList.add("active");
	console.log(this);
	menuCurrent = this;
	changesData(this.dataset.index)
} 

function laMenuClick(){
	languageCurrent.classList.toggle("active");
	this.classList.add("active");
	console.log(this);
	languageCurrent = this;
	
	if(languageCurrent.dataset.index == 0){
			editor.innerHTML = data[3].pythonCode;
	}else if(languageCurrent.dataset.index == 1){
		editor.innerHTML = data[3].javascriptCode;
	}else if(languageCurrent.dataset.index == 2){
		editor.innerHTML = data[3].cppCode;
	}else if(languageCurrent.dataset.index == 3){
		editor.innerHTML = data[3].cCode;
	}
	
}

function changesData(index) {
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


}

 menu.forEach(a => a.addEventListener('click', menuClick))
 laMenu.forEach(a => a.addEventListener('click', laMenuClick))