var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var newDate = new Date();





function add_and_display_message() {
     let newMessage = document.createElement("ul");
     newMessage.innerHTML = textbox.value;
     messages.prepend(newMessage, newDate);
     textbox.value = "";
};

function add_and_display_message_using_classes() {
     let message = new Message(textbox.value);
     let newMessage = document.createElement("ul");
     newMessage.innerText = message.text ;
     messages.prepend(newMessage);
     textbox.value = "";
};

button.addEventListener("click", add_and_display_message_using_classes);