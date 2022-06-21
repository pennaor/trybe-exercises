import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div>
        {
        conteudos.map((conteudo) => {
          return (
          <ul key={conteudo.conteudo}>
            <li>{`O conteúdo é: ${conteudo.conteudo}`}</li>
            <li>{`Status: ${conteudo.status}`}</li>
            <li>{`Bloco: ${conteudo.bloco}`}</li>
          </ul>
          );
        })
        }
      </div>
    );
  }
}

export default Content;
