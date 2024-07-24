// Obtém o elemento HTML com o id 'display' e o armazena na variável 'display'.
let display = document.getElementById('display');

// Função para limpar o conteúdo do display
function clearDisplay() {
// Define o texto interno do elemento 'display' como '0'.
  display.innerText = '0';
}

// Função para adicionar um número ao display
function appendNumber (number) {
  if (display.innerText ==='0') { // Verifica se o texto atual do display é '0'.
    display.innerText = number;   // Se for '0', substitui o texto do display pelo número fornecido.
  } else {
    display.innerText += number;  // Caso contrário, adiciona o número ao texto atual do display.
  }
}

// Função para calcular a expressão matemática no display
function calculate() {
  try {
    display.innerText = eval(display.innerText); // Tenta avaliar a expressão matemática no texto do display.
  } catch {
    display.innerText = 'Error' // Se ocorrer um erro, define o texto do display como 'Error'.
  }
}

// Função para calcular a raiz quadrada do número no display
function sqrt() { 
    try {
        display.innerText = Math.sqrt(parseFloat(display.innerText)); // Converte o texto do display para um número de ponto flutuante e calcula a raiz quadrada.
    } catch {
        display.innerText = 'Error'; // Se ocorrer um erro, define o texto do display como 'Error'.
    }
}