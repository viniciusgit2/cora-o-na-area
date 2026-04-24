const categorias = {
  coracao: {
    nome: "Coração na Área",
    descricao: "Sistema Cardiovascular",
    icone: "❤️",
    perguntas: [
      {
        tema: "Aquecimento: componentes do sistema",
        pergunta: "O sistema cardiovascular é formado por bomba, artérias, capilares e veias. Qual estrutura atua como a bomba principal do corpo?",
        alternativas: ["Pulmão", "Coração", "Fígado", "Diafragma"],
        correta: 1,
        explicacao: "O coração é a bomba que impulsiona o sangue. No clima do futebol, ele é o motor do time dentro do corpo."
      },
      {
        tema: "Primeiro toque: funções do sistema",
        pergunta: "Qual função depende diretamente do sistema cardiovascular durante uma corrida em campo?",
        alternativas: ["Levar oxigênio aos tecidos ativos", "Produzir ossos longos", "Controlar a cor dos olhos", "Formar impressões digitais"],
        correta: 0,
        explicacao: "Uma das funções destacadas é levar oxigênio aos tecidos ativos, algo essencial quando o corpo entra em esforço."
      },
      {
        tema: "Leitura de jogo: pressão sanguínea",
        pergunta: "Quais vasos realizam a troca de substâncias com os tecidos e ao mesmo tempo integram a distribuição do sangue pelo corpo?",
        alternativas: ["Capilares", "Ventrículos", "Veias cavas", "Valvas"],
        correta: 0,
        explicacao: "Os capilares são os vasos de troca. É neles que ocorrem as permutas entre o sangue e os tecidos."
      },
      {
        tema: "Clássico das valvas",
        pergunta: "As valvas cardíacas garantem fluxo em um único sentido. Qual combinação entre valva e nome está correta?",
        alternativas: ["AV direita = mitral", "AV esquerda = mitral ou bicúspide", "Semilunar aórtica = átrio esquerdo", "AV direita = pulmonar"],
        correta: 1,
        explicacao: "A valva AV esquerda é a mitral, também chamada de bicúspide. Já a AV direita é a tricúspide."
      },
      {
        tema: "Bola na área: raciocínio anatômico",
        pergunta: "Se uma jogada começa no ventrículo esquerdo e segue para o corpo, por qual estrutura o sangue passa logo ao sair desse ventrículo?",
        alternativas: ["Tronco pulmonar", "Veia cava superior", "Aorta", "Átrio direito"],
        correta: 2,
        explicacao: "O ventrículo esquerdo lança o sangue para a aorta. É a saída da grande circulação."
      },
      {
        tema: "Fôlego de jogador: coronárias",
        pergunta: "O fluxo coronariano aumenta em qual momento do ciclo cardíaco?",
        alternativas: ["Durante o relaxamento ventricular", "Durante uma febre", "Durante a contração dos átrios apenas", "Somente quando a pessoa corre"],
        correta: 0,
        explicacao: "O fluxo coronariano aumenta no relaxamento ventricular. Nesse momento, o próprio coração recebe melhor irrigação."
      },
      {
        tema: "Finalização: aplicação no futebol",
        pergunta: "Durante um sprint para alcançar a bola, qual resposta do sistema cardiovascular faz mais sentido para manter o desempenho do jogador?",
        alternativas: ["Menor entrega de oxigênio aos músculos", "Maior envio de sangue aos tecidos ativos", "Fechamento permanente das coronárias", "Parada temporária do coração"],
        correta: 1,
        explicacao: "Em esforço intenso, o sistema cardiovascular aumenta a entrega de sangue e oxigênio aos músculos ativos para sustentar a jogada."
      }
    ]
  },
  futebol: {
    nome: "Futebol",
    descricao: "Regras, história e curiosidades",
    icone: "⚽",
    perguntas: [
      {
        tema: "Regras do jogo",
        pergunta: "Quantos jogadores cada time coloca em campo em uma partida oficial de futebol?",
        alternativas: ["9", "10", "11", "12"],
        correta: 2,
        explicacao: "Cada equipe tem 11 jogadores em campo, incluindo o goleiro. Essa é uma das regras básicas do futebol estabelecidas pela FIFA."
      },
      {
        tema: "Regras do jogo",
        pergunta: "Qual é a duração oficial de uma partida de futebol?",
        alternativas: ["80 minutos", "90 minutos", "100 minutos", "120 minutos"],
        correta: 1,
        explicacao: "Uma partida oficial de futebol tem 90 minutos, divididos em dois tempos de 45 minutos cada."
      },
      {
        tema: "Regras do jogo",
        pergunta: "O que é um pênalti no futebol?",
        alternativas: ["Falta cometida fora da área", "Cobrança de falta dentro da área adversária", "Falta cometida dentro da grande área que resulta em chute a gol de 11 metros", "Gol marcado de longe"],
        correta: 2,
        explicacao: "O pênalti é cobrado quando ocorre uma infração dentro da grande área. O jogador chuta da marca de 11 metros diretamente para o gol, com apenas o goleiro na defesa."
      },
      {
        tema: "Copa do Mundo",
        pergunta: "Qual seleção é a maior vencedora da Copa do Mundo FIFA?",
        alternativas: ["Alemanha", "Argentina", "Itália", "Brasil"],
        correta: 3,
        explicacao: "O Brasil é pentacampeão mundial, vencendo as Copas de 1958, 1962, 1970, 1994 e 2002, sendo a seleção mais vencedora da história."
      },
      {
        tema: "Copa do Mundo",
        pergunta: "Em que país foi realizada a primeira Copa do Mundo de futebol, em 1930?",
        alternativas: ["Brasil", "França", "Uruguai", "Argentina"],
        correta: 2,
        explicacao: "A primeira Copa do Mundo foi realizada no Uruguai em 1930, e a seleção uruguaia sagrou-se campeã em seu próprio país."
      },
      {
        tema: "Posições e táticas",
        pergunta: "Qual a função principal do jogador que atua como goleiro?",
        alternativas: ["Marcar gols", "Impedir que a bola entre na própria meta", "Distribuir o jogo pelo meio-campo", "Cobrar escanteios"],
        correta: 1,
        explicacao: "O goleiro é o único jogador que pode usar as mãos dentro da grande área e sua principal função é defender o gol, impedindo que o adversário marque."
      },
      {
        tema: "Regras do jogo",
        pergunta: "O que acontece quando a bola cruza totalmente a linha lateral do campo?",
        alternativas: ["Pênalti", "Escanteio", "Lateral", "Tiro de meta"],
        correta: 2,
        explicacao: "Quando a bola sai completamente pela linha lateral, é cobrada uma cobrança de lateral pelo time adversário ao que tocou por último na bola."
      }
    ]
  },
  informatica: {
    nome: "Concurso Público",
    descricao: "Informática",
    icone: "💻",
    perguntas: [
      {
        tema: "Concurso Público - Informática: hardware",
        pergunta: "Qual componente é responsável por processar as instruções de um programa no computador?",
        alternativas: ["HD (disco rígido)", "Memória RAM", "CPU (processador)", "Placa de vídeo"],
        correta: 2,
        explicacao: "A CPU (Unidade Central de Processamento) é o 'cérebro' do computador, responsável por executar as instruções dos programas."
      },
      {
        tema: "Concurso Público - Informática: sistema operacional",
        pergunta: "Qual das alternativas é um sistema operacional comumente cobrado em concursos públicos?",
        alternativas: ["Microsoft Word", "Windows 10", "Adobe Acrobat", "Mozilla Firefox"],
        correta: 1,
        explicacao: "Windows 10 é um sistema operacional. Word, Acrobat e Firefox são aplicativos que rodam sobre o sistema operacional."
      },
      {
        tema: "Concurso Público - Informática: internet e redes",
        pergunta: "O protocolo HTTP é utilizado para qual finalidade na internet?",
        alternativas: ["Enviar e-mails entre servidores", "Transferir arquivos entre computadores via FTP", "Transmitir páginas web entre servidor e navegador", "Conectar computadores em rede local"],
        correta: 2,
        explicacao: "O HTTP (HyperText Transfer Protocol) é o protocolo padrão para transmissão de páginas web entre servidores e navegadores."
      },
      {
        tema: "Concurso Público - Informática: segurança",
        pergunta: "Qual tipo de software malicioso se disfarça de programa legítimo para enganar o usuário e abrir acesso ao sistema?",
        alternativas: ["Firewall", "Cavalo de Troia (Trojan)", "Antivírus", "VPN"],
        correta: 1,
        explicacao: "O Cavalo de Troia (Trojan) se apresenta como um programa útil, mas executa ações maliciosas em segundo plano, comprometendo o sistema."
      },
      {
        tema: "Concurso Público - Informática: pacote Office",
        pergunta: "No Microsoft Excel, qual função é usada para somar valores de um intervalo que atendem a uma condição específica?",
        alternativas: ["SOMA", "CONT.SE", "SOMASE", "MÉDIA"],
        correta: 2,
        explicacao: "A função SOMASE soma os valores de um intervalo que satisfazem um critério determinado, sendo amplamente cobrada em concursos."
      },
      {
        tema: "Concurso Público - Informática: armazenamento",
        pergunta: "Qual unidade de medida representa 1024 megabytes (MB)?",
        alternativas: ["1 Kilobyte (KB)", "1 Terabyte (TB)", "1 Gigabyte (GB)", "1 Petabyte (PB)"],
        correta: 2,
        explicacao: "1 Gigabyte equivale a 1024 Megabytes. Essa hierarquia de unidades (KB, MB, GB, TB) é recorrente em questões de concurso."
      },
      {
        tema: "Concurso Público - Informática: navegadores",
        pergunta: "O que é um cookie no contexto dos navegadores de internet?",
        alternativas: ["Um vírus que ataca o navegador", "Um arquivo que armazena informações do usuário no computador", "Um tipo de conexão segura", "Um programa para bloquear anúncios"],
        correta: 1,
        explicacao: "Cookies são pequenos arquivos salvos pelo navegador no computador do usuário para armazenar preferências, sessões e dados de navegação."
      }
    ]
  }
};

let perguntasAtuais = [];
let categoriaAtual = null;

// --- Música de fundo ---
const bgMusic = document.getElementById("bg-music");
const bgMusic2 = document.getElementById("bg-music-2");
const musicToggle = document.getElementById("music-toggle");
let musicaAtiva = false;

musicToggle.addEventListener("click", () => {
  if (musicaAtiva) {
    bgMusic.pause();
    bgMusic2.pause();
    musicaAtiva = false;
    musicToggle.textContent = "🔇";
  } else {
    bgMusic.play();
    bgMusic2.play();
    musicaAtiva = true;
    musicToggle.textContent = "🔊";
  }
});

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const nextButton = document.getElementById("next-button");
const heroCard = document.getElementById("hero-card");
const categoryCard = document.getElementById("category-card");
const gameCard = document.getElementById("game-card");
const resultCard = document.getElementById("result-card");
const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progress");
const timerElement = document.getElementById("timer");
const themeLine = document.getElementById("theme-line");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const feedbackPanel = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const resultTitle = document.getElementById("result-title");
const resultSummary = document.getElementById("result-summary");
const resultTag = document.getElementById("result-tag");
const vidasElement = document.getElementById("vidas");

let indiceAtual = 0;
let pontuacao = 0;
let vidas = 3;
const TOTAL_VIDAS = 3;
const TEMPO_LIMITE = 60;
let tempoRestante = TEMPO_LIMITE;
let temporizador = null;
let respondeu = false;
let contextoAudio = null;

