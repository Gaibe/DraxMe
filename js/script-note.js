function get_note(){
	if(localStorage["draxme-note"]){
		document.getElementById("area-content").value = localStorage["draxme-note"];
	}
}

function save_note(){
	var content_id = document.getElementById("area-content");
	localStorage["draxme-note"] = content_id.value;
}

function delete_note(){
	localStorage.removeItem("draxme-note");
	location.reload();
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