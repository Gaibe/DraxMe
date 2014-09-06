function get_note(){
	if(localStorage["draxme-note"]){
		document.getElementById("area-content").value = localStorage["draxme-note"];
	}
}

function save_note(){
	var content_id = document.getElementById("area-content");
	localStorage["draxme-note"] = content_id.value;
	
	organize_note();
}

function delete_note(){
	localStorage.removeItem("draxme-note");
	location.reload();
}

function organize_note(){
	var content_id = document.getElementById("area-content");
	var content = content_id.value;
	var content_split = content.split("\n");
	
	var out="";
	for (var i in content_split) {
		out += "<p id='splitted_" + i + "'>" + content_split[i] + "</p>\n";
    }
	content = out;
}


document.addEventListener('DOMContentLoaded', function () {
	var interact_id = document.getElementById("interact");
	var delete_id = document.getElementById("delete");
	var content_id = document.getElementById("area-content");
	get_note();

	content_id.addEventListener("change", save_note);
	delete_id.addEventListener("click", delete_note, false);
	interact_id.addEventListener("click", save_note, false);
});