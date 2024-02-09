const perguntas = [
    {
      pergunta: "Qual é a estação do ano mais quente?",
      respostas: [
        "Primavera",
        "Verão",
        "Outono",
      ],
      correta: 1
    },
    {
      pergunta: "Em que estação do ano ocorrem as famosas festas de Carnaval?",
      respostas: [
        "Outono",
        "Inverno",
        "Verão",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a estação do ano que marca o início do ano letivo na maioria das escolas?",
      respostas: [
        "Inverno",
        "Primavera",
        "Verão",
      ],
      correta: 2
    },
    {
      pergunta: "Em que estação do ano ocorrem as festas juninas?",
      respostas: [
        "Inverno",
        "Verão",
        "Outono",
      ],
      correta: 0
    },
    {
      pergunta: "Qual estação do ano é conhecida por trazer chuvas para a região Sudeste do Brasil?",
      respostas: [
        "Primavera",
        "Outono",
        "Verão",
      ],
      correta: 2
    },
    {
      pergunta: "Em que estação do ano é comum a ocorrência de queimadas e incêndios florestais?",
      respostas: [
        "Outono",
        "Inverno",
        "Verão",
      ],
      correta: 2
    },
    {
      pergunta: "Qual estação do ano é marcada pelo início da safra de diversas frutas?",
      respostas: [
        "Primavera",
        "Verão",
        "Inverno",
      ],
      correta: 0
    },
    {
      pergunta: "Em que estação do ano os brasileiros costumam aproveitar as praias e o litoral?",
      respostas: [
        "Outono",
        "Inverno",
        "Verão",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a estação do ano que é marcada pelo florescimento de diversas árvores?",
      respostas: [
        "Verão",
        "Primavera",
        "Outono",
      ],
      correta: 1
    },
    {
      pergunta: "Em que estação do ano as temperaturas são mais amenas na região Sul do Brasil?",
      respostas: [
        "Primavera",
        "Outono",
        "Verão",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
  
  //loop ou laço de repetição
  for (const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
  
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
    quizItem.querySelector ('dl'). appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }