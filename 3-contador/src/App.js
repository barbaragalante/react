import React from 'react';
import './App.css';   

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  adicionarUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador + 1
      }
    })
  }

  subtraiUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador -1
      }
    })
  }

  resetar = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador = 0
      }
    })
  }


  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.alternaVisibilidade}>
        {this.state.visivel === true ? "Fechar Contador" :"Abrir Contador" }</button>
        <button className="btnMaisUm" onClick={this.adicionarUm}>+1</button>
        <button className="btnMenosUm" onClick={this.subtraiUm}>-1</button>
        <button className="btnResetar" onClick={this.resetar}>resetar</button>
      </div>
    );
  }
}

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}
export default App; 