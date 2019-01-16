var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var newDate = new Date();




function add_and_display_message() {
     var newMessage = document.createElement("ul");
     newMessage.innerHTML = textbox.value;
     messages.prepend(newMessage, newDate);
     textbox.value = "";
};

button.addEventListener("click", add_and_display_message);