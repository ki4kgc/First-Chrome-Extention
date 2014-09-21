/*
  *Credit to http://www.codeave.com/javascript/code.asp?u_log=7056
  *
*/

// This is the function that will open the
// new window when the mouse is moved over the link

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
