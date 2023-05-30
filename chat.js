let listaMensagens= [];

function adicionarMensagem(apelido,mensagem){
  listaMensagens.push({
    "apelido": apelido,
    "mensagem": mensagem
  })
}

function formatarMensagens(){
  let htmlData='';
  
for(let i=0;i<listaMensagens.length;i++){


let mensagem=listaMensagens[i];
 htmlData += '<div class="chat-message">';
 htmlData += '<span class="chat-message-apelido">'+mensagem.apelido+ 
 '</span>';
 htmlData += '<span class="chat-message-item">'+mensagem.mensagem+
 '</span>';
 htmlData += '</div>';
  
  }
  

  return htmlData;
}


function atualizarHTML(){
let chatme=document.getElementById('chat-messages');
chatme.innerHTML=formatarMensagens();
}

function commitMessageClickHandler(){
let messageInput=document.querySelector('#message-input');


if(messageInput.value.trim().length==0){
messageInput.focus();
return;

}

adicionarMensagem("Usúario: ",messageInput.value)
atualizarHTML();
document.getElementById("message-input").value=''
}

