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
    window.open("/Login.html","_self")
}
function Admin2(){
    window.open("/Admin2.html","_self")
}
function Admin1(){
    window.open("/Admin.html","_self")
}

function chat(){
    window.open("/Admin.html","_self")
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Adiciona o evento de clique a todos os botões 'Aceitar' e 'Recusar'
    document.querySelectorAll('.project button').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none'; // Esconde o elemento pai, que é o div do projeto
        });
    });
});
