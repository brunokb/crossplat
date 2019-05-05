// example.js file
// Wait for device API libraries to load
//
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
    // Add similar listeners for other events
}

function onPause() {
    console.log("onPause");
}

function onResume() {
    console.log("onResume");
}

function onMenuKeyDown() {
    // Handle the menubutton event
}

//document.getElementById("newTask").addEventListener("click", showLocalStorage);
function showLocalStorage() {
    document.getElementById("demo").innerHTML = "value is empty";
}
document.getElementById("newTask").addEventListener("click", incrementCount);
function incrementCount() {
//    document.frm.count.value = parseInt(document.frm.count.value) + 1;
    addTextBox();
}

function decCount() {
    document.frm.count.value = parseInt(document.frm.count.value) - 1;
    removeTextBox();
}
function addTextBox() {
    var form = document.frm;
    form.appendChild(document.createElement('div')).innerHTML = "<table width=\\'40&#37; \\'>"+"<tr><td>Name</td><td><input type=\\'text\\' name=\\'txt\\'></td></tr>"+ "</table>";
}
function removeTextBox() {
    var form = document.frm;
    if (form.lastChild.nodeName.toLowerCase() == 'div')
        form.removeChild(form.lastChild);
}



// Add similar event handlers for other events