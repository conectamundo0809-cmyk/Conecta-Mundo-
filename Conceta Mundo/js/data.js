/**
 * data.js — Dados mockados da aplicação
 * Conceta Mundo
 */

const DB = (() => {
  const STORIES_KEY = 'cm_stories';
  const QUESTIONS_KEY = 'cm_questions';

  /* ── Seed de Relatos ── */
  const SEED_STORIES = [
    {
      id: 's1',
      autorId: 'u1',
      titulo: '10 meses em Dublin: tudo que ninguém te conta',
      resumo: 'Cheguei sem saber que o sol era artigo de luxo em Dublin. Aprendi inglês, descobri o gosto de Guinness (afogado em chuva) e voltei uma pessoa completamente diferente.',
      conteudo: `Quando recebi a notícia que havia sido selecionada para a bolsa de intercâmbio, a primeira coisa que fiz foi abrir o Google Maps e procurar Dublin. Não sabia quase nada sobre a Irlanda — exceto que chovia muito.

E bom... chovia MUITO mesmo. Mas essa é a menor parte da história.

**A chegada**

Pousei num domingo de outubro com uma mala enorme e o coração na garganta. Minha família anfitriã me esperava no aeroporto com um cartaz escrito "Bem-vinda, Ana!" em português. Aquele gesto simples quebrou toda a ansiedade.

**A escola**

Fui para uma escola pública de Dublin, onde tinha estudantes de mais de 30 países. Meu inglês era básico nos primeiros meses — eu me comunicava com muito gestos e o Google Translate. Mas depois de 3 meses, já estava tendo conversas reais sobre política, música e cultura.

**O que ninguém te conta**

A saudade bate mais forte nos primeiros 60 dias. Não é só saudade da família — é saudade do cheirinho da comida de casa, da novela de fundo, do barulho familiar. Isso passa. Prometo.

O que também ninguém conta é que você vai criar vínculos com pessoas do mundo inteiro. Hoje tenho amigos no Japão, na Alemanha, no México — amigos de verdade, que visitei e me visitaram.

**O Suporte e a Orientação**

O suporte do programa de bolsas foi fundamental. Tínhamos orientadores que nos acompanhavam mensalmente, um grupo de WhatsApp com todos os intercambistas brasileiros e um protocolo claro para emergências. Em nenhum momento me senti abandonada.

**Voltei sendo outra pessoa**

Meu inglês passou de básico para fluente. Minha autoconfiança explodiu. Passei no vestibular com nota que nunca tinha tirado. Mas o mais importante: aprendi que sou capaz de me virar em qualquer situação, em qualquer lugar do mundo.

Se você está em dúvida sobre se inscrever — se inscreva. O pior que pode acontecer é você crescer demais.`,
      pais: 'Irlanda',
      cidade: 'Dublin',
      programa: 'Bolsa de Intercâmbio',
      ano: 2023,
      duracao: '10 meses',
      tags: ['adaptação', 'escola', 'família anfitriã', 'inglês', 'saudade', 'crescimento'],
      curtidas: ['u4'],
      comentarios: [
        { id: 'c1', autorId: 'u4', texto: 'Que relato incrível! Me deu ainda mais vontade de me inscrever. Qual foi o nível de inglês exigido na seleção?', data: '2024-05-10' }
      ],
      visualizacoes: 347,
      capa: 'dublin',
      destaque: true,
      createdAt: '2024-05-01'
    },
    {
      id: 's2',
      autorId: 'u2',
      titulo: 'Toronto e eu: como o frio de -20°C me ensinou a ser resiliente',
      resumo: 'Nunca tinha visto neve na vida. Em Toronto aprendi que o frio não é o pior inimigo — o pior inimigo é o medo de tentar.',
      conteudo: `Toronto no inverno tem temperaturas que chegam a -20°C. Eu, menino de Fortaleza, nunca tinha visto neve de perto.

**O começo foi duro**

Os primeiros meses foram os mais difíceis da minha vida. Não pelo frio — mas pela sensação de não entender nada. As pessoas falavam rápido, usavam gírias que não estavam no dicionário, e eu ficava sorrindo sem entender nada em reuniões.

Mas fiz o que aprendi com outros intercambistas da rede: pedi ajuda.

**O ponto de virada**

No terceiro mês, entrei para o time de futebol da escola. Ali estava minha turma — rapazes de Ghana, Filipinas, Jamaica e Colômbia, todos no mesmo barco. A língua do esporte é universal.

**A família que escolhi**

Minha família anfitriã era canadense-italiana. A senhora Maria cozinhava pasta toda sexta-feira e exigia que eu aprendesse pelo menos uma receita nova por semana. Hoje cozinho melhor do que a maioria dos meus amigos.

**O que o Programa de Bolsas fez por mim**

Além da bolsa integral, o programa pagou passagens, seguro saúde, material escolar e uma ajuda de custo mensal. Sem isso, seria impossível para a minha família bancar essa experiência.

**Hoje**

Voltei fluente em inglês, com uma rede de contatos internacional e com uma clareza de propósito que nunca tive. Estou no terceiro ano de Relações Internacionais e já sei que vou trabalhar fora do Brasil.`,
      pais: 'Canadá',
      cidade: 'Toronto',
      programa: 'Bolsa de Intercâmbio',
      ano: 2022,
      duracao: '12 meses',
      tags: ['neve', 'frio', 'resiliência', 'esporte', 'família anfitriã', 'inglês'],
      curtidas: ['u4', 'u1'],
      comentarios: [],
      visualizacoes: 289,
      capa: 'canada',
      destaque: true,
      createdAt: '2024-04-18'
    },
    {
      id: 's3',
      autorId: 'u3',
      titulo: 'Lisboa de bonde: quando o intercâmbio é aqui do lado',
      resumo: 'Todo mundo quer ir longe. Eu fui para Lisboa e descobri que a distância não define o tamanho da transformação.',
      conteudo: `"Portugal? Mas lá fala português!" Essa foi a reação de todo mundo quando contei meu destino.

Eu mesma fiquei um pouco decepcionada no começo. Queria tanto ir para um país com idioma diferente, sentir aquela adrenalina do "não entendo nada".

Mas Lisboa me deu uma lição que nenhum outro país poderia dar.

**O português europeu é uma língua nova**

Spoiler: o português de Portugal não é igual ao nosso. Os sotaques, as expressões, o vocabulário — tudo diferente. Meus colegas de escola levavam um tempo para me entender e eu a eles. Foi desafiador do jeito certo.

**A história que respira nas ruas**

Enquanto passeava de bonde pelo Alfama, percebi que estava num lugar com 800 anos de história. Cada calçada de paralelepípedo, cada azulejo — tudo contava uma história. Aprendi mais história em 8 meses de Lisboa do que em 3 anos de escola.

**A Vivência em Lisboa**

O programa de intercâmbio tinha um escritório parceiro em Lisboa que nos apoiava localmente. Participei de intercâmbios culturais com outros estudantes internacionais — alemães, japoneses, americanos. Era uma ONU em miniatura.

**O retorno**

Voltei com uma perspectiva completamente diferente sobre o Brasil. Ver o país de longe te faz amar e criticar de forma mais madura. Entrei no curso de Arquitetura inspirada pelos prédios históricos de Lisboa.

A distância não importa. O que importa é a imersão.`,
      pais: 'Portugal',
      cidade: 'Lisboa',
      programa: 'Bolsa de Intercâmbio',
      ano: 2023,
      duracao: '8 meses',
      tags: ['lisboa', 'história', 'cultura', 'vestibular', 'amadurecimento'],
      curtidas: [],
      comentarios: [
        { id: 'c2', autorId: 'u2', texto: 'Lisboa é incrível mesmo! Que parte da cidade você mais gostou?', data: '2024-05-05' }
      ],
      visualizacoes: 198,
      capa: 'portugal',
      destaque: false,
      createdAt: '2024-03-22'
    }
  ];

  /* ── Seed de Perguntas do Fórum ── */
  const SEED_QUESTIONS = [
    {
      id: 'q1',
      autorId: 'u4',
      titulo: 'Qual é o nível de inglês mínimo exigido para se candidatar ao intercâmbio?',
      corpo: 'Tenho 16 anos e estou no 2° ano do Ensino Médio. Faço inglês há 2 anos mas ainda não sou fluente. Dá para ser selecionado assim?',
      categoria: 'seleção',
      tags: ['inglês', 'seleção', 'requisitos'],
      respostas: [
        {
          id: 'r1',
          autorId: 'u1',
          conteudo: 'Oi! Quando me inscrevi também não era fluente. O programa avalia disposição para aprender, não fluência. Eles realizam testes básicos de compreensão e uma entrevista para avaliar personalidade e maturidade. Meu conselho: pratique conversação antes da seleção e demonstre interesse genuíno pela cultura do país.',
          votos: 8,
          createdAt: '2024-05-08'
        },
        {
          id: 'r2',
          autorId: 'u2',
          conteudo: 'Concordo com a Ana! Eu mesmo mal sabia inglês quando fui selecionado. O que conta é a motivação. E olha — você vai aprender o inglês DE VERDADE estando lá. Escola, família, amigos... tudo em inglês. Em 3 meses você já está se virando bem.',
          votos: 6,
          createdAt: '2024-05-09'
        }
      ],
      visualizacoes: 124,
      resolvida: true,
      createdAt: '2024-05-07'
    },
    {
      id: 'q2',
      autorId: 'u4',
      titulo: 'Como funciona a família anfitriã? Posso escolher?',
      corpo: 'Fiquei com medo de não me adaptar com a família que me colocarem. O programa permite que a gente peça uma família específica ou dê preferências?',
      categoria: 'família anfitriã',
      tags: ['família anfitriã', 'adaptação', 'seleção'],
      respostas: [
        {
          id: 'r3',
          autorId: 'u3',
          conteudo: 'Você não escolhe a família, mas preenche um formulário detalhado com suas preferências e estilo de vida — se você tem animais, preferência por zona urbana ou rural, dieta, etc. O programa faz o matching com base nessas informações. No meu caso, pedi família com pets e ganhei uma família com dois cachorros lindos 🐕',
          votos: 11,
          createdAt: '2024-05-12'
        }
      ],
      visualizacoes: 89,
      resolvida: false,
      createdAt: '2024-05-11'
    },
    {
      id: 'q3',
      autorId: 'u4',
      titulo: 'O programa cobre todos os gastos? Preciso de dinheiro extra?',
      corpo: 'Minha família não tem muita condição financeira. Quero saber se dá pra ir sem depender de mandar dinheiro de casa.',
      categoria: 'documentação',
      tags: ['bolsa', 'financeiro', 'custos'],
      respostas: [
        {
          id: 'r4',
          autorId: 'u2',
          conteudo: 'A maioria das bolsas de intercâmbio público é 100% gratuita para o estudante selecionado. Cobre: passagem aérea ida e volta, seguro saúde internacional, material escolar, hospedagem na família anfitriã (alimentação inclusa) e uma ajuda de custo mensal para despesas pessoais. É possível ir sem nenhum dinheiro extra. Claro, se quiser fazer passeios ou comprar lembranças, um dinheirinho extra ajuda — mas não é obrigatório.',
          votos: 15,
          createdAt: '2024-05-13'
        }
      ],
      visualizacoes: 201,
      resolvida: true,
      createdAt: '2024-05-12'
    }
  ];

  /* ── Destinos disponíveis ── */
  const DESTINOS = [
    { id: 'd1', pais: 'Irlanda', bandeira: '🇮🇪', capital: 'Dublin', idioma: 'Inglês', duracao: '6 meses', programa: 'Jovens Embaixadores', descricao: 'Terra de castelos, tradições e um inglês que vai transformar sua vida.', cor: '#169b62' },
    { id: 'd2', pais: 'Canadá', bandeira: '🇨🇦', capital: 'Toronto / Vancouver', idioma: 'Inglês / Francês', duracao: '10 meses', programa: 'Líderes Estaduais', descricao: 'Multiculturalismo, natureza exuberante e uma das melhores educações do mundo.', cor: '#d80621' },
    { id: 'd3', pais: 'Portugal', bandeira: '🇵🇹', capital: 'Lisboa / Porto', idioma: 'Português Europeu', duracao: '3 meses', programa: 'Bolsa CPLP', descricao: 'História, arte e uma nova perspectiva sobre nossa língua e cultura.', cor: '#006600' },
    { id: 'd4', pais: 'Alemanha', bandeira: '🇩🇪', capital: 'Berlim / Munique', idioma: 'Alemão', duracao: '12 meses', programa: 'Paci Alemanha', descricao: 'Inovação, eficiência e uma cultura que vai expandir seus horizontes.', cor: '#000000' },
    { id: 'd5', pais: 'França', bandeira: '🇫🇷', capital: 'Paris / Lyon', idioma: 'Francês', duracao: '3 meses', programa: 'Estudos Francófonos', descricao: 'Arte, gastronomia e o charme inconfundível da língua francesa.', cor: '#002395' },
    { id: 'd6', pais: 'Espanha', bandeira: '🇪🇸', capital: 'Madrid / Barcelona', idioma: 'Espanhol', duracao: '3 meses', programa: 'Conexão Mundo', descricao: 'Vibração, cultura rica e um espanhol que vai te surpreender.', cor: '#c60b1e' }
  ];

  /* ── Helpers de localStorage ── */
  function _initSeed() {
    if (!localStorage.getItem(STORIES_KEY)) {
      localStorage.setItem(STORIES_KEY, JSON.stringify(SEED_STORIES));
    }
    if (!localStorage.getItem(QUESTIONS_KEY)) {
      localStorage.setItem(QUESTIONS_KEY, JSON.stringify(SEED_QUESTIONS));
    }
  }

  function getStories() {
    _initSeed();
    return JSON.parse(localStorage.getItem(STORIES_KEY)) || [];
  }

  function saveStories(stories) {
    localStorage.setItem(STORIES_KEY, JSON.stringify(stories));
  }

  function getQuestions() {
    _initSeed();
    return JSON.parse(localStorage.getItem(QUESTIONS_KEY)) || [];
  }

  function saveQuestions(questions) {
    localStorage.setItem(QUESTIONS_KEY, JSON.stringify(questions));
  }

  /* ── API de Relatos ── */
  const Stories = {
    getAll() {
      return getStories().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    getById(id) {
      return getStories().find(s => s.id === id) || null;
    },
    getByAutor(autorId) {
      return getStories().filter(s => s.autorId === autorId);
    },
    getDestaques() {
      return getStories().filter(s => s.destaque).slice(0, 3);
    },
    create(dados) {
      const stories = getStories();
      const newStory = {
        id: 's_' + Date.now(),
        autorId: dados.autorId,
        titulo: dados.titulo,
        resumo: dados.resumo,
        conteudo: dados.conteudo,
        pais: dados.pais,
        cidade: dados.cidade || '',
        programa: 'Bolsa de Intercâmbio',
        ano: parseInt(dados.ano),
        duracao: dados.duracao || '',
        tags: dados.tags || [],
        curtidas: [],
        comentarios: [],
        visualizacoes: 0,
        capa: dados.pais.toLowerCase(),
        destaque: false,
        createdAt: new Date().toISOString().split('T')[0]
      };
      stories.unshift(newStory);
      saveStories(stories);
      return newStory;
    },
    toggleCurtida(storyId, userId) {
      const stories = getStories();
      const idx = stories.findIndex(s => s.id === storyId);
      if (idx === -1) return null;
      const curtidas = stories[idx].curtidas;
      const pos = curtidas.indexOf(userId);
      if (pos === -1) curtidas.push(userId);
      else curtidas.splice(pos, 1);
      saveStories(stories);
      return stories[idx];
    },
    addComentario(storyId, autorId, texto) {
      const stories = getStories();
      const idx = stories.findIndex(s => s.id === storyId);
      if (idx === -1) return null;
      const comentario = {
        id: 'c_' + Date.now(),
        autorId,
        texto,
        data: new Date().toISOString().split('T')[0]
      };
      stories[idx].comentarios.push(comentario);
      saveStories(stories);
      return comentario;
    },
    incrementViews(storyId) {
      const stories = getStories();
      const idx = stories.findIndex(s => s.id === storyId);
      if (idx !== -1) {
        stories[idx].visualizacoes = (stories[idx].visualizacoes || 0) + 1;
        saveStories(stories);
      }
    }
  };

  /* ── API de Perguntas ── */
  const Questions = {
    getAll() {
      return getQuestions().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    getById(id) {
      return getQuestions().find(q => q.id === id) || null;
    },
    create(dados) {
      const questions = getQuestions();
      const newQ = {
        id: 'q_' + Date.now(),
        autorId: dados.autorId,
        titulo: dados.titulo,
        corpo: dados.corpo,
        categoria: dados.categoria,
        tags: dados.tags || [],
        respostas: [],
        visualizacoes: 0,
        resolvida: false,
        createdAt: new Date().toISOString().split('T')[0]
      };
      questions.unshift(newQ);
      saveQuestions(questions);
      return newQ;
    },
    addResposta(questionId, autorId, conteudo) {
      const questions = getQuestions();
      const idx = questions.findIndex(q => q.id === questionId);
      if (idx === -1) return null;
      const resposta = {
        id: 'r_' + Date.now(),
        autorId,
        conteudo,
        votos: 0,
        createdAt: new Date().toISOString().split('T')[0]
      };
      questions[idx].respostas.push(resposta);
      saveQuestions(questions);
      return resposta;
    },
    marcarResolvida(questionId) {
      const questions = getQuestions();
      const idx = questions.findIndex(q => q.id === questionId);
      if (idx !== -1) {
        questions[idx].resolvida = true;
        saveQuestions(questions);
      }
    }
  };

  /* ── API de Destinos ── */
  const Destinations = {
    getAll() { return DESTINOS; },
    getById(id) { return DESTINOS.find(d => d.id === id) || null; },
    getByPais(pais) { return DESTINOS.find(d => d.pais === pais) || null; }
  };

  _initSeed();

  return { Stories, Questions, Destinations };
})();