function tocarSom(tipo) {
  const AudioContexto = window.AudioContext || window.webkitAudioContext;

  if (!AudioContexto) {
    return;
  }

  if (!contextoAudio) {
    contextoAudio = new AudioContexto();
  }

  if (contextoAudio.state === "suspended") {
    contextoAudio.resume();
  }

  const configuracoes = {
    inicio: [
      { frequencia: 440, duracao: 0.08, atraso: 0 },
      { frequencia: 660, duracao: 0.12, atraso: 0.09 }
    ],
    acerto: [
      { frequencia: 523.25, duracao: 0.08, atraso: 0 },
      { frequencia: 659.25, duracao: 0.1, atraso: 0.08 },
      { frequencia: 783.99, duracao: 0.14, atraso: 0.18 }
    ],
    erro: [
      { frequencia: 260, duracao: 0.12, atraso: 0 },
      { frequencia: 180, duracao: 0.18, atraso: 0.1 }
    ],
    tempo: [
      { frequencia: 190, duracao: 0.12, atraso: 0 },
      { frequencia: 150, duracao: 0.18, atraso: 0.12 }
    ]
  };

  const notas = configuracoes[tipo];

  if (!notas) {
    return;
  }

  const inicio = contextoAudio.currentTime;

  notas.forEach((nota) => {
    const oscilador = contextoAudio.createOscillator();
    const ganho = contextoAudio.createGain();

    oscilador.type = tipo === "erro" || tipo === "tempo" ? "sawtooth" : "triangle";
    oscilador.frequency.setValueAtTime(nota.frequencia, inicio + nota.atraso);

    ganho.gain.setValueAtTime(0.0001, inicio + nota.atraso);
    ganho.gain.exponentialRampToValueAtTime(0.08, inicio + nota.atraso + 0.02);
    ganho.gain.exponentialRampToValueAtTime(0.0001, inicio + nota.atraso + nota.duracao);

    oscilador.connect(ganho);
    ganho.connect(contextoAudio.destination);

    oscilador.start(inicio + nota.atraso);
    oscilador.stop(inicio + nota.atraso + nota.duracao);
  });
}

