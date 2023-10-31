const chatContainer = document.getElementById('chat');

 

 

 

let step = 0;

let selectedCountry = '';

 

 

 

const decisionTree = [

  {

    question: 'Você gosta de comer massa?',

    country: 'Itália'

  },

  {

    question: 'Você gosta de muitos pontos turísticos?',

    country: 'França'

  },

  {

    question: 'Você gosta de ser assaltado?',

    country: 'Brasil'

  },

  {

    question: 'Você gosta de comer insetos?',

    country: 'China'

  },

  {

    question: 'Você gosta de animais?',

    country: 'Austrália'

  },

  {

    question: 'Você gosta de segurança, estabilidade financeira e uma boa educação?',

    country: 'Singapura'

  },

  {

    question: 'Você gosta de sentir fome?',

    country: 'África'

  },

  {

    question: 'Você gosta de riquezas?',

    country: 'Dubai'

  },

  {

    question: 'Você gosta de frio e guerras?',

    country: 'Rússia'

  },

  {

    question: 'Você gosta de calor?',

    country: 'Malásia'

  }

];

 

 

 

function addMessage(message, sender) {

  const messageDiv = document.createElement('div');

  messageDiv.className = `message ${sender}-message`;

  const avatar = document.createElement('img');

  avatar.src = sender === 'bot' ? 'images/7893979.png' : 'images/user-avatar.png';

  avatar.alt = sender;

  avatar.className = 'avatar';

  messageDiv.appendChild(avatar);

  const messageContent = document.createElement('div');

  messageContent.className = 'message-content';

  messageContent.textContent = message;

  messageDiv.appendChild(messageContent);

  chatContainer.appendChild(messageDiv);

}

 

 

 

function askQuestion() {

  if (step >= decisionTree.length) {

    if (selectedCountry) {

      addMessage(`Fim do questionário. Recomendamos o país: ${selectedCountry}.`, 'bot');

    } else {

      addMessage('Fim do questionário. Não conseguimos encontrar um país adequado com base em suas respostas.', 'bot');

    }

    document.querySelectorAll('.response-button').forEach(button => button.style.display = 'none');

    return;

  }

 

 

 

  const currentStep = decisionTree[step];

  addMessage(currentStep.question, 'bot');

  step++;

}

 

 

 

function answerQuestion(response) {

  if (step <= decisionTree.length) {

    const currentStep = decisionTree[step - 1];

    addMessage(response, 'user');

 

 

 

    if (response === 'Sim') {

      selectedCountry = currentStep.country;

    }

 

 

 

    askQuestion();

  }

}

 

 

 

askQuestion();