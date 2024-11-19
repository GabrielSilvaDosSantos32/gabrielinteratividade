//Seleciona os elementos necessáios
const botao = document.getElementById('botao');
const lampada = document.getElementById('lampada');
const statusTexto = document.getElementById('status');

//Função para alternar o estado da lâmpada
function alternarLampada() {
    if (botao.textContent == 'Ligar') {
        //Muda para o estado "aceso"
        lampada.src = 'ligado.png'; //Caminho da imagem acesa
        botao.textContent = 'Desligar'; //Muda o texto do botão para "Apagar"
        statusTexto.textContent = 'Aceso'; //Muda o status para "Aceso"
        statusTexto.style.color = 'orange'; //Muda a cor do texto para laranja
        statusTexto.style.fontSize = '30px';
} else{
    //Muda para o estado "Apagado"
    lampada.src = 'apagado.png'; //Caminho da imagem apagada
    botao.textContent = 'Ligar'; //Muda o texto do botão para "Ligar"
    statusTexto.textContent = 'Apagado'; //Muda o status para "Apagado"
    statusTexto.style.fontSize = '30px';
    statusTexto.style.color = 'rgb(126, 125, 125)'; //Muda a cor do texto para cinza
    }
}

// Adiciona o evento de clique ao botão
botao.addEventListener('click', alternarLampada);


//Java Script                                                       -->linguagem de programação
//                                                                 -->responsável pela interatividade

//Variável                                                                                                                                                                                                                                                                                                                                                                                             -->Espaço na memória para armazenar info.                                                                                                                                                                                                                                                                                                                                                                                                -->Criar variaveil    -cost nome(imnudável)  -let nome(mudável)  -var nome (esprexão antiga)

// Função (fuction): um bloco de instruções que escrita uma tarefa ou instrução. criando função:                                                                                                                                                                                                   fuction nome() {                                                                                                                                                                                                   código a ser executado                                                                                                                                                                                          }

//Regras para nomear variável e funções: -->Nome único.  -->Não pode ter acento. -->Não pode começar com letra maiuscula.  -->Não pode utilizar palavras reservadas( comandos que tem uma função específica ex: "fuction").  --Não podemos usar caracteres especiais ex: @,#,$.

//Ex: Let matriculaAluno/ Let endereco.