function mostrarSelecaoCategoria() {
  heroCard.classList.add("hidden");
  categoryCard.classList.remove("hidden");
  gameCard.classList.add("hidden");
  resultCard.classList.add("hidden");
}

function escolherCategoria(chave) {
  categoriaAtual = categorias[chave];
  perguntasAtuais = categoriaAtual.perguntas;
  categoryCard.classList.add("hidden");
  iniciarJogo();
}

function iniciarJogo() {
  indiceAtual = 0;
  pontuacao = 0;
  vidas = TOTAL_VIDAS;
  gameOverChamado = false;
  atualizarVidas();
  tocarSom("inicio");
  bgMusic.play();
  bgMusic2.play();
  musicaAtiva = true;
  musicToggle.textContent = "🔊";
  mostrarTelaJogo();
  carregarPergunta();
}

function atualizarVidas() {
  vidasElement.textContent = "❤️".repeat(vidas) + "🧡".repeat(TOTAL_VIDAS - vidas);
}

function perderVida() {
  vidas -= 1;
  atualizarVidas();
  if (vidas <= 0) {
    setTimeout(gameOver, 1800);
  }
}

let gameOverChamado = false;

function gameOver() {
  if (gameOverChamado) return;
  gameOverChamado = true;
  limparTimer();
  gameCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  resultTag.textContent = "Game Over";
  resultTitle.textContent = "Suas vidas acabaram! 💔";
  resultSummary.textContent = `Você acertou ${pontuacao} de ${perguntasAtuais.length} antes de perder todas as vidas. Tente novamente!`;
}

function mostrarTelaJogo() {
  gameCard.classList.remove("hidden");
  resultCard.classList.add("hidden");
  atualizarPlacar();
}

function atualizarPlacar() {
  scoreElement.textContent = String(pontuacao);
  progressElement.textContent = `${indiceAtual + 1}/${perguntasAtuais.length}`;
}

function carregarPergunta() {
  respondeu = false;
  tempoRestante = TEMPO_LIMITE;
  atualizarPlacar();
  atualizarTimer();
  feedbackPanel.classList.add("hidden");

  const perguntaAtual = perguntasAtuais[indiceAtual];
  themeLine.textContent = perguntaAtual.tema;
  questionText.textContent = perguntaAtual.pergunta;
  answersContainer.innerHTML = "";

  perguntaAtual.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");
    botao.className = "answer-button";
    botao.type = "button";
    botao.textContent = alternativa;
    botao.addEventListener("click", () => selecionarResposta(indice, botao));
    answersContainer.appendChild(botao);
  });

  iniciarTimer();
}

function iniciarTimer() {
  limparTimer();
  temporizador = window.setInterval(() => {
    tempoRestante -= 1;
    atualizarTimer();

    if (tempoRestante <= 0) {
      tempoEsgotado();
    }
  }, 1000);
}

function limparTimer() {
  if (temporizador !== null) {
    window.clearInterval(temporizador);
    temporizador = null;
  }
}

function atualizarTimer() {
  timerElement.textContent = String(tempoRestante);
}

