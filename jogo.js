const categorias = {
  coracao: {
    nome: "Medicona e Odonto",
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
      },
      {
        tema: "Câmaras do coração",
        pergunta: "Qual câmara do coração recebe o sangue oxigenado proveniente dos pulmões?",
        alternativas: ["Ventrículo direito", "Átrio direito", "Átrio esquerdo", "Ventrículo esquerdo"],
        correta: 2,
        explicacao: "O átrio esquerdo recebe o sangue rico em oxigênio vindo das veias pulmonares. Em seguida, ele passa para o ventrículo esquerdo, que o bombeia para o corpo."
      },
      {
        tema: "Frequência cardíaca",
        pergunta: "Qual é a faixa de frequência cardíaca considerada normal em repouso para um adulto saudável?",
        alternativas: ["20 a 40 bpm", "40 a 59 bpm", "60 a 100 bpm", "110 a 140 bpm"],
        correta: 2,
        explicacao: "A frequência cardíaca normal em repouso varia de 60 a 100 batimentos por minuto (bpm). Atletas podem ter valores mais baixos, em torno de 50 bpm."
      },
      {
        tema: "Sistema elétrico do coração",
        pergunta: "Qual estrutura é responsável por iniciar o impulso elétrico que desencadeia cada batimento cardíaco?",
        alternativas: ["Nodo atrioventricular (NAV)", "Feixe de His", "Fibras de Purkinje", "Nodo sinoatrial (NSA)"],
        correta: 3,
        explicacao: "O nodo sinoatrial (NSA), localizado no átrio direito, é o marcapasso natural do coração. Ele gera o impulso elétrico que comanda cada ciclo cardíaco."
      },
      {
        tema: "Pressão arterial",
        pergunta: "O que representa o valor 'sistólico' em uma medição de pressão arterial como 120/80 mmHg?",
        alternativas: ["A pressão durante o relaxamento ventricular", "A resistência das veias ao fluxo", "A pressão durante a contração ventricular", "O volume de sangue no átrio"],
        correta: 2,
        explicacao: "O valor sistólico (120 no exemplo) é a pressão máxima gerada durante a contração dos ventrículos. O valor diastólico (80) é a pressão mínima, no relaxamento."
      },
      {
        tema: "Débito cardíaco",
        pergunta: "O débito cardíaco é definido como:",
        alternativas: ["A quantidade de oxigênio consumida por minuto", "O volume de sangue bombeado pelo coração por minuto", "A resistência dos vasos ao fluxo sanguíneo", "O número de valvas abertas simultaneamente"],
        correta: 1,
        explicacao: "Débito cardíaco = volume sistólico × frequência cardíaca. Em repouso, um adulto bomba cerca de 5 litros por minuto."
      },
      {
        tema: "Grande e pequena circulação",
        pergunta: "Na pequena circulação (circulação pulmonar), qual vaso transporta sangue desoxigenado do coração aos pulmões?",
        alternativas: ["Aorta", "Veia pulmonar", "Tronco pulmonar", "Veia cava inferior"],
        correta: 2,
        explicacao: "O tronco pulmonar parte do ventrículo direito e leva o sangue desoxigenado aos pulmões. As veias pulmonares fazem o retorno do sangue oxigenado ao átrio esquerdo."
      },
      {
        tema: "Vasos sanguíneos",
        pergunta: "Por que as artérias possuem paredes mais espessas e elásticas do que as veias?",
        alternativas: ["Para facilitar a absorção de nutrientes", "Para suportar a alta pressão gerada pelo bombeamento cardíaco", "Para permitir a difusão de gases diretamente", "Para armazenar o sangue durante o repouso"],
        correta: 1,
        explicacao: "As artérias recebem o sangue diretamente dos ventrículos sob alta pressão. Suas paredes espessas e elásticas suportam e suavizam essa pressão ao longo do percurso."
      },
      {
        tema: "Câmaras cardíacas",
        pergunta: "Quantas câmaras tem o coração humano?",
        alternativas: ["2", "3", "4", "6"],
        correta: 2,
        explicacao: "O coração humano possui 4 câmaras: átrio direito, átrio esquerdo, ventrículo direito e ventrículo esquerdo. Juntas, coordenam o bombeamento do sangue."
      },
      {
        tema: "Ciclo cardíaco",
        pergunta: "O que é a sístole ventricular?",
        alternativas: ["O relaxamento dos ventrículos", "A contração dos ventrículos que expulsa o sangue", "O preenchimento dos átrios com sangue", "A abertura das valvas atrioventriculares"],
        correta: 1,
        explicacao: "A sístole é a fase de contração dos ventrículos. Durante ela, o sangue é ejetado para a aorta (ventrículo esquerdo) e para o tronco pulmonar (ventrículo direito)."
      },
      {
        tema: "Ciclo cardíaco",
        pergunta: "O que é a diástole?",
        alternativas: ["A contração máxima do músculo cardíaco", "O período de relaxamento e enchimento das câmaras", "A fase em que as valvas semilunares estão abertas", "O aumento da pressão arterial"],
        correta: 1,
        explicacao: "A diástole é o período de relaxamento das câmaras cardíacas, quando elas se enchem de sangue para o próximo ciclo de contração."
      },
      {
        tema: "Patologias cardiovasculares",
        pergunta: "O que é o infarto agudo do miocárdio?",
        alternativas: ["Uma inflamação do pericárdio", "A morte de células do músculo cardíaco por falta de irrigação sanguínea", "Um aumento anormal da frequência cardíaca", "Uma malformação congênita do septo"],
        correta: 1,
        explicacao: "O infarto ocorre quando uma artéria coronária é bloqueada, interrompendo o fornecimento de sangue ao miocárdio. Sem oxigênio, as células cardíacas morrem."
      },
      {
        tema: "Patologias cardiovasculares",
        pergunta: "O que é aterosclerose?",
        alternativas: ["Dilatação excessiva das veias", "Acúmulo de placas de gordura na parede das artérias", "Inflamação das válvulas cardíacas", "Redução do volume de sangue circulante"],
        correta: 1,
        explicacao: "A aterosclerose é o depósito de placas de lipídios na parede interna das artérias, estreitando o vaso e aumentando o risco de infarto e AVC."
      },
      {
        tema: "Frequência cardíaca",
        pergunta: "O que é bradicardia?",
        alternativas: ["Frequência cardíaca acima de 100 bpm em repouso", "Frequência cardíaca abaixo de 60 bpm em repouso", "Batimento cardíaco irregular", "Pressão arterial muito elevada"],
        correta: 1,
        explicacao: "Bradicardia é a frequência cardíaca inferior a 60 bpm em repouso. Em atletas pode ser normal, mas em outras pessoas pode indicar problemas no sistema de condução elétrica."
      },
      {
        tema: "Frequência cardíaca",
        pergunta: "O que é taquicardia?",
        alternativas: ["Frequência cardíaca abaixo de 50 bpm", "Frequência cardíaca acima de 100 bpm em repouso", "Ausência de batimentos cardíacos", "Pressão arterial muito baixa"],
        correta: 1,
        explicacao: "Taquicardia é a frequência cardíaca superior a 100 bpm em repouso. Pode ser causada por estresse, febre, anemia, doenças cardíacas ou estimulantes."
      },
      {
        tema: "Sangue e composição",
        pergunta: "Qual tipo sanguíneo é considerado o doador universal de sangue total?",
        alternativas: ["A+", "B-", "O-", "AB+"],
        correta: 2,
        explicacao: "O tipo O- (O negativo) é o doador universal porque não possui antígenos A, B nem o fator Rh, reduzindo o risco de rejeição em transfusões."
      },
      {
        tema: "Sangue e composição",
        pergunta: "Qual é a principal função das plaquetas no sangue?",
        alternativas: ["Transportar oxigênio aos tecidos", "Combater infecções bacterianas", "Participar da coagulação sanguínea", "Produzir anticorpos"],
        correta: 2,
        explicacao: "As plaquetas (trombócitos) são fundamentais para a hemostasia, ou seja, a coagulação do sangue para estancar hemorragias."
      },
      {
        tema: "Sangue e composição",
        pergunta: "O que é a hemoglobina?",
        alternativas: ["Uma proteína dos glóbulos brancos que combate infecções", "Uma proteína dos glóbulos vermelhos responsável pelo transporte de oxigênio", "Um hormônio produzido pelo coração", "Uma enzima que regula a pressão arterial"],
        correta: 1,
        explicacao: "A hemoglobina é uma proteína presente nos eritrócitos que se liga ao oxigênio nos pulmões e o transporta para os tecidos do corpo."
      },
      {
        tema: "Hipertensão arterial",
        pergunta: "A partir de qual valor de pressão sistólica se considera hipertensão arterial em adultos?",
        alternativas: ["110 mmHg", "120 mmHg", "130 mmHg", "140 mmHg"],
        correta: 3,
        explicacao: "Considera-se hipertensão quando a pressão sistólica é igual ou superior a 140 mmHg e/ou a diastólica igual ou superior a 90 mmHg, em medições repetidas."
      },
      {
        tema: "Sistema elétrico cardíaco",
        pergunta: "O que registra um eletrocardiograma (ECG)?",
        alternativas: ["O volume de sangue bombeado pelo coração", "A atividade elétrica do coração ao longo do tempo", "A pressão dentro das câmaras cardíacas", "O nível de oxigênio no sangue arterial"],
        correta: 1,
        explicacao: "O ECG registra os impulsos elétricos que percorrem o coração a cada ciclo cardíaco. É usado para diagnosticar arritmias, infartos e outras condições cardíacas."
      },
      {
        tema: "Hormônios e coração",
        pergunta: "Qual hormônio acelera os batimentos cardíacos em situações de estresse ou perigo?",
        alternativas: ["Insulina", "Cortisol", "Adrenalina (epinefrina)", "Glucagon"],
        correta: 2,
        explicacao: "A adrenalina é o hormônio do 'luta ou fuga'. Ela aumenta a frequência e a força dos batimentos cardíacos preparando o organismo para emergências."
      },
      {
        tema: "Vasos sanguíneos",
        pergunta: "O que são as veias cavas e qual é sua função?",
        alternativas: ["Veias que levam sangue oxigenado ao coração esquerdo", "As maiores veias do corpo, que retornam sangue desoxigenado ao átrio direito", "Vasos que irrigam o próprio músculo cardíaco", "Artérias que partem do ventrículo direito"],
        correta: 1,
        explicacao: "As veias cavas superior e inferior coletam o sangue desoxigenado de todo o organismo e o retornam ao átrio direito para iniciar a pequena circulação."
      },
      {
        tema: "Anatomia cardíaca",
        pergunta: "Qual é a função do septo interventricular?",
        alternativas: ["Bombear sangue para a aorta", "Separar o átrio direito do esquerdo", "Separar o ventrículo direito do esquerdo, impedindo mistura de sangues", "Controlar a abertura da valva mitral"],
        correta: 2,
        explicacao: "O septo interventricular é a parede muscular que divide os dois ventrículos, garantindo que o sangue oxigenado não se misture com o desoxigenado."
      },
      {
        tema: "Exercício e sistema cardiovascular",
        pergunta: "Qual efeito o exercício físico aeróbio regular produz sobre a frequência cardíaca de repouso?",
        alternativas: ["Aumenta progressivamente a frequência cardíaca em repouso", "Diminui a frequência cardíaca em repouso por tornar o coração mais eficiente", "Não tem nenhum efeito sobre a frequência cardíaca em repouso", "Causa taquicardia permanente"],
        correta: 1,
        explicacao: "Com o treino aeróbio regular, o coração se torna mais forte e eficiente, conseguindo bombear o mesmo volume de sangue com menos batimentos."
      },
      {
        tema: "Patologias cardiovasculares",
        pergunta: "O que é fibrilação ventricular?",
        alternativas: ["Batimentos ventriculares lentos e regulares", "Contrações ventriculares caóticas que impedem o bombeamento do sangue", "Inflamação da parede ventricular", "Estreitamento da valva pulmonar"],
        correta: 1,
        explicacao: "A fibrilação ventricular é uma arritmia grave em que os ventrículos se contraem de forma caótica, tornando o coração incapaz de bombear sangue. Exige desfibrilação imediata."
      },
      {
        tema: "Patologias cardiovasculares",
        pergunta: "O que é endocardite?",
        alternativas: ["Inflamação do pericárdio", "Inflamação do endocárdio, revestimento interno do coração, geralmente por infecção", "Dilatação das câmaras cardíacas", "Obstrução das artérias coronárias"],
        correta: 1,
        explicacao: "A endocardite é a inflamação do endocárdio, frequentemente causada por bactérias. Pode danificar as valvas cardíacas e requer tratamento com antibióticos."
      },
      {
        tema: "Valvas cardíacas",
        pergunta: "Qual é a função das valvas semilunares (aórtica e pulmonar)?",
        alternativas: ["Controlar o fluxo entre átrios e ventrículos", "Impedir o refluxo de sangue dos grandes vasos de volta aos ventrículos", "Bombear o sangue para os pulmões", "Regular a pressão dentro dos átrios"],
        correta: 1,
        explicacao: "As valvas semilunares abrem na sístole para deixar o sangue sair dos ventrículos e fecham na diástole para impedir que o sangue retorne ao coração."
      },
      {
        tema: "Sangue e composição",
        pergunta: "Qual é o componente líquido do sangue, que representa cerca de 55% do seu volume?",
        alternativas: ["Linfa", "Plasma", "Soro fisiológico", "Líquido intersticial"],
        correta: 1,
        explicacao: "O plasma é a parte líquida do sangue, composta principalmente de água (~90%), proteínas, hormônios, nutrientes e resíduos metabólicos."
      },
      {
        tema: "Anatomia cardíaca",
        pergunta: "Qual membrana envolve e protege externamente o coração?",
        alternativas: ["Endocárdio", "Miocárdio", "Pericárdio", "Peritônio"],
        correta: 2,
        explicacao: "O pericárdio é o saco fibro-seroso que envolve e protege o coração, reduzindo o atrito com os órgãos vizinhos durante os batimentos."
      },
      {
        tema: "Circulação coronariana",
        pergunta: "O que são as artérias coronárias?",
        alternativas: ["Artérias que levam sangue do coração ao cérebro", "Vasos que irrigam o próprio músculo cardíaco com sangue oxigenado", "Veias que retornam sangue venoso ao coração", "Artérias que partem do átrio esquerdo"],
        correta: 1,
        explicacao: "As artérias coronárias ramificam-se da aorta e fornecem sangue oxigenado ao miocárdio. O bloqueio dessas artérias causa o infarto."
      },
      {
        tema: "Sistema nervoso e coração",
        pergunta: "Como o sistema nervoso parassimpático age sobre o coração?",
        alternativas: ["Aumenta a frequência e a força dos batimentos", "Diminui a frequência cardíaca, promovendo relaxamento", "Não tem nenhuma ação sobre o coração", "Contrai as artérias coronárias"],
        correta: 1,
        explicacao: "O sistema parassimpático (via nervo vago) diminui a frequência cardíaca, dominando em situações de repouso e relaxamento."
      },
      {
        tema: "Pressão arterial",
        pergunta: "O que é pressão diastólica?",
        alternativas: ["A pressão máxima durante a contração ventricular", "A pressão mínima registrada durante o relaxamento ventricular", "A pressão dentro dos átrios durante a sístole", "A resistência das artérias ao fluxo sanguíneo"],
        correta: 1,
        explicacao: "A pressão diastólica é a pressão mínima nas artérias durante o relaxamento dos ventrículos. No valor 120/80 mmHg, o 80 é a pressão diastólica."
      },
      {
        tema: "Sangue e composição",
        pergunta: "Onde são produzidas as células sanguíneas no corpo adulto?",
        alternativas: ["No baço", "No fígado", "Na medula óssea vermelha", "Nos linfonodos"],
        correta: 2,
        explicacao: "A hematopoiese ocorre na medula óssea vermelha, presente em ossos como esterno, costelas, vértebras e ossos do quadril."
      },
      {
        tema: "Fisiologia cardíaca",
        pergunta: "O que determina o volume sistólico do coração?",
        alternativas: ["Apenas a frequência cardíaca", "O volume de sangue ejetado pelo ventrículo a cada contração", "A resistência das veias ao fluxo", "O número de valvas abertas simultaneamente"],
        correta: 1,
        explicacao: "O volume sistólico é a quantidade de sangue ejetada por um ventrículo a cada batimento. Junto com a frequência cardíaca, determina o débito cardíaco total."
      },
      {
        tema: "Fatores de risco cardiovascular",
        pergunta: "Qual hábito é considerado um dos maiores fatores de risco para doenças cardiovasculares?",
        alternativas: ["Consumo moderado de água", "Prática regular de exercícios físicos", "Tabagismo (fumo)", "Alimentação rica em frutas e vegetais"],
        correta: 2,
        explicacao: "O tabagismo danifica o endotélio vascular, aumenta a pressão arterial, favorece a aterosclerose e eleva o risco de infarto e AVC."
      },
      {
        tema: "Patologias cardiovasculares",
        pergunta: "O que é insuficiência cardíaca?",
        alternativas: ["O coração bate muito rápido", "O coração é incapaz de bombear sangue suficiente para suprir as necessidades do organismo", "Uma infecção bacteriana do músculo cardíaco", "O bloqueio completo de uma artéria coronária"],
        correta: 1,
        explicacao: "Na insuficiência cardíaca, o coração não mantém débito adequado às necessidades do corpo, causando falta de ar, fadiga e edema."
      },
      {
        tema: "AVC e sistema cardiovascular",
        pergunta: "O que é um Acidente Vascular Cerebral (AVC) isquêmico?",
        alternativas: ["Ruptura de um vaso sanguíneo no cérebro", "Bloqueio de uma artéria cerebral que interrompe o fluxo de sangue ao cérebro", "Infarto do músculo cardíaco", "Dilatação anormal de uma artéria cerebral"],
        correta: 1,
        explicacao: "O AVC isquêmico ocorre quando um coágulo ou placa obstrui uma artéria cerebral, privando parte do cérebro de oxigênio. É o tipo mais comum de AVC."
      },
      {
        tema: "Sistema linfático",
        pergunta: "Qual é a relação entre o sistema linfático e o sistema cardiovascular?",
        alternativas: ["O sistema linfático bombeia sangue em sentido contrário ao coração", "O sistema linfático retorna o excesso de líquido intersticial para a circulação sanguínea", "Os dois sistemas são completamente independentes", "O sistema linfático substitui as funções das veias"],
        correta: 1,
        explicacao: "O sistema linfático coleta o excesso de líquido dos tecidos e o devolve à circulação sanguínea, complementando o sistema cardiovascular."
      },
      {
        tema: "Fisiologia do exercício",
        pergunta: "Durante exercício intenso, o que acontece com o débito cardíaco?",
        alternativas: ["Permanece constante independentemente do esforço", "Diminui para preservar energia", "Aumenta significativamente para suprir a demanda muscular por oxigênio", "Fica instável e imprevisível"],
        correta: 2,
        explicacao: "Durante exercício intenso, o débito cardíaco pode aumentar até 5 vezes em relação ao repouso, garantindo maior entrega de oxigênio aos músculos ativos."
      },
      {
        tema: "Anatomia cardíaca",
        pergunta: "O coração está localizado em qual cavidade do corpo?",
        alternativas: ["Cavidade abdominal", "Cavidade craniana", "Cavidade torácica (mediastino)", "Cavidade pélvica"],
        correta: 2,
        explicacao: "O coração situa-se no mediastino, região central da cavidade torácica, entre os pulmões, levemente deslocado para o lado esquerdo."
      },
      {
        tema: "Patologias cardiovasculares",
        pergunta: "O que é cardiomiopatia dilatada?",
        alternativas: ["Estreitamento das artérias coronárias", "Dilatação e fraqueza do músculo cardíaco, comprometendo o bombeamento do sangue", "Inflamação do pericárdio", "Aumento da espessura da parede ventricular"],
        correta: 1,
        explicacao: "Na cardiomiopatia dilatada, o músculo cardíaco se distende e enfraquece, reduzindo a capacidade de contração e podendo levar à insuficiência cardíaca."
      },
      {
        tema: "Fisiologia cardíaca",
        pergunta: "O que significa 'período refratário' na atividade elétrica cardíaca?",
        alternativas: ["O tempo em que o coração bombeia mais sangue", "O intervalo após um estímulo elétrico em que a célula cardíaca não pode ser reestimulada", "A fase de máxima contração ventricular", "O tempo que o sangue leva para circular pelo corpo"],
        correta: 1,
        explicacao: "O período refratário é o intervalo após uma despolarização em que a célula cardíaca não responde a novos estímulos, impedindo contrações contínuas no coração."
      },
      {
        tema: "Circulação sanguínea",
        pergunta: "Qual câmara cardíaca tem a parede mais espessa e por quê?",
        alternativas: ["Átrio direito, pois recebe mais sangue", "Ventrículo direito, pois bombeia para os pulmões com alta pressão", "Ventrículo esquerdo, pois bombeia sangue para todo o corpo com alta pressão", "Átrio esquerdo, pois recebe sangue dos pulmões"],
        correta: 2,
        explicacao: "O ventrículo esquerdo tem a parede mais espessa do coração porque precisa gerar pressão suficiente para impulsionar o sangue por toda a grande circulação (corpo inteiro)."
      },
      {
        tema: "Sangue e composição",
        pergunta: "Qual mineral em excesso na dieta está associado ao aumento da pressão arterial?",
        alternativas: ["Potássio", "Magnésio", "Sódio", "Cálcio"],
        correta: 2,
        explicacao: "O excesso de sódio (sal) favorece a retenção de líquidos e aumenta a pressão arterial, sendo um importante fator de risco para hipertensão."
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
      },
      {
        tema: "Lendas do futebol",
        pergunta: "Qual jogador brasileiro é conhecido mundialmente como 'O Rei do Futebol'?",
        alternativas: ["Ronaldo", "Zico", "Pelé", "Romário"],
        correta: 2,
        explicacao: "Pelé é o único jogador tricampeão mundial (1958, 1962 e 1970) e é reconhecido pela FIFA como o maior jogador de todos os tempos, recebendo o título de 'Rei do Futebol'."
      },
      {
        tema: "Regras do jogo",
        pergunta: "Quantas substituições são permitidas a cada equipe em uma partida oficial da FIFA atualmente?",
        alternativas: ["3", "4", "5", "6"],
        correta: 2,
        explicacao: "Desde 2020, a FIFA adotou permanentemente a regra de até 5 substituições por equipe em competições oficiais, medida inicialmente temporária por causa da pandemia."
      },
      {
        tema: "Regras do jogo",
        pergunta: "O que caracteriza a posição de impedimento no futebol?",
        alternativas: ["O atacante estar atrás da bola no momento do passe", "O atacante estar mais próximo da linha de fundo do que o último defensor no momento do passe", "O atacante tocar a bola com a mão", "O atacante estar dentro da área adversária"],
        correta: 1,
        explicacao: "O impedimento ocorre quando o atacante está à frente do último defensor (exceto o goleiro) no momento em que o passe é feito por um companheiro."
      },
      {
        tema: "Copa do Mundo",
        pergunta: "Qual país sediou a Copa do Mundo FIFA de 2014?",
        alternativas: ["Argentina", "Alemanha", "África do Sul", "Brasil"],
        correta: 3,
        explicacao: "O Brasil sediou a Copa de 2014. A final foi disputada no Maracanã, no Rio de Janeiro, com a Alemanha vencendo a Argentina por 1 a 0 na prorrogação."
      },
      {
        tema: "Regras do jogo",
        pergunta: "Quando é cobrado um escanteio?",
        alternativas: ["Quando o atacante toca por último e a bola sai pela linha de fundo", "Quando o defensor toca por último e a bola sai pela linha lateral", "Quando o defensor toca por último e a bola sai pela linha de fundo", "Quando a bola bate no poste e sai"],
        correta: 2,
        explicacao: "O escanteio é cobrado quando um jogador da equipe defensora toca por último na bola antes que ela ultrapasse completamente a linha de fundo."
      },
      {
        tema: "Clubes e competições",
        pergunta: "Qual clube europeu é o maior vencedor da UEFA Champions League (Copa dos Campeões)?",
        alternativas: ["Real Madrid", "Barcelona", "Bayern de Munique", "Juventus"],
        correta: 0,
        explicacao: "O Real Madrid é o clube com mais títulos da Champions League/Copa dos Campeões da Europa, com recordes consecutivos de conquistas ao longo das décadas."
      },
      {
        tema: "Curiosidades",
        pergunta: "O que é um 'hat-trick' no futebol?",
        alternativas: ["Um passe que resulta diretamente em gol", "Uma defesa difícil do goleiro", "Três gols marcados pelo mesmo jogador em uma única partida", "Um drible especial com três toques"],
        correta: 2,
        explicacao: "Hat-trick é quando um jogador marca três gols em uma mesma partida. O termo vem do críquete inglês e é comemorado como uma grande façanha individual."
      },
      {
        tema: "Copa do Mundo",
        pergunta: "Qual país venceu a Copa do Mundo FIFA de 2022, realizada no Qatar?",
        alternativas: ["França", "Brasil", "Argentina", "Croácia"],
        correta: 2,
        explicacao: "A Argentina venceu a Copa de 2022 no Qatar, derrotando a França nos pênaltis na final. Foi o terceiro título mundial argentino."
      },
      {
        tema: "Artilheiros",
        pergunta: "Quem é o maior artilheiro da história das Copas do Mundo?",
        alternativas: ["Pelé", "Ronaldo (brasileiro)", "Miroslav Klose", "Gerd Müller"],
        correta: 2,
        explicacao: "Miroslav Klose, atacante alemão, é o maior artilheiro da história das Copas do Mundo, com 16 gols em quatro edições do torneio (2002–2014)."
      },
      {
        tema: "Tecnologia no futebol",
        pergunta: "O que é o VAR no futebol?",
        alternativas: ["Um sistema de pontuação alternativo", "Video Assistant Referee – árbitro de vídeo que revisa lances polêmicos", "Um tipo de formação tática defensiva", "Um índice de avaliação de jogadores"],
        correta: 1,
        explicacao: "O VAR (Video Assistant Referee) é um sistema de revisão de vídeo que auxilia o árbitro em lances decisivos como gols, pênaltis e cartões vermelhos."
      },
      {
        tema: "Dimensões do campo",
        pergunta: "Qual é a largura oficial da baliza (gol) no futebol de campo?",
        alternativas: ["5,5 metros", "6,32 metros", "7,32 metros", "8 metros"],
        correta: 2,
        explicacao: "O gol oficial tem 7,32 metros de largura e 2,44 metros de altura, medidas padronizadas pela FIFA para todas as competições oficiais."
      },
      {
        tema: "Copa do Mundo",
        pergunta: "Qual seleção venceu a Copa do Mundo de 2018, realizada na Rússia?",
        alternativas: ["Alemanha", "França", "Croácia", "Bélgica"],
        correta: 1,
        explicacao: "A França venceu a Copa de 2018, derrotando a Croácia por 4 a 2 na final em Moscou. Foi o segundo título mundial francês."
      },
      {
        tema: "Regras do jogo",
        pergunta: "A quantos metros da linha do gol fica a marca do pênalti?",
        alternativas: ["9 metros", "11 metros", "12 metros", "16,5 metros"],
        correta: 1,
        explicacao: "A marca do pênalti fica a 11 metros da linha do gol. Essa distância foi estabelecida pela FIFA para equilibrar as chances entre cobrador e goleiro."
      },
      {
        tema: "Futebol brasileiro",
        pergunta: "Qual é o maior estádio do Brasil em capacidade?",
        alternativas: ["Maracanã", "Morumbi", "Arena Corinthians", "Mineirão"],
        correta: 0,
        explicacao: "O Maracanã, no Rio de Janeiro, é o maior estádio do Brasil, com capacidade atual de cerca de 78.000 torcedores."
      },
      {
        tema: "Lendas do futebol",
        pergunta: "Qual jogador argentino venceu a Copa do Mundo em 2022 e é apontado por muitos como o melhor da história?",
        alternativas: ["Diego Maradona", "Gabriel Batistuta", "Lionel Messi", "Sergio Agüero"],
        correta: 2,
        explicacao: "Lionel Messi completou sua carreira vencendo a Copa de 2022 com a Argentina. Com múltiplas Bolas de Ouro e títulos, é apontado por muitos como o maior da história."
      },
      {
        tema: "Regras do jogo",
        pergunta: "O que é um tiro de meta?",
        alternativas: ["Um chute cobrado da marca do pênalti", "Uma cobrança efetuada quando a bola sai pela linha de fundo após toque de um atacante", "Uma cobrança de falta dentro da área", "Um escanteio cobrado pelo goleiro"],
        correta: 1,
        explicacao: "O tiro de meta é cobrado quando a bola ultrapassa a linha de fundo após o último toque de um atacante. O goleiro recoloca a bola em jogo."
      },
      {
        tema: "Posições e táticas",
        pergunta: "Qual é a função de um 'volante' em uma equipe de futebol?",
        alternativas: ["Marcar gols como atacante central", "Cobrar todos os escanteios da equipe", "Proteger a defesa e distribuir o jogo no meio-campo", "Atuar exclusivamente como lateral"],
        correta: 2,
        explicacao: "O volante é um meio-campista com função defensiva e de transição: protege a linha defensiva, recupera a bola e a distribui para os companheiros."
      },
      {
        tema: "Futebol mundial",
        pergunta: "Qual é a liga de futebol mais valiosa economicamente do mundo?",
        alternativas: ["La Liga (Espanha)", "Bundesliga (Alemanha)", "Premier League (Inglaterra)", "Serie A (Itália)"],
        correta: 2,
        explicacao: "A Premier League inglesa é a liga mais valiosa do mundo, com as maiores receitas de televisão, patrocínios e audiência global entre todas as ligas nacionais."
      },
      {
        tema: "Regras do jogo",
        pergunta: "Qual é a duração de cada tempo de prorrogação no futebol?",
        alternativas: ["10 minutos", "15 minutos", "20 minutos", "30 minutos"],
        correta: 1,
        explicacao: "São disputados dois tempos de 15 minutos cada (30 minutos no total). Se o empate persistir, ocorre disputa de pênaltis."
      },
      {
        tema: "Copa do Mundo",
        pergunta: "Qual é o troféu entregue ao campeão da Copa do Mundo FIFA desde 1974?",
        alternativas: ["Troféu Jules Rimet", "Troféu FIFA World Cup", "Troféu Henri Delaunay", "Troféu Artemio Franchi"],
        correta: 1,
        explicacao: "Desde 1974, o campeão recebe o Troféu FIFA World Cup, em ouro maciço com base de malaquita. O troféu Jules Rimet foi dado definitivamente ao Brasil após o tri de 1970."
      },
      {
        tema: "Futebol brasileiro",
        pergunta: "Quantas vezes o Brasil venceu a Copa do Mundo FIFA?",
        alternativas: ["3", "4", "5", "6"],
        correta: 2,
        explicacao: "O Brasil é pentacampeão: 1958 (Suécia), 1962 (Chile), 1970 (México), 1994 (EUA) e 2002 (Coreia/Japão). É a única seleção com 5 títulos."
      },
      {
        tema: "Lendas do futebol",
        pergunta: "Quem é o maior artilheiro da história da seleção brasileira?",
        alternativas: ["Pelé", "Ronaldo", "Neymar", "Zico"],
        correta: 2,
        explicacao: "Neymar é o maior artilheiro da seleção brasileira, superando o recorde de Pelé ao atingir mais de 77 gols com a camisa verde e amarela."
      },
      {
        tema: "Regras do jogo",
        pergunta: "Qual deve ser a circunferência oficial da bola de futebol?",
        alternativas: ["Entre 58 e 60 cm", "Entre 68 e 70 cm", "Entre 75 e 77 cm", "Entre 80 e 85 cm"],
        correta: 1,
        explicacao: "A bola oficial deve ter entre 68 e 70 cm de circunferência e pressão entre 0,6 e 1,1 atmosferas, conforme as regras da FIFA."
      },
      {
        tema: "Posições e táticas",
        pergunta: "O que é o sistema tático '4-3-3' no futebol?",
        alternativas: ["4 goleiros, 3 defensores e 3 atacantes", "4 defensores, 3 meio-campistas e 3 atacantes", "4 atacantes, 3 meio-campistas e 3 defensores", "4 zagueiros, 3 laterais e 3 volantes"],
        correta: 1,
        explicacao: "O 4-3-3 é um sistema com 4 defensores (2 laterais e 2 zagueiros), 3 meio-campistas e 3 atacantes, equilibrando ataque e defesa."
      },
      {
        tema: "Arbitragem",
        pergunta: "O que significa o cartão amarelo no futebol?",
        alternativas: ["Expulsão imediata do campo", "Advertência ao jogador por falta grave ou conduta antidesportiva", "Substituição obrigatória do jogador", "Penalidade de 5 minutos fora do jogo"],
        correta: 1,
        explicacao: "O cartão amarelo é uma advertência formal. Dois cartões amarelos na mesma partida resultam em expulsão automática."
      },
      {
        tema: "Futebol feminino",
        pergunta: "Qual seleção feminina é a maior vencedora da Copa do Mundo Feminina da FIFA?",
        alternativas: ["Brasil", "Alemanha", "Noruega", "Estados Unidos"],
        correta: 3,
        explicacao: "A seleção feminina dos Estados Unidos é a maior campeã da Copa do Mundo Feminina, com quatro títulos: 1991, 1999, 2015 e 2019."
      },
      {
        tema: "Futebol brasileiro",
        pergunta: "Qual clube brasileiro tem mais títulos do Campeonato Brasileiro (Série A)?",
        alternativas: ["São Paulo", "Santos", "Flamengo", "Palmeiras"],
        correta: 3,
        explicacao: "O Palmeiras é o maior campeão do Campeonato Brasileiro, com mais de 11 títulos da Série A ao longo de sua história."
      },
      {
        tema: "História do futebol",
        pergunta: "Em que país o futebol moderno teve suas regras oficiais codificadas pela primeira vez?",
        alternativas: ["Brasil", "Alemanha", "França", "Inglaterra"],
        correta: 3,
        explicacao: "As regras oficiais do futebol moderno foram estabelecidas na Inglaterra em 1863, com a fundação da Football Association (FA), a federação de futebol mais antiga do mundo."
      },
      {
        tema: "Copa do Mundo",
        pergunta: "Qual foi o primeiro país a sediar a Copa do Mundo pela segunda vez?",
        alternativas: ["Brasil", "França", "México", "Alemanha"],
        correta: 2,
        explicacao: "O México foi o primeiro país a sediar a Copa do Mundo pela segunda vez, em 1986. Já havia sediado em 1970."
      },
      {
        tema: "Clubes e competições",
        pergunta: "Como se chama a principal competição de futebol entre clubes da América do Sul?",
        alternativas: ["Copa Libertadores", "Copa Sul-Americana", "Copa América", "Recopa Sul-Americana"],
        correta: 0,
        explicacao: "A Copa Libertadores da América é a principal competição de clubes da CONMEBOL, equivalente à Champions League europeia."
      },
      {
        tema: "Futebol brasileiro",
        pergunta: "Qual jogador brasileiro foi eleito melhor do mundo pela FIFA três vezes e é ídolo da Copa de 2002?",
        alternativas: ["Pelé", "Romário", "Ronaldo Fenômeno", "Zico"],
        correta: 2,
        explicacao: "Ronaldo Fenômeno foi eleito melhor jogador do mundo pela FIFA três vezes e foi artilheiro das Copas de 1998 e 2002, sendo um dos maiores da história."
      },
      {
        tema: "Arbitragem",
        pergunta: "Quantos árbitros assistentes (bandeirinhas) atuam em uma partida oficial de futebol?",
        alternativas: ["1", "2", "3", "4"],
        correta: 1,
        explicacao: "Uma partida conta com 2 árbitros assistentes que auxiliam o árbitro principal na marcação de impedimentos, laterais e escanteios."
      },
      {
        tema: "Copa do Mundo",
        pergunta: "Qual foi o resultado do jogo entre Brasil e Alemanha na semifinal da Copa de 2014?",
        alternativas: ["Brasil 1 x 7 Alemanha", "Brasil 0 x 4 Alemanha", "Brasil 2 x 5 Alemanha", "Brasil 3 x 6 Alemanha"],
        correta: 0,
        explicacao: "O 'Mineirazo': a Alemanha goleou o Brasil por 7 a 1 na semifinal da Copa de 2014, no Estádio Mineirão. Uma das maiores derrotas da seleção."
      },
      {
        tema: "Regras do jogo",
        pergunta: "O que é o 'tiro livre indireto' no futebol?",
        alternativas: ["Uma cobrança em que o gol pode ser marcado diretamente", "Uma cobrança em que a bola precisa ser tocada por outro jogador antes de entrar no gol", "Sinônimo de pênalti", "Uma cobrança exclusiva do goleiro"],
        correta: 1,
        explicacao: "No tiro livre indireto, a bola deve ser tocada por outro jogador antes de entrar no gol. Caso contrário, o gol não é válido."
      },
      {
        tema: "Futebol mundial",
        pergunta: "Qual treinador ficou conhecido por desenvolver o estilo 'tiki-taka' com o Barcelona?",
        alternativas: ["José Mourinho", "Carlo Ancelotti", "Pep Guardiola", "Zinedine Zidane"],
        correta: 2,
        explicacao: "Pep Guardiola popularizou o 'tiki-taka', estilo baseado em posse de bola e trocas rápidas de passes curtos, que rendeu ao Barcelona e à Espanha vários títulos."
      },
      {
        tema: "Futebol olímpico",
        pergunta: "Qual é a principal diferença entre o futebol olímpico masculino e o da Copa do Mundo?",
        alternativas: ["O campo tem dimensões reduzidas nos Jogos Olímpicos", "O time olímpico masculino é sub-23, podendo ter até 3 jogadores acima dessa idade", "Não há limite de substituições nos Jogos Olímpicos", "A partida tem apenas um tempo de 90 minutos"],
        correta: 1,
        explicacao: "O futebol olímpico masculino é disputado principalmente por jogadores sub-23, com até 3 atletas acima dessa faixa por equipe."
      },
      {
        tema: "Futebol brasileiro",
        pergunta: "Em que ano o Brasil venceu sua primeira Copa do Mundo?",
        alternativas: ["1950", "1954", "1958", "1962"],
        correta: 2,
        explicacao: "O Brasil conquistou seu primeiro título mundial em 1958, na Suécia. Pelé, com apenas 17 anos, foi um dos grandes destaques do torneio."
      },
      {
        tema: "Regras do jogo",
        pergunta: "O que é um 'escanteio' no futebol?",
        alternativas: ["Cobrança quando o defensor toca por último e a bola sai pela linha de fundo", "Cobrança quando o atacante toca por último e a bola sai pela linha lateral", "Cobrança de falta dentro da área adversária", "Cobrança quando a bola bate no poste"],
        correta: 0,
        explicacao: "O escanteio é cobrado quando um jogador da equipe defensora toca por último antes que a bola ultrapasse completamente a linha de fundo."
      },
      {
        tema: "Futebol brasileiro",
        pergunta: "Qual clube do Rio de Janeiro é o maior vencedor do Campeonato Carioca?",
        alternativas: ["Vasco da Gama", "Fluminense", "Botafogo", "Flamengo"],
        correta: 3,
        explicacao: "O Flamengo é o maior campeão do Campeonato Carioca com mais de 38 títulos, sendo também um dos clubes com maior torcida do Brasil."
      },
      {
        tema: "Lendas do futebol",
        pergunta: "Qual clube europeu é o maior vencedor da UEFA Champions League?",
        alternativas: ["Real Madrid", "Barcelona", "Bayern de Munique", "Juventus"],
        correta: 0,
        explicacao: "O Real Madrid é o clube com mais títulos da Champions League/Copa dos Campeões da Europa, com recordes de conquistas consecutivas ao longo das décadas."
      },
      {
        tema: "Regras do jogo",
        pergunta: "Quantas substituições são permitidas a cada equipe em uma partida oficial da FIFA atualmente?",
        alternativas: ["3", "4", "5", "6"],
        correta: 2,
        explicacao: "Desde 2020, a FIFA adotou permanentemente a regra de até 5 substituições por equipe em competições oficiais."
      },
      {
        tema: "Curiosidades",
        pergunta: "O que é uma 'bicicleta' no vocabulário do futebol?",
        alternativas: ["Um drible em que o jogador faz movimentos rápidos com os pés", "Um chute acrobático em que o jogador fica de costas para o gol e chuta a bola por cima de si mesmo", "Uma jogada coletiva de três trocas de passes rápidas", "Um tipo específico de cobrança de falta"],
        correta: 1,
        explicacao: "A bicicleta (ou chilena) é um chute acrobático em que o jogador se lança para trás e chuta a bola enquanto ainda está no ar, com o corpo invertido."
      },
      {
        tema: "Regras do jogo",
        pergunta: "O que é um 'gol contra' no futebol?",
        alternativas: ["Um gol anulado pelo árbitro", "Um gol marcado por um jogador na própria meta da sua equipe", "Um gol de pênalti", "Um gol marcado por um substituto recém-entrado"],
        correta: 1,
        explicacao: "Gol contra ocorre quando um jogador introduz a bola na própria meta. O gol é válido e contabilizado para o time adversário."
      }
    ]
  },
  ensinomedio: {
    nome: "Ensino Médio",
    descricao: "Múltiplas disciplinas",
    icone: "📚",
    perguntas: [
      {
        tema: "Matemática — Nível médio",
        pergunta: "Qual é o valor de x na equação 2x + 6 = 18?",
        alternativas: ["4", "5", "6", "7"],
        correta: 2,
        explicacao: "Isolando x: 2x = 18 − 6 = 12, portanto x = 6. Equações de 1º grau são a base da álgebra do Ensino Médio."
      },
      {
        tema: "Português — Nível médio",
        pergunta: "Identifique a oração subordinada adverbial causal em: 'Ficou em casa porque estava doente.'",
        alternativas: ["'Ficou em casa'.", "'porque estava doente'.", "A oração não tem subordinada adverbial.", "'estava doente' apenas."],
        correta: 1,
        explicacao: "A conjunção 'porque' introduz uma oração adverbial causal, indicando a causa do fato expresso na oração principal."
      },
      {
        tema: "História — Nível médio",
        pergunta: "Qual evento marcou o início da Primeira Guerra Mundial em 1914?",
        alternativas: ["A Revolução Russa", "A invasão da Polônia pela Alemanha", "O assassinato do arquiduque Francisco Fernando", "A queda da Bolsa de Nova Iorque"],
        correta: 2,
        explicacao: "O assassinato do arquiduque Francisco Fernando, herdeiro austro-húngaro, em Sarajevo, serviu de estopim para a Primeira Guerra Mundial."
      },
      {
        tema: "Química — Nível médio-difícil",
        pergunta: "No balanceamento da reação Fe + O₂ → Fe₂O₃, quantas moléculas de O₂ são necessárias?",
        alternativas: ["1", "2", "3", "4"],
        correta: 2,
        explicacao: "A reação balanceada é 4 Fe + 3 O₂ → 2 Fe₂O₃. São necessárias 3 moléculas de O₂ para cada 4 átomos de Fe."
      },
      {
        tema: "Física — Nível médio-difícil",
        pergunta: "Um objeto com massa de 5 kg é acelerado a 4 m/s². Qual a força resultante aplicada sobre ele?",
        alternativas: ["9 N", "1,25 N", "20 N", "0,8 N"],
        correta: 2,
        explicacao: "Pela 2ª Lei de Newton: F = m × a = 5 × 4 = 20 N. A unidade de força no SI é o Newton (N)."
      },
      {
        tema: "Biologia — Nível difícil",
        pergunta: "Na meiose II, o que ocorre com as cromátides-irmãs?",
        alternativas: ["Sofrem crossing-over e trocam segmentos", "Separam-se, indo para células-filhas distintas", "Fundem-se formando um único cromossomo", "Duplicam-se novamente antes da divisão"],
        correta: 1,
        explicacao: "Na meiose II, as cromátides-irmãs se separam (como na mitose), resultando em 4 células haploides geneticamente distintas."
      },
      {
        tema: "Matemática — Nível difícil",
        pergunta: "Se log₂(x) = 5, qual é o valor de x?",
        alternativas: ["10", "25", "32", "64"],
        correta: 2,
        explicacao: "log₂(x) = 5 significa 2⁵ = x. Portanto x = 32. Logaritmos são amplamente cobrados no ENEM e vestibulares."
      },
      {
        tema: "Matemática — Nível médio",
        pergunta: "Qual é a fórmula da área de um triângulo?",
        alternativas: ["base × altura", "(base × altura) / 2", "lado²", "2 × (base + altura)"],
        correta: 1,
        explicacao: "A área do triângulo é calculada por A = (b × h) / 2, onde b é a base e h é a altura relativa a essa base."
      },
      {
        tema: "Literatura — Nível médio",
        pergunta: "Quem escreveu o romance 'Dom Casmurro', clássico da literatura brasileira?",
        alternativas: ["José de Alencar", "Machado de Assis", "Euclides da Cunha", "Lima Barreto"],
        correta: 1,
        explicacao: "'Dom Casmurro' foi publicado em 1899 por Machado de Assis. É uma das obras mais importantes do Realismo brasileiro, conhecida pela dúvida sobre a traição de Capitu."
      },
      {
        tema: "História do Brasil — Nível médio",
        pergunta: "Em que ano foi proclamada a República no Brasil?",
        alternativas: ["1822", "1850", "1889", "1922"],
        correta: 2,
        explicacao: "A República foi proclamada em 15 de novembro de 1889 pelo Marechal Deodoro da Fonseca, encerrando o período imperial do Brasil."
      },
      {
        tema: "Química — Nível médio",
        pergunta: "Qual é o número atômico do carbono na Tabela Periódica?",
        alternativas: ["4", "6", "8", "12"],
        correta: 1,
        explicacao: "O carbono tem número atômico 6, ou seja, possui 6 prótons no núcleo. É um elemento fundamental para a química orgânica e para a vida."
      },
      {
        tema: "Física — Nível médio",
        pergunta: "Qual é, aproximadamente, a velocidade da luz no vácuo?",
        alternativas: ["3.000 km/s", "30.000 km/s", "300.000 km/s", "3.000.000 km/s"],
        correta: 2,
        explicacao: "A velocidade da luz no vácuo é de aproximadamente 300.000 km/s (3 × 10⁸ m/s). Esse valor é constante e fundamental na física moderna."
      },
      {
        tema: "Matemática — Nível médio",
        pergunta: "Qual é o resultado de 3² + 4²?",
        alternativas: ["14", "20", "25", "49"],
        correta: 2,
        explicacao: "3² = 9 e 4² = 16. Somando: 9 + 16 = 25. Esse cálculo é base do Teorema de Pitágoras."
      },
      {
        tema: "História Geral — Nível médio",
        pergunta: "Quem foram os autores do 'Manifesto do Partido Comunista', publicado em 1848?",
        alternativas: ["Marx e Engels", "Lênin e Trotsky", "Rousseau e Voltaire", "Weber e Durkheim"],
        correta: 0,
        explicacao: "O Manifesto Comunista foi escrito por Karl Marx e Friedrich Engels em 1848. É um dos textos políticos mais influentes da história moderna."
      },
      {
        tema: "Matemática — Geometria",
        pergunta: "Qual é o valor de π (pi) com duas casas decimais?",
        alternativas: ["3,12", "3,14", "3,16", "3,18"],
        correta: 1,
        explicacao: "O número π vale aproximadamente 3,14159... Com duas casas decimais, usamos 3,14. É a razão entre a circunferência de qualquer círculo e seu diâmetro."
      },
      {
        tema: "Biologia — Genética",
        pergunta: "Qual molécula carrega as informações genéticas na maioria dos organismos vivos?",
        alternativas: ["RNA", "ATP", "DNA", "Proteína"],
        correta: 2,
        explicacao: "O DNA (ácido desoxirribonucleico) contém as instruções genéticas de todos os seres vivos, organizadas em sequências de bases nitrogenadas."
      },
      {
        tema: "Química — Tabela periódica",
        pergunta: "Qual é o elemento químico mais abundante na crosta terrestre?",
        alternativas: ["Ferro", "Silício", "Oxigênio", "Alumínio"],
        correta: 2,
        explicacao: "O oxigênio é o elemento mais abundante na crosta terrestre, representando cerca de 46% em massa."
      },
      {
        tema: "Física — Termodinâmica",
        pergunta: "O que afirma a 1ª Lei da Termodinâmica?",
        alternativas: ["O calor sempre flui do corpo mais frio para o mais quente", "A energia não pode ser criada nem destruída, apenas transformada", "Nenhum processo pode ser 100% eficiente", "A entropia do universo tende a diminuir"],
        correta: 1,
        explicacao: "A 1ª Lei da Termodinâmica é o princípio da conservação de energia: a energia total de um sistema isolado permanece constante, podendo apenas mudar de forma."
      },
      {
        tema: "Português — Gramática",
        pergunta: "Qual é a função do pronome relativo 'que' em: 'O livro que comprei é interessante.'?",
        alternativas: ["Sujeito da oração principal", "Conecta a oração subordinada à principal, referindo-se a 'livro'", "Objeto direto da oração principal", "Predicativo do sujeito"],
        correta: 1,
        explicacao: "O pronome relativo 'que' retoma o antecedente 'livro' e liga a oração subordinada adjetiva à oração principal, funcionando como objeto direto da subordinada."
      },
      {
        tema: "História do Brasil — Nível médio",
        pergunta: "Qual foi o principal documento que aboliu a escravidão no Brasil em 1888?",
        alternativas: ["Lei do Ventre Livre", "Lei dos Sexagenários", "Lei Áurea", "Proclamação da República"],
        correta: 2,
        explicacao: "A Lei Áurea, sancionada pela Princesa Isabel em 13 de maio de 1888, aboliu definitivamente a escravidão no Brasil, o último país das Américas a fazê-lo."
      },
      {
        tema: "Geografia — Nível médio",
        pergunta: "Qual é a maior floresta tropical do mundo?",
        alternativas: ["Floresta do Congo", "Floresta Boreal da Sibéria", "Mata Atlântica", "Floresta Amazônica"],
        correta: 3,
        explicacao: "A Floresta Amazônica é a maior floresta tropical do mundo, cobrindo cerca de 5,5 milhões de km² em 9 países da América do Sul."
      },
      {
        tema: "Matemática — Trigonometria",
        pergunta: "Em um triângulo retângulo, o que é o seno de um ângulo agudo?",
        alternativas: ["A razão entre o cateto adjacente e a hipotenusa", "A razão entre o cateto oposto e a hipotenusa", "A razão entre o cateto oposto e o cateto adjacente", "A razão entre a hipotenusa e o cateto oposto"],
        correta: 1,
        explicacao: "O seno de um ângulo agudo é a razão entre o cateto oposto e a hipotenusa (sin = CO/H)."
      },
      {
        tema: "Biologia — Ecologia",
        pergunta: "O que é uma cadeia alimentar?",
        alternativas: ["A lista de todos os animais de um ecossistema", "A sequência de organismos em que cada um serve de alimento ao seguinte", "O conjunto de plantas de uma região", "A relação entre temperatura e produtividade de um bioma"],
        correta: 1,
        explicacao: "A cadeia alimentar representa a transferência de energia entre os seres vivos, começando pelos produtores (plantas) e seguindo pelos consumidores primários, secundários etc."
      },
      {
        tema: "Filosofia — Nível médio",
        pergunta: "Qual filósofo grego usava o método da maiêutica (perguntas e respostas) e é base da filosofia ocidental?",
        alternativas: ["Platão", "Aristóteles", "Sócrates", "Tales de Mileto"],
        correta: 2,
        explicacao: "Sócrates é considerado um dos pais da filosofia ocidental. Seu método maiêutico consistia em fazer perguntas que levavam o interlocutor a descobrir o conhecimento por si mesmo."
      },
      {
        tema: "Química — Reações",
        pergunta: "O que é uma reação de neutralização?",
        alternativas: ["Uma reação entre dois metais", "A reação entre um ácido e uma base que produz sal e água", "Uma reação que libera grande quantidade de energia", "A decomposição de uma substância pela luz"],
        correta: 1,
        explicacao: "A reação de neutralização ocorre entre um ácido e uma base, produzindo sal e água. Por exemplo: HCl + NaOH → NaCl + H₂O."
      },
      {
        tema: "Física — Óptica",
        pergunta: "O que é refração da luz?",
        alternativas: ["A reflexão total da luz em superfícies polidas", "A mudança de direção da luz ao passar de um meio para outro de densidade diferente", "A absorção da luz por materiais opacos", "A decomposição da luz branca em cores pelo prisma"],
        correta: 1,
        explicacao: "A refração é o fenômeno pelo qual a luz muda de velocidade e direção ao passar de um meio para outro com índice de refração diferente, como do ar para a água."
      },
      {
        tema: "Português — Literatura",
        pergunta: "Qual movimento literário brasileiro valorizou o índio e a natureza nacional, tendo 'Iracema' de José de Alencar como obra representativa?",
        alternativas: ["Realismo", "Modernismo", "Romantismo", "Naturalismo"],
        correta: 2,
        explicacao: "O Romantismo brasileiro (século XIX) valorizou a identidade nacional e o indianismo. José de Alencar é um dos principais representantes, com obras como 'Iracema' e 'O Guarani'."
      },
      {
        tema: "História Geral — Nível médio",
        pergunta: "O que foi a Revolução Industrial?",
        alternativas: ["Uma revolução política que derrubou monarquias europeias no século XVIII", "O processo de transformação da produção artesanal para a produção fabril mecanizada, iniciado na Inglaterra no século XVIII", "Uma guerra entre países industrializados pela dominação do comércio mundial", "O movimento de trabalhadores que exigiu o fim do capitalismo"],
        correta: 1,
        explicacao: "A Revolução Industrial (séculos XVIII–XIX) transformou a produção econômica com a mecanização e o uso do vapor, iniciando na Inglaterra e se espalhando pelo mundo."
      },
      {
        tema: "Biologia — Célula",
        pergunta: "Qual organela celular é responsável pela produção de energia (ATP) nas células eucarióticas?",
        alternativas: ["Ribossomo", "Núcleo", "Mitocôndria", "Retículo endoplasmático"],
        correta: 2,
        explicacao: "A mitocôndria é a 'usina de energia' da célula, onde ocorre a respiração celular aeróbica que converte glicose em ATP."
      },
      {
        tema: "Matemática — Funções",
        pergunta: "Qual é a equação geral de uma função do 1º grau (linear)?",
        alternativas: ["y = ax² + bx + c", "y = ax + b", "y = aˣ", "y = a/x"],
        correta: 1,
        explicacao: "A função do 1º grau tem a forma y = ax + b, onde 'a' é o coeficiente angular e 'b' é o coeficiente linear."
      },
      {
        tema: "Geografia — Clima",
        pergunta: "Qual tipo de clima predomina no interior do Nordeste do Brasil?",
        alternativas: ["Equatorial úmido", "Subtropical", "Semiárido", "Oceânico"],
        correta: 2,
        explicacao: "O clima semiárido predomina no interior do Nordeste, com baixas precipitações irregulares e altas temperaturas, gerando a vegetação de caatinga."
      },
      {
        tema: "Química — Estados da matéria",
        pergunta: "O que é sublimação?",
        alternativas: ["A passagem do estado sólido para o líquido", "A passagem do estado gasoso para o líquido", "A passagem do estado sólido diretamente para o gasoso", "A passagem do estado líquido para o gasoso"],
        correta: 2,
        explicacao: "A sublimação é a mudança de estado diretamente do sólido para o gasoso, sem passar pelo líquido. Exemplo: o gelo seco (CO₂ sólido) em temperatura ambiente."
      },
      {
        tema: "Física — Mecânica",
        pergunta: "O que enuncia a 3ª Lei de Newton (Lei da Ação e Reação)?",
        alternativas: ["Todo corpo em repouso tende a ficar em repouso", "A força é igual à massa vezes a aceleração", "Para toda ação há uma reação igual em intensidade e oposta em direção", "A aceleração é inversamente proporcional à massa"],
        correta: 2,
        explicacao: "A 3ª Lei de Newton afirma que para toda força de ação existe uma reação de mesma intensidade e direção oposta, aplicada em outro corpo."
      },
      {
        tema: "História do Brasil — Nível médio",
        pergunta: "Qual foi o primeiro presidente eleito pelo voto popular após a redemocratização do Brasil em 1989?",
        alternativas: ["Itamar Franco", "Fernando Henrique Cardoso", "Fernando Collor de Mello", "Lula"],
        correta: 2,
        explicacao: "Fernando Collor de Mello venceu as primeiras eleições diretas para presidente desde o golpe militar de 1964. Governou de 1990 até seu impeachment em 1992."
      },
      {
        tema: "Biologia — Sistema nervoso",
        pergunta: "Qual é a célula funcional básica do sistema nervoso?",
        alternativas: ["Hemácia", "Neurônio", "Osteócito", "Miócito"],
        correta: 1,
        explicacao: "O neurônio é a unidade básica do sistema nervoso. Ele transmite sinais elétricos e químicos (impulsos nervosos) entre diferentes partes do corpo."
      },
      {
        tema: "Matemática — Estatística",
        pergunta: "O que é a média aritmética de um conjunto de valores?",
        alternativas: ["O valor que aparece com mais frequência", "O valor central quando os dados estão em ordem crescente", "A soma de todos os valores dividida pela quantidade de valores", "A diferença entre o maior e o menor valor"],
        correta: 2,
        explicacao: "A média aritmética é calculada somando todos os valores e dividindo pelo total de elementos. É a medida de tendência central mais usada no cotidiano."
      },
      {
        tema: "Física — Eletricidade",
        pergunta: "Qual é a unidade de medida da corrente elétrica no Sistema Internacional?",
        alternativas: ["Volt (V)", "Watt (W)", "Ohm (Ω)", "Ampere (A)"],
        correta: 3,
        explicacao: "A corrente elétrica é medida em Amperes (A). Tensão é em Volts, potência em Watts e resistência em Ohms."
      },
      {
        tema: "Geografia — Continentes",
        pergunta: "Qual é o maior continente do mundo em área territorial?",
        alternativas: ["Américas", "África", "Ásia", "Europa"],
        correta: 2,
        explicacao: "A Ásia é o maior continente, com cerca de 44,6 milhões de km², representando aproximadamente 30% das terras do planeta."
      },
      {
        tema: "Português — Figuras de linguagem",
        pergunta: "Qual figura de linguagem é usada em: 'O tempo é dinheiro'?",
        alternativas: ["Hipérbole", "Metáfora", "Antítese", "Eufemismo"],
        correta: 1,
        explicacao: "A metáfora é uma comparação implícita entre termos de campos semânticos diferentes. 'O tempo é dinheiro' compara dois conceitos distintos sem usar 'como'."
      },
      {
        tema: "Química — Ligações químicas",
        pergunta: "O que é uma ligação covalente?",
        alternativas: ["A transferência de elétrons entre um metal e um não metal", "O compartilhamento de pares de elétrons entre dois átomos não metálicos", "A atração entre íons de cargas opostas", "A ligação entre metais por elétrons livres"],
        correta: 1,
        explicacao: "A ligação covalente envolve o compartilhamento de pares de elétrons entre dois átomos, geralmente não metálicos. Exemplos: H₂O, CO₂, CH₄."
      },
      {
        tema: "História Geral — Nível médio",
        pergunta: "O que foi a Guerra Fria?",
        alternativas: ["Um conflito armado entre EUA e URSS no Ártico", "Uma tensão geopolítica e ideológica entre EUA e URSS após a 2ª Guerra Mundial", "Uma série de guerras na Ásia durante o século XIX", "Uma disputa comercial entre Europa e América"],
        correta: 1,
        explicacao: "A Guerra Fria (1947–1991) foi a rivalidade política, econômica, militar e ideológica entre EUA (capitalismo) e URSS (socialismo), sem confronto direto entre as potências."
      },
      {
        tema: "Biologia — Evolução",
        pergunta: "Quem propôs a teoria da evolução por seleção natural?",
        alternativas: ["Gregor Mendel", "Louis Pasteur", "Charles Darwin", "Jean-Baptiste Lamarck"],
        correta: 2,
        explicacao: "Charles Darwin publicou 'A Origem das Espécies' em 1859, propondo que as espécies evoluem por seleção natural: os mais adaptados sobrevivem e se reproduzem mais."
      },
      {
        tema: "Matemática — Progressões",
        pergunta: "Na progressão aritmética 2, 5, 8, 11..., qual é o valor da razão?",
        alternativas: ["2", "3", "4", "5"],
        correta: 1,
        explicacao: "A razão de uma PA é a diferença constante entre termos consecutivos: 5−2=3, 8−5=3. Portanto a razão é 3."
      },
      {
        tema: "Sociologia — Nível médio",
        pergunta: "O que é estratificação social?",
        alternativas: ["O processo de migração de populações entre países", "A divisão da sociedade em camadas hierarquicamente organizadas", "O conjunto de leis que regulam o trabalho", "O movimento de igualdade de direitos entre grupos sociais"],
        correta: 1,
        explicacao: "A estratificação social é a divisão da sociedade em grupos hierarquizados (classes, castas, estamentos) com base em renda, prestígio e poder."
      },
      {
        tema: "Geografia — Países",
        pergunta: "Qual é o país com maior população do mundo atualmente?",
        alternativas: ["China", "Índia", "Estados Unidos", "Indonésia"],
        correta: 1,
        explicacao: "A Índia superou a China em 2023, tornando-se o país mais populoso do mundo, com mais de 1,4 bilhão de habitantes."
      },
      {
        tema: "Física — Ondas",
        pergunta: "O que é frequência de uma onda?",
        alternativas: ["A distância entre dois picos consecutivos de uma onda", "A velocidade com que a onda se propaga no meio", "O número de ciclos completos que uma onda realiza por segundo", "A altura máxima da onda em relação à posição de equilíbrio"],
        correta: 2,
        explicacao: "A frequência é o número de oscilações completas por segundo, medida em Hertz (Hz). Ela determina a nota de um som ou a cor da luz."
      },
      {
        tema: "Biologia — Fotossíntese",
        pergunta: "Qual é a equação resumida da fotossíntese?",
        alternativas: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia", "6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂", "CO₂ + H₂O → O₂ + glicose", "H₂O + luz → CO₂ + C₆H₁₂O₆"],
        correta: 1,
        explicacao: "Na fotossíntese, plantas usam luz, CO₂ e água para produzir glicose e liberar O₂. Equação: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂."
      },
      {
        tema: "Química — Soluções",
        pergunta: "O que é um soluto?",
        alternativas: ["O líquido que dissolve o soluto", "A substância que é dissolvida em um solvente para formar uma solução", "A mistura resultante da dissolução", "A concentração da mistura"],
        correta: 1,
        explicacao: "O soluto é a substância dissolvida em um solvente. Em água com sal, o sal é o soluto e a água é o solvente."
      },
      {
        tema: "Matemática — Geometria",
        pergunta: "O Teorema de Pitágoras afirma que, em um triângulo retângulo, a hipotenusa ao quadrado é igual a:",
        alternativas: ["A soma dos ângulos internos", "A soma dos quadrados dos catetos", "O produto dos catetos", "O dobro da área do triângulo"],
        correta: 1,
        explicacao: "O Teorema de Pitágoras: c² = a² + b², onde c é a hipotenusa e a, b são os catetos. É fundamental na geometria plana e espacial."
      },
      {
        tema: "Filosofia — Nível médio",
        pergunta: "O que é o método científico?",
        alternativas: ["Uma forma de filosofia baseada apenas na intuição", "Um conjunto de etapas sistemáticas (observação, hipótese, experimento, conclusão) para produzir conhecimento confiável", "Um tipo de argumento lógico sem comprovação", "Uma corrente filosófica do século XIX"],
        correta: 1,
        explicacao: "O método científico é o processo sistemático de observar, formular hipóteses, testar por meio de experimentos e analisar resultados para gerar conhecimento verificável."
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
      },
      {
        tema: "Concurso Público - Informática: formatos de arquivo",
        pergunta: "O que significa a sigla PDF?",
        alternativas: ["Program Data File", "Personal Document Format", "Portable Document Format", "Processed Data File"],
        correta: 2,
        explicacao: "PDF (Portable Document Format) é um formato de arquivo criado pela Adobe que preserva a formatação de documentos independentemente do sistema ou software usado para abri-lo."
      },
      {
        tema: "Concurso Público - Informática: atalhos",
        pergunta: "Qual atalho de teclado é usado para copiar um texto selecionado no Windows?",
        alternativas: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"],
        correta: 1,
        explicacao: "Ctrl+C é o atalho padrão para copiar no Windows. Ctrl+X recorta, Ctrl+V cola e Ctrl+Z desfaz a última ação."
      },
      {
        tema: "Concurso Público - Informática: redes",
        pergunta: "O que é um firewall?",
        alternativas: ["Um sistema que monitora e controla o tráfego de rede para bloquear acessos não autorizados", "Um programa que organiza arquivos no computador", "Um tipo de memória de alta velocidade", "Um protocolo para transferência de e-mails"],
        correta: 0,
        explicacao: "O firewall é um sistema de segurança que filtra o tráfego de rede, permitindo ou bloqueando conexões com base em regras definidas para proteger o sistema."
      },
      {
        tema: "Concurso Público - Informática: linguagens web",
        pergunta: "Qual linguagem de marcação é usada para estruturar o conteúdo de páginas web?",
        alternativas: ["CSS", "JavaScript", "Python", "HTML"],
        correta: 3,
        explicacao: "HTML (HyperText Markup Language) é a linguagem de marcação base para criar páginas web. CSS define o estilo e JavaScript a interatividade."
      },
      {
        tema: "Concurso Público - Informática: e-mail",
        pergunta: "Qual protocolo é utilizado para o envio de e-mails?",
        alternativas: ["FTP", "SMTP", "HTTP", "DNS"],
        correta: 1,
        explicacao: "O SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para envio de e-mails entre servidores. POP3 e IMAP são usados para recebimento."
      },
      {
        tema: "Concurso Público - Informática: segurança",
        pergunta: "O que é phishing?",
        alternativas: ["Uma técnica para enganar usuários e roubar dados pessoais por meio de mensagens falsas", "Um tipo de vírus que apaga arquivos do computador", "Um programa usado para proteger redes", "Um método de compressão de arquivos"],
        correta: 0,
        explicacao: "Phishing é uma técnica de engenharia social em que golpistas se passam por entidades confiáveis para enganar usuários e obter senhas, dados bancários ou informações pessoais."
      },
      {
        tema: "Concurso Público - Informática: atalhos",
        pergunta: "No Microsoft Word, qual atalho de teclado é usado para salvar um documento?",
        alternativas: ["Ctrl+P", "Ctrl+A", "Ctrl+S", "Ctrl+N"],
        correta: 2,
        explicacao: "Ctrl+S salva o documento atual no Word (e na maioria dos aplicativos Windows). Ctrl+P imprime, Ctrl+A seleciona tudo e Ctrl+N cria um novo documento."
      },
      {
        tema: "Concurso Público - Informática: conceitos",
        pergunta: "O que é um algoritmo?",
        alternativas: ["Um tipo de vírus de computador", "Uma sequência finita e ordenada de instruções para resolver um problema", "Um hardware para processamento gráfico", "Uma linguagem de programação específica"],
        correta: 1,
        explicacao: "Um algoritmo é uma sequência lógica e finita de instruções que resolve um problema ou realiza uma tarefa. É a base de toda programação."
      },
      {
        tema: "Concurso Público - Informática: redes",
        pergunta: "O que é um endereço IP?",
        alternativas: ["Um protocolo de segurança de e-mails", "Um identificador numérico único atribuído a cada dispositivo em uma rede", "Um tipo de cabo de rede", "Um programa para gerenciar conexões"],
        correta: 1,
        explicacao: "O endereço IP (Internet Protocol) é um número único que identifica cada dispositivo conectado a uma rede, permitindo o envio e recebimento correto de dados."
      },
      {
        tema: "Concurso Público - Informática: hardware",
        pergunta: "O que é a memória RAM?",
        alternativas: ["Um tipo de armazenamento permanente de dados", "Uma memória volátil de acesso rápido que armazena dados temporariamente enquanto o computador está ligado", "O componente que controla o teclado e o mouse", "Um disco de estado sólido"],
        correta: 1,
        explicacao: "A RAM (Random Access Memory) é volátil (perde os dados ao desligar) e armazena temporariamente os dados dos programas em execução para acesso rápido."
      },
      {
        tema: "Concurso Público - Informática: segurança",
        pergunta: "O que é uma VPN?",
        alternativas: ["Um tipo de vírus que intercepta conexões", "Uma rede privada virtual que cria um canal seguro e criptografado na internet", "Um programa de antivírus", "Um protocolo para transferência de arquivos"],
        correta: 1,
        explicacao: "VPN (Virtual Private Network) cria um túnel criptografado entre o dispositivo do usuário e um servidor remoto, garantindo privacidade e segurança na navegação."
      },
      {
        tema: "Concurso Público - Informática: sistema operacional",
        pergunta: "O que é o sistema operacional Linux?",
        alternativas: ["Um sistema operacional proprietário da Microsoft", "Um sistema operacional de código aberto (open source) baseado no Unix", "Um navegador de internet", "Um pacote de aplicativos de escritório"],
        correta: 1,
        explicacao: "Linux é um sistema operacional de código aberto criado por Linus Torvalds em 1991. É usado em servidores, dispositivos móveis (Android) e muito cobrado em concursos de TI."
      },
      {
        tema: "Concurso Público - Informática: banco de dados",
        pergunta: "O que é SQL?",
        alternativas: ["Uma linguagem de programação para desenvolvimento web", "Uma linguagem estruturada para consulta e manipulação de bancos de dados relacionais", "Um sistema operacional para servidores", "Um protocolo de comunicação de redes"],
        correta: 1,
        explicacao: "SQL (Structured Query Language) é a linguagem padrão para gerenciar bancos de dados relacionais: criar, consultar, atualizar e excluir dados em tabelas."
      },
      {
        tema: "Concurso Público - Informática: hardware",
        pergunta: "Qual componente é responsável pelo processamento gráfico em um computador?",
        alternativas: ["CPU", "RAM", "GPU (placa de vídeo)", "SSD"],
        correta: 2,
        explicacao: "A GPU (Graphics Processing Unit) é especializada no processamento de imagens, vídeos e gráficos, essencial para jogos e edição de vídeo."
      },
      {
        tema: "Concurso Público - Informática: internet",
        pergunta: "O que é um endereço URL?",
        alternativas: ["Um tipo de arquivo de texto usado em páginas web", "O endereço único de um recurso na internet, como uma página web", "Um protocolo de segurança de redes", "Um identificador de dispositivos em redes locais"],
        correta: 1,
        explicacao: "URL (Uniform Resource Locator) é o endereço de um recurso na internet. Por exemplo: https://www.exemplo.com.br identifica e localiza uma página web."
      },
      {
        tema: "Concurso Público - Informática: segurança",
        pergunta: "O que é ransomware?",
        alternativas: ["Um programa que melhora o desempenho do computador", "Um malware que criptografa arquivos da vítima e exige resgate para devolver o acesso", "Um tipo de spyware que monitora a navegação", "Um antivírus de código aberto"],
        correta: 1,
        explicacao: "O ransomware sequestra os dados do usuário, criptografando seus arquivos e exigindo pagamento (geralmente em criptomoeda) para restaurar o acesso."
      },
      {
        tema: "Concurso Público - Informática: office",
        pergunta: "No Microsoft Word, qual é a função do botão 'Mesclar e Centralizar' em uma tabela?",
        alternativas: ["Divide uma célula em várias menores", "Une células adjacentes em uma única célula e centraliza o conteúdo", "Aplica bordas em todas as células da tabela", "Remove o conteúdo das células selecionadas"],
        correta: 1,
        explicacao: "'Mesclar e Centralizar' une as células selecionadas em uma única e centraliza o conteúdo. Muito usado para criar cabeçalhos em tabelas no Word e Excel."
      },
      {
        tema: "Concurso Público - Informática: redes",
        pergunta: "O que é o protocolo HTTPS?",
        alternativas: ["Uma versão mais rápida do HTTP para arquivos grandes", "O HTTP com camada de criptografia SSL/TLS, garantindo comunicação segura entre cliente e servidor", "Um protocolo exclusivo para redes internas", "Um tipo de firewall de rede"],
        correta: 1,
        explicacao: "HTTPS é o HTTP combinado com SSL/TLS, garantindo que os dados transmitidos entre navegador e servidor sejam criptografados e autenticados."
      },
      {
        tema: "Concurso Público - Informática: hardware",
        pergunta: "Qual é a diferença entre HD e SSD?",
        alternativas: ["O SSD usa discos magnéticos girando, enquanto o HD usa memória flash", "O HD usa discos magnéticos giratórios, enquanto o SSD usa memória flash sem partes móveis", "Não há diferença funcional entre os dois", "O HD é exclusivo para notebooks e o SSD para desktops"],
        correta: 1,
        explicacao: "O HD armazena dados em pratos magnéticos giratórios e é mais lento. O SSD usa memória flash, sendo muito mais rápido, silencioso e resistente a impactos."
      },
      {
        tema: "Concurso Público - Informática: internet",
        pergunta: "O que é a computação em nuvem (cloud computing)?",
        alternativas: ["Um sistema de resfriamento para servidores", "O armazenamento e processamento de dados em servidores remotos acessados via internet", "Um tipo de rede local sem fio", "Um protocolo de comunicação entre computadores"],
        correta: 1,
        explicacao: "Computação em nuvem é o fornecimento de serviços de TI (armazenamento, processamento, software) pela internet, sem infraestrutura local no usuário."
      },
      {
        tema: "Concurso Público - Informática: atalhos",
        pergunta: "Qual atalho de teclado é usado para desfazer a última ação na maioria dos programas Windows?",
        alternativas: ["Ctrl+Y", "Ctrl+Z", "Ctrl+X", "Ctrl+D"],
        correta: 1,
        explicacao: "Ctrl+Z é o atalho universal para desfazer a última ação em praticamente todos os programas Windows. Ctrl+Y refaz a ação desfeita."
      },
      {
        tema: "Concurso Público - Informática: sistema operacional",
        pergunta: "O que é o 'Gerenciador de Tarefas' no Windows?",
        alternativas: ["Um programa para organizar arquivos em pastas", "Uma ferramenta que mostra e permite gerenciar os processos e aplicativos em execução", "Um backup automático de arquivos", "Um antivírus integrado ao Windows"],
        correta: 1,
        explicacao: "O Gerenciador de Tarefas (Ctrl+Shift+Esc) exibe processos ativos, uso de CPU e memória, e permite encerrar programas travados."
      },
      {
        tema: "Concurso Público - Informática: redes",
        pergunta: "O que é Wi-Fi?",
        alternativas: ["Um cabo de rede de alta velocidade", "Uma tecnologia de rede sem fio baseada no padrão IEEE 802.11", "Um protocolo de segurança de e-mails", "Um tipo de modem para conexões discadas"],
        correta: 1,
        explicacao: "Wi-Fi é uma tecnologia de rede sem fio baseada no padrão IEEE 802.11, que permite conexão de dispositivos à internet sem uso de cabos."
      },
      {
        tema: "Concurso Público - Informática: office",
        pergunta: "No Microsoft Excel, o que faz a função CONT.SE?",
        alternativas: ["Soma valores que atendem a um critério", "Conta o número de células que atendem a um critério específico", "Calcula a média de um intervalo", "Localiza e retorna um valor em uma tabela"],
        correta: 1,
        explicacao: "CONT.SE conta quantas células em um intervalo satisfazem um critério. Exemplo: =CONT.SE(A1:A10;\"aprovado\") conta quantas vezes 'aprovado' aparece no intervalo."
      },
      {
        tema: "Concurso Público - Informática: segurança",
        pergunta: "O que é autenticação de dois fatores (2FA)?",
        alternativas: ["O uso de duas senhas diferentes para acessar um sistema", "Um método de segurança que requer dois tipos diferentes de verificação para confirmar a identidade", "Um tipo de firewall duplo", "Um antivírus com duas camadas de proteção"],
        correta: 1,
        explicacao: "A 2FA exige dois tipos distintos de comprovação (ex.: senha + código SMS), dificultando o acesso não autorizado mesmo que a senha seja comprometida."
      },
      {
        tema: "Concurso Público - Informática: hardware",
        pergunta: "Qual é a função da BIOS/UEFI em um computador?",
        alternativas: ["Gerenciar os arquivos salvos no disco rígido", "Ser o firmware que inicializa o hardware e carrega o sistema operacional", "Controlar a velocidade do processador em tempo real", "Gerenciar a memória RAM durante o uso do sistema"],
        correta: 1,
        explicacao: "A BIOS ou UEFI é o firmware gravado na placa-mãe responsável por inicializar o hardware e carregar o sistema operacional quando o computador é ligado."
      },
      {
        tema: "Concurso Público - Informática: internet",
        pergunta: "O que é um servidor DNS?",
        alternativas: ["Um servidor que armazena e-mails", "Um servidor que traduz nomes de domínio em endereços IP", "Um servidor que distribui conexões de internet por Wi-Fi", "Um sistema de segurança para redes corporativas"],
        correta: 1,
        explicacao: "O DNS (Domain Name System) traduz nomes de domínio legíveis (como google.com) para os endereços IP numéricos que os computadores usam para se comunicar."
      },
      {
        tema: "Concurso Público - Informática: office",
        pergunta: "No PowerPoint, o que é um 'slide mestre'?",
        alternativas: ["O primeiro slide da apresentação", "Um slide modelo que define o layout e formatação padrão de todos os slides", "O slide com mais conteúdo na apresentação", "Um slide bloqueado para edição"],
        correta: 1,
        explicacao: "O slide mestre define fontes, cores, plano de fundo e layouts padrão para toda a apresentação. Alterá-lo afeta todos os slides de forma consistente."
      },
      {
        tema: "Concurso Público - Informática: sistema operacional",
        pergunta: "O que é um arquivo de extensão '.exe' no Windows?",
        alternativas: ["Um arquivo de texto simples", "Um arquivo executável que inicia um programa ou instalador", "Um arquivo de imagem comprimida", "Um arquivo de configuração do sistema"],
        correta: 1,
        explicacao: "Arquivos .exe (executable) são programas executáveis no Windows. Ao clicar duas vezes, o sistema os executa, iniciando um programa ou instalador."
      },
      {
        tema: "Concurso Público - Informática: redes",
        pergunta: "O que é largura de banda (bandwidth) em redes?",
        alternativas: ["A distância máxima que um sinal de rede pode percorrer", "A quantidade máxima de dados que podem ser transmitidos por um canal em determinado tempo", "O número máximo de dispositivos conectados a uma rede", "A segurança de uma conexão de rede"],
        correta: 1,
        explicacao: "A largura de banda é a capacidade máxima de transmissão de dados de uma conexão, geralmente em Mbps ou Gbps. Maior banda = mais dados por segundo."
      },
      {
        tema: "Concurso Público - Informática: segurança",
        pergunta: "O que é engenharia social no contexto da segurança da informação?",
        alternativas: ["O desenvolvimento de sistemas seguros por equipes de engenheiros", "Técnicas de manipulação psicológica para enganar pessoas e obter informações confidenciais", "Um ramo da engenharia que estuda infraestrutura de TI", "Um método de criptografia avançada"],
        correta: 1,
        explicacao: "Engenharia social é a manipulação psicológica de pessoas para que revelem informações ou realizem ações que comprometam a segurança. Phishing é o exemplo mais comum."
      },
      {
        tema: "Concurso Público - Informática: office",
        pergunta: "No Excel, o que faz a função PROCV (VLOOKUP)?",
        alternativas: ["Soma os valores de uma coluna inteira", "Procura um valor na primeira coluna de uma tabela e retorna um valor de outra coluna na mesma linha", "Conta células não vazias em um intervalo", "Calcula a variância de um conjunto de dados"],
        correta: 1,
        explicacao: "PROCV busca um valor na primeira coluna de uma tabela e retorna o correspondente de outra coluna especificada. É uma das funções mais cobradas em concursos."
      },
      {
        tema: "Concurso Público - Informática: conceitos",
        pergunta: "O que é software de código aberto (open source)?",
        alternativas: ["Um software gratuito, mas cujo código não pode ser modificado", "Um software cujo código-fonte é disponibilizado publicamente, permitindo uso, modificação e distribuição", "Um tipo de software exclusivo para governo", "Um software sem suporte técnico disponível"],
        correta: 1,
        explicacao: "Software open source tem o código-fonte disponível para qualquer pessoa ver, modificar e distribuir. Exemplos: Linux, Firefox, LibreOffice."
      },
      {
        tema: "Concurso Público - Informática: internet",
        pergunta: "O que é um protocolo de internet?",
        alternativas: ["Um cabo de conexão de alta velocidade", "Um conjunto de regras que define como os dados são transmitidos e recebidos em uma rede", "Um tipo de sistema operacional de rede", "Um programa de gerenciamento de e-mails"],
        correta: 1,
        explicacao: "Um protocolo é um conjunto padronizado de regras que permite comunicação entre dispositivos. Exemplos: HTTP (web), SMTP (e-mail), TCP/IP (base da internet)."
      },
      {
        tema: "Concurso Público - Informática: hardware",
        pergunta: "O que é a placa-mãe (motherboard)?",
        alternativas: ["O componente que gera energia elétrica para o computador", "A placa principal que interliga todos os componentes de hardware do computador", "O dispositivo que armazena o sistema operacional", "O componente responsável pela saída de vídeo"],
        correta: 1,
        explicacao: "A placa-mãe é o circuito impresso principal. Nela conectam-se CPU, RAM, HD/SSD, GPU e demais componentes, permitindo a comunicação entre todos eles."
      },
      {
        tema: "Concurso Público - Informática: sistema operacional",
        pergunta: "O que é desfragmentação de disco?",
        alternativas: ["O processo de apagar definitivamente arquivos do computador", "O processo de reorganizar os fragmentos de arquivos no disco rígido para melhorar o desempenho", "A formatação completa do disco rígido", "A compressão de arquivos para economizar espaço"],
        correta: 1,
        explicacao: "A desfragmentação reorganiza fragmentos dispersos no HD em setores contíguos, melhorando a velocidade de leitura. SSDs não precisam de desfragmentação."
      },
      {
        tema: "Concurso Público - Informática: conceitos",
        pergunta: "O que é backup?",
        alternativas: ["A exclusão segura de arquivos desnecessários", "Uma cópia de segurança de dados feita para recuperação em caso de perda ou dano", "A sincronização de arquivos entre dois computadores", "Um programa de varredura de vírus"],
        correta: 1,
        explicacao: "Backup é a cópia de segurança armazenada em local separado do original. Em caso de falha, vírus ou exclusão acidental, permite restaurar as informações."
      },
      {
        tema: "Concurso Público - Informática: redes",
        pergunta: "Qual é a função de um roteador em uma rede de computadores?",
        alternativas: ["Armazenar cópias de páginas web para acesso rápido", "Direcionar o tráfego de dados entre diferentes redes, encaminhando pacotes ao destino correto", "Converter sinais analógicos em digitais", "Ampliar o sinal de Wi-Fi sem encaminhar dados"],
        correta: 1,
        explicacao: "O roteador direciona pacotes de dados entre redes diferentes (ex.: sua rede doméstica e a internet), escolhendo o melhor caminho para cada pacote."
      },
      {
        tema: "Concurso Público - Informática: office",
        pergunta: "No Excel, o que representa o símbolo $ em uma referência como $A$1?",
        alternativas: ["Indica o valor em moeda da célula", "Torna a referência absoluta, impedindo que mude ao copiar a fórmula", "Indica que a célula está protegida", "Representa uma fórmula de porcentagem"],
        correta: 1,
        explicacao: "O $ torna a referência absoluta (fixa). Ao copiar uma fórmula com $A$1, ela sempre apontará para A1, independente de onde for colada."
      },
      {
        tema: "Concurso Público - Informática: segurança",
        pergunta: "O que é criptografia?",
        alternativas: ["O processo de compressão de arquivos para economizar espaço", "O processo de transformar dados legíveis em formato codificado, ilegível sem a chave correta", "Um método de backup de dados em nuvem", "Um protocolo para transferência de arquivos grandes"],
        correta: 1,
        explicacao: "Criptografia transforma informações em formato ilegível (cifrado) usando algoritmos matemáticos. Somente quem possui a chave correta pode decifrar os dados originais."
      },
      {
        tema: "Concurso Público - Informática: conceitos",
        pergunta: "O que é um SGBD (Sistema de Gerenciamento de Banco de Dados)?",
        alternativas: ["Um programa para criar apresentações de slides", "Um software que gerencia, organiza e permite o acesso a bancos de dados", "Um sistema operacional especializado em redes", "Um hardware de armazenamento de alta capacidade"],
        correta: 1,
        explicacao: "Um SGBD gerencia e controla o acesso a bancos de dados. Exemplos: MySQL, PostgreSQL, Oracle, SQL Server. É tema recorrente em concursos de TI."
      },
      {
        tema: "Concurso Público - Informática: formatos de arquivo",
        pergunta: "O que significa a sigla PDF?",
        alternativas: ["Program Data File", "Personal Document Format", "Portable Document Format", "Processed Data File"],
        correta: 2,
        explicacao: "PDF (Portable Document Format) é um formato criado pela Adobe que preserva a formatação do documento independentemente do sistema ou software usado para abri-lo."
      },
      {
        tema: "Concurso Público - Informática: redes",
        pergunta: "O que é um endereço MAC?",
        alternativas: ["Um endereço de e-mail corporativo", "Um identificador físico único gravado na placa de rede de cada dispositivo", "Um tipo de endereço IP versão 6", "Um protocolo de segurança sem fio"],
        correta: 1,
        explicacao: "O endereço MAC (Media Access Control) é um identificador único de 48 bits gravado pelo fabricante na placa de rede. É usado na camada de enlace para comunicação em redes locais."
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

// --- Modo escuro ---
const darkToggle = document.getElementById("dark-toggle");
const aplicarModoEscuro = (ativo) => {
  document.body.classList.toggle("dark-mode", ativo);
  darkToggle.textContent = ativo ? "☀️" : "🌙";
  darkToggle.title = ativo ? "Modo claro" : "Modo escuro";
};

const modoEscuroSalvo = localStorage.getItem("modoEscuro") === "true";
aplicarModoEscuro(modoEscuroSalvo);

darkToggle.addEventListener("click", () => {
  const ativo = !document.body.classList.contains("dark-mode");
  aplicarModoEscuro(ativo);
  localStorage.setItem("modoEscuro", ativo);
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

function embaralhar(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escolherCategoria(chave) {
  categoriaAtual = categorias[chave];

  const PERGUNTAS_POR_JOGO = 7;

  perguntasAtuais = embaralhar(categoriaAtual.perguntas)
    .slice(0, PERGUNTAS_POR_JOGO)
    .map((p) => {
      const respostaCorreta = p.alternativas[p.correta];
      const alternativasEmbaralhadas = embaralhar(p.alternativas);
      return {
        ...p,
        alternativas: alternativasEmbaralhadas,
        correta: alternativasEmbaralhadas.indexOf(respostaCorreta)
      };
    });

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
  const pct = Math.round((pontuacao / total) * 100);

  if (pct === 100) {
    resultTag.textContent = "Perfeito! 🏆";
    resultTitle.textContent = "Gol de placa! Você acertou tudo!";
  } else if (pct >= 70) {
    resultTag.textContent = "Muito bem! ⚽";
    resultTitle.textContent = "Ótimo desempenho em campo!";
  } else if (pct >= 40) {
    resultTag.textContent = "Bom esforço! 💪";
    resultTitle.textContent = "Você está progredindo!";
  } else {
    resultTag.textContent = "Continue treinando! 📚";
    resultTitle.textContent = "O banco do reservas te espera!";
  }

  resultSummary.textContent = `Você acertou ${pontuacao} de ${total} perguntas (${pct}%). Cada nova rodada traz perguntas diferentes — tente de novo!`;
}

startButton.addEventListener("click", () => {
  mostrarSelecaoCategoria();
});

restartButton.addEventListener("click", () => {
  resultCard.classList.add("hidden");
  mostrarSelecaoCategoria();
});

nextButton.addEventListener("click", () => {
  avancarPergunta();
});

document.getElementById("cat-coracao").addEventListener("click", () => {
  escolherCategoria("coracao");
});

document.getElementById("cat-futebol").addEventListener("click", () => {
  escolherCategoria("futebol");
});

document.getElementById("cat-informatica").addEventListener("click", () => {
  escolherCategoria("informatica");
});

document.getElementById("cat-ensinomedio").addEventListener("click", () => {
  escolherCategoria("ensinomedio");
});
