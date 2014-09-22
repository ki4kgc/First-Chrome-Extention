/*
  *Credit to http://www.codeave.com/javascript/code.asp?u_log=7056
  *
*/

// This is the function that will open the
// new window when the mouse is moved over the link


/*
function open_new_window() 
{
new_window = open("","hoverwindow","width=300,height=200,left=10,top=10");

// open new document 
new_window.document.open();

// Text of the new document
// Replace your " with ' or \" or your document.write statements will fail
new_window.document.write("<html><title>JavaScript New Window</title>");
new_window.document.write("<body bgcolor=\"#FFFFFF\">");
new_window.document.write("This is a new html document created by JavaScript ");
new_window.document.write("statements contained in the previous document.");
new_window.document.write("<br>");
new_window.document.write("</body></html>");

// close the document
new_window.document.close(); 
}

// This is the function that will close the
// new window when the mouse is moved off the link
function close_window() 
{
new_window.close();
}

document.body.innerHTML = document.body.innerHTML.replace(new RegExp("books.html\"", "g"), "books.html\" onMouseOver=\"open_new_window()\" onMouseOut=\"close_window()\"");
*/

/*

var a = document.getElementsByTagName('a');
for (i = 0; i < a.length; i++) {
    a[i].addEventListener('mouseover', function () {
        console.log(this.href);
    });
};

*/
//new_window = open(a,"hoverwindow","width=300,height=200,left=10,top=10");
//window.alert(a);

var links = document.links;

for (var i = 0; i< links.length; i++){
	links[i].addEventListener('mouseover', moused);
	
}

function moused(){
	var mousedlink = this.href;
	console.log(mousedlink);
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

	httpRequest.onreadystatechange = function() {
	 // make sure load is successful and not an error
		 if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			 var data = JSON.parse(httpRequest.responseText);
			 //console.log("Pulling - " + data);
			 // ... do something with the data ...
		 }
	}
	httpRequest.open("GET", url, true);
	httpRequest.send();
}

var popup = document.createElement("div");
	popup.id = "my-popup";
	document.body.appendChild(popup);

	popup.style.top = 100 + "px";
	popup.style.left = 200 +"px";

	popup.innerHTML = "something here";


