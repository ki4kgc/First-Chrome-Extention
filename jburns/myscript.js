var links = document.links;

for (var i = 0; i< links.length; i++){
	links[i].addEventListener('mouseover', moused);
	
}

function moused(){
	var mousedlink = this.href;
	console.log("Link - " + mousedlink);
	//window.alert(this.href);
	//
	//Insert code here to create popup and load other page
	//Thanks to http://stackoverflow.com/questions/8318591/javascript-addeventlistener-using-to-create-a-mouseover-effect 
	//for useful info about mouseover
	//AND
	//https://developer.mozilla.org/en-US/docs/Web/API/document.links
	//For info about dom links

	//window.alert(mousedlink)
	inforequest(mousedlink);

}
function inforequest(url){
	//Connect to link and find info
	//window.alert("Moused over - " + url);

	var httpRequest = new XMLHttpRequest();

	httpRequest.open("GET", url, true);

	httpRequest.onreadystatechange = function() {
	 // make sure load is successful and not an error
		 if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			 
			 //Thanks to http://stackoverflow.com/questions/8610725/get-the-title-of-a-page-using-a-url-from-within-a-chrome-extension
			 //for exec httpRequest info
			 
			 var whatsTheTitle =(/<title>(.*?)<\/title>/m).exec(httpRequest.responseText)[1];
			 
			 console.log("Summary - "  + whatsTheTitle);
			 alert("Summary - "  + whatsTheTitle);
		 
		 }
	}
	
	httpRequest.send();
}
