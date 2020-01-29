import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Estados: ENTRADA, RODANDO e FIM
  const [estado, setEstado] = useState("ENTRADA");

  // Chutes (número deve ser entre 0 e 1000)
  const [chute, setChute] = useState(500);
  const [numChutes, setNumChutes] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setChute(500);
    setNumChutes(1);
    setMin(0);
    setMax(1000);
  };

  const menor = () => {
    setNumChutes(numChutes + 1);
    setMax(chute);
    setChute(parseInt(min + (chute - min) / 2));
  };

  const maior = () => {
    setNumChutes(numChutes + 1);
    setMin(chute);
    setChute(parseInt(chute + (max - chute) / 2));
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "ENTRADA") {
    return (
      <div>
        <p>
          Pense em um número entre 0 e 1000 e vamos ver em quantos chutes eu
          adivinho!
        </p>
        <button onClick={iniciarJogo}>Começar</button>
      </div>
    );
  }
  if (estado === "RODANDO") {
    return (
      <div>
        <p>Você pensou {chute}?</p>
        Min: {min} / Max: {max}
        <button onClick={menor}>Menor</button>
        <button onClick={acertou}>ACERTOU!!!</button>
        <button onClick={maior}>Maior</button>
      </div>
    );
  }
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o seu número {chute} em {numChutes} chutes!
        </p>
        <button onClick={iniciarJogo}>De novo!</button>
      </div>
    );
  }
}
