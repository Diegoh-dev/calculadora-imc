const button = document.getElementById("button");

const calcular = () => {
  const inputPeso = document.querySelector("#peso");
  const inputAltura = document.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    return setDivResultado("Peso inválido", false);
  } else if (!altura) {
    return setDivResultado("Altura inválido", false);
  }

  const imc = calculaImc(peso, altura);
  console.log(imc);

  const classificacao = estadoNutricional(imc);

  const msg = `Seu IMC é ${imc} (${classificacao})`;

  setDivResultado(msg, true);
};

const estadoNutricional = (imc) => {
  const classificacao = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau ",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return classificacao[5];
  if (imc >= 34.9) return classificacao[4];
  if (imc >= 29.9) return classificacao[3];
  if (imc >= 24.9) return classificacao[2];
  if (imc >= 18.5) return classificacao[1];
  if (imc < 18.5) return classificacao[0];
};

const calculaImc = (peso, altura) => {
  const imc = peso / altura ** 2;

  return imc.toFixed(2);
};

const criaParagrafo = () => {
  const p = document.createElement("p");

  return p;
};

const setDivResultado = (msg, isvalid) => {
  const resultado = document.querySelector("#resultado");

  const p = criaParagrafo();

  resultado.innerHTML = "";

  if (isvalid) {
    p.classList.add("resultado-paragrafo");
  } else {
    p.classList.add("erro");
  }
  p.innerHTML = msg;

  resultado.appendChild(p);
};

button.addEventListener("click", calcular);
