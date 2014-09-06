function color_it(){
	var rand = Math.floor((Math.random() * 10) + 1);
	var color = "red";
	var font_color = "black";
	switch(rand){
		case 1:
			color = "aqua";
			font_color = "black";
		break;
		case 2:
			color = "blue";
			font_color = "white";
		break;
		case 3:
			color = "fuchsia";
			font_color = "black";
		break;
		case 4:
			color = "green";
			font_color = "white";
		break;
		case 5:
			color = "lime";
			font_color = "black";
		break;
		case 6:
			color = "navy";
			font_color = "white";
		break;
		case 7:
			color = "purple";
			font_color = "white";
		break;
		case 8:
			color = "teal";
			font_color = "white";
		break;
		case 9:
			color = "yellow";
			font_color = "black";
		break;
	}
	
	var content_id = document.getElementById("area-content");
	content_id.style.backgroundColor = color;
	content_id.style.color = font_color;
}

function research_content(){
	chrome.tabs.executeScript(null, {file: "js/script-tab-content.js"});
	chrome.tabs.insertCSS(null, {file: "css/active-tab.css"});
}


document.addEventListener('DOMContentLoaded', function () {
	var content_id = document.getElementById("area-content");
	var interact_id = document.getElementById("interact");

	content_id.addEventListener("dblclick", color_it, false);
	interact_id.addEventListener("click", research_content, false);
});