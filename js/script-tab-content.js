document.addEventListener('DOMContentLoaded', function () {
	function dynamic_search(){
		var body = document.getElementByTagName('body'), 
			content=body.innerHTML, 
			value = localStorage["draxme-note"], 
			reg;
		content=content.replace(/<\/?span[^>]*>/ig,''); // pas de surlignage
		if (value) {
			reg=new RegExp("(" + value + ")", "gi");
		    // surlignage des mots \b une coupure de mot
		    content=content.replace(reg,"<span class='draxme-underligne'>$1</span>");
		}
	    body.innerHTML = content;
	}
	dynamic_search();
});