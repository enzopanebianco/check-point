var botao = document.getElementById("chatBtn");
var chat = document.getElementById("chat");

botao.onclick = function() {
    chat.classList.toggle("hide");
}