function selecionarResposta(indiceSelecionado, botaoSelecionado) {
  if (respondeu) {
    return;
  }

  respondeu = true;
  limparTimer();

  const perguntaAtual = perguntasAtuais[indiceAtual];
  const botoes = Array.from(document.querySelectorAll(".answer-button"));
  const acertou = indiceSelecionado === perguntaAtual.correta;

  botoes.forEach((botao, indice) => {
    botao.disabled = true;

    if (indice === perguntaAtual.correta) {
      botao.classList.add("correct");
    }
  });

  if (acertou) {
    pontuacao += 1;
    botaoSelecionado.classList.add("correct");
    feedbackTitle.textContent = "Gol de conhecimento!";
    tocarSom("acerto");
  } else {
    botaoSelecionado.classList.add("wrong");
    feedbackTitle.textContent = "Quase!";
    tocarSom("erro");
    perderVida();
  }

  scoreElement.textContent = String(pontuacao);
  feedbackText.textContent = perguntaAtual.explicacao;
  feedbackPanel.classList.remove("hidden");
}

function tempoEsgotado() {
  if (respondeu) {
    return;
  }

  respondeu = true;
  limparTimer();

  const perguntaAtual = perguntasAtuais[indiceAtual];
  const botoes = Array.from(document.querySelectorAll(".answer-button"));

  botoes.forEach((botao, indice) => {
    botao.disabled = true;

    if (indice === perguntaAtual.correta) {
      botao.classList.add("correct");
    }
  });

  feedbackTitle.textContent = "Tempo encerrado!";
  feedbackText.textContent = `${perguntaAtual.explicacao} A resposta certa era: ${perguntaAtual.alternativas[perguntaAtual.correta]}.`;
  feedbackPanel.classList.remove("hidden");
  tocarSom("tempo");
  perderVida();
}

function avancarPergunta() {
  if (vidas <= 0) {
    return;
  }

  indiceAtual += 1;

  if (indiceAtual >= perguntasAtuais.length) {
    mostrarResultado();
    return;
  }

  carregarPergunta();
}

function mostrarResultado() {
  limparTimer();
  gameCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  const total = perguntasAtuais.length;
  const chave = categoriaAtual ? Object.keys(categorias).find(k => categorias[k] === categoriaAtual) : "coracao";

  const mensagens = {
    coracao: {
      alto: ["Craque do coração", "Mandou muito bem e mostrou domínio total do sistema cardiovascular."],
      medio: ["Boa partida", "Está no caminho certo, mas ainda dá para treinar mais alguns lances."],
      baixo: ["Hora do treino", "Vale revisar o material e jogar outra vez para ganhar ritmo."]
    },
    futebol: {
      alto: ["Campeão!", "Você mandou muito bem! Conhece futebol de verdade."],
      medio: ["Boa partida", "Você sabe bastante, mas ainda tem alguns lances para aprender."],
      baixo: ["Hora de ver mais jogos!", "Que tal rever as regras e curiosidades do futebol antes de tentar outra vez?"]
    },
    informatica: {
      alto: ["Aprovado com louvor!", "Excelente desempenho! Você está pronto para a prova."],
      medio: ["Na zona de corte", "Bom resultado, mas ainda há pontos para reforçar antes da prova."],
      baixo: ["Hora de estudar mais", "Revise o conteúdo e tente novamente para melhorar sua pontuação."]
    }
  };

  const msg = mensagens[chave] || mensagens.coracao;
  let nivel;

  if (pontuacao >= Math.ceil(total * 0.85)) {
    nivel = "alto";
  } else if (pontuacao >= Math.ceil(total * 0.57)) {
    nivel = "medio";
  } else {
    nivel = "baixo";
  }

  resultTag.textContent = "Fim da partida";
  resultTitle.textContent = msg[nivel][0];
  resultSummary.textContent = `Você fez ${pontuacao} de ${total}. ${msg[nivel][1]}`;
}

startButton.addEventListener("click", mostrarSelecaoCategoria);
restartButton.addEventListener("click", mostrarSelecaoCategoria);
nextButton.addEventListener("click", avancarPergunta);

document.getElementById("cat-coracao").addEventListener("click", () => escolherCategoria("coracao"));
document.getElementById("cat-futebol").addEventListener("click", () => escolherCategoria("futebol"));
document.getElementById("cat-informatica").addEventListener("click", () => escolherCategoria("informatica"));