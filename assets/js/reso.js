/*
-  Parar o envio envio do formulario, capturando o evento de submit.

- criar uma função (setResultado) que a unica função dela é adicionar algo dentro da div de resultado.
*/

const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  /* referência ao objeto que enviou o evento (form)
  quem esta recebendo o evento*/
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  // função que calcula o imc
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);
});

const getNivelImc = (imc) => {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];

  if (imc >= 34.9) return nivel[4];

  if (imc >= 29.9) return nivel[3];

  if (imc >= 24.9) return nivel[2];

  if (imc >= 18.5) return nivel[1];

  if (imc < 18.5) return nivel[0];
};

const criarParagrafo = () => {
  // criando o paragrafo. => createElement()
  const p = document.createElement("p");

  return p;
};

const setResultado = (msg, isvalid) => {
  //isvalid para validar se backgraound vai ser verde ou vermelho
  const resultado = document.querySelector("#resultado");

  resultado.innerHTML = "";

  const p = criarParagrafo();

  if (isvalid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  //Criar um elemento (paragrafo) com javascript, adicionar algo e colocar ele dentro da div (resoltado)

  // adicionando uma classe ao (p)
  // p.classList.add("resultado-paragrafo");
  //adicionando texto ao paragrafo
  p.innerHTML = msg;
  // inserindo o (p) como um filho da div resultado.
  resultado.appendChild(p);
};

// função que calcula o imc
const getImc = (peso, altura) => {
  const imc = peso / altura ** 2;

  return imc.toFixed(2);
};
