const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com esse pequeno encontro dos dois, Meg com toda a certeza achará que isso foi um pequeno acidente e que os dois não se encontraram tão cedo na faculdade, mas o que ela menos esperava era que ele seria seu colega de quarto. O que ela deve fazer?",
        alternativas: [
            {
                texto: "Pedir para que troquem a de quarto.",
                afirmacao: "Meg pediu para trocar de quarto para não ver o Felipe, evitando seu desconforto com a presença de Felipe."
            },
            {
                texto: "Ficar no quarto e fingir naturalidade.",
                afirmacao: "Meg decidiu ficar no quarto, e tentar puxar asunto com Felipe e descobrir sobre ele."
            }
        ]
    },
    {
        enunciado: "E com toda a sua coragem decidiu puxar assunto com Felipe, anres de sair do quarto para ver como é a faculdade. E os dois com a converça que tiveram, se deram bem? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Os dois converçaram muito e descobriram bastante um sobre o outro, e gostaram muito da compania um do outro"
            },
            {
                texto: "Não",
                afirmacao: "Quando Meg foi puchar assunto com ele, Felipe foi seco com suas resposta, e Meg não gostando disso virou as costas e foi embora"
            }
        ]
    },
    {
        enunciado: "Meg decidiu ir ver o campo da faculdade e chamou Felipe para ir junto.Qual a foi a ressposta dele? ",
        alternativas: [
            {
                texto: "Claro que vou Meg",
                afirmacao: "Felipe gostou da ideia e decidiu ir com ela, e aproveitou comprar um refri para os dois"
            },
            {
                texto: "Nem pensar",
                afirmacao: "Ele recusa com todo o deboche que tinha, e saiu do quarto sem mais nem menos"
            }
        ]
    },
    {
        enunciado: "Curioza para saber se eles se encontrariam durante as aulas ela perguntou se ele teria alguma aula com ela. E a resposta dele foi?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
