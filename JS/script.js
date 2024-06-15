function abrirChat() {
    var chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = 'block';
}

function fecharChat() {
    var chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = 'none';
}

function enviarMensagem() {
    var input = document.getElementById('chat-input');
    var mensagem = input.value.trim();
    
    if(mensagem) {
        var chatBody = document.getElementById('chat-body');
        var novaMensagem = document.createElement('p');
        novaMensagem.textContent = mensagem;
        chatBody.appendChild(novaMensagem);
        
        input.value = ''; // Limpa o campo de entrada
        chatBody.scrollTop = chatBody.scrollHeight; // Rola para a última mensagem
    }
}

function logout(){
    window.location.href = "index.html"
}
function Admin2(){
    window.location.href = "Admin2.html"
}
function Admin1(){
    window.location.href = "Admin.html"
}

function chat(){
 window.location.href = "Admin.html"
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Adiciona o evento de clique a todos os botões 'Aceitar' e 'Recusar'
    document.querySelectorAll('.project button').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none'; // Esconde o elemento pai, que é o div do projeto
        });
    });
});